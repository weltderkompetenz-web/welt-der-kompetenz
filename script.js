document.addEventListener('DOMContentLoaded', () => {

    const servicesRouting = {
        "allemand": "49157812140",
        "web": "2290158255572",
        "saas": "22996966297",
        "ui-ux": "22955172503",
        "tiktok": "2290158255572",
        "invitations": "2290158255572",
        "apps": "22955172503",
        "ia": "22996966297",
        "general": "2290158255572"
    };

    /* ==========================================================================
       GESTION DE L'INCLINAISON ET ANIMATION 3D DES CARDS SERVICES
       ========================================================================== */
    const cards = document.querySelectorAll('.3d-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            const angleX = (yc - y) / 12;
            const angleY = (x - xc) / 12;
            card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    });

    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    window.addEventListener('scroll', () => {
        const bg = document.getElementById('parallaxBg');
        let offset = window.pageYOffset;
        bg.style.backgroundPositionY = `${offset * 0.4}px`;
    });

    const reveals = document.querySelectorAll('.reveal');
    function handleScrollReveal() {
        const triggerBottom = window.innerHeight * 0.88;
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < triggerBottom) reveal.classList.add('active');
        });
    }
    window.addEventListener('scroll', handleScrollReveal);
    handleScrollReveal();

    const orderButtons = document.querySelectorAll('.btn-order');
    const selectElement = document.getElementById('serviceSelect');
    const titleElement = document.getElementById('formTitle');

    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const targetService = e.target.getAttribute('data-service');
            selectElement.value = targetService;
            updateTitleStructure();
            document.getElementById('commander').scrollIntoView({ behavior: 'smooth' });
        });
    });

    selectElement.addEventListener('change', updateTitleStructure);

    function updateTitleStructure() {
        if (selectElement.value === 'general') {
            titleElement.innerText = "Commander votre projet";
        } else {
            const label = selectElement.options[selectElement.selectedIndex].text;
            titleElement.innerText = `Commander : ${label}`;
        }
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            const filterCriterion = e.target.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterCriterion === 'all' || category === filterCriterion) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    const orderForm = document.getElementById('orderForm');
    let currentRedirectUrl = "";

    function sanitizeInput(string) {
        const temp = document.createElement('div');
        temp.textContent = string;
        return temp.innerHTML;
    }

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const lastName = sanitizeInput(document.getElementById('clientLastName').value.trim());
        const firstName = sanitizeInput(document.getElementById('clientFirstName').value.trim());
        const serviceKey = selectElement.value;
        const serviceLabel = selectElement.options[selectElement.selectedIndex].text;
        const whatsappNumber = sanitizeInput(document.getElementById('clientWhatsapp').value.trim());
        const budget = sanitizeInput(document.getElementById('projectBudget').value.trim());
        const urgency = document.getElementById('projectUrgency').value;
        const description = sanitizeInput(document.getElementById('projectDesc').value.trim());

        if (serviceKey === 'general') {
            alert("Veuillez sélectionner un service précis.");
            return;
        }

        const messageTemplate = `*WELT DER KOMPETENZEN - NOUVELLE COMMANDE*\n\n` +
                                `• *Client :* ${lastName} ${firstName}\n` +
                                `• *Service :* ${serviceLabel}\n` +
                                `• *Contact WhatsApp :* ${whatsappNumber}\n` +
                                `• *Budget :* ${budget}\n` +
                                `• *Urgence :* ${urgency}\n\n` +
                                `*Description du besoin :*\n${description}`;

        const encodedMessage = encodeURIComponent(messageTemplate);
        const destinationPhone = servicesRouting[serviceKey] || servicesRouting['general'];
        currentRedirectUrl = `https://wa.me/${destinationPhone}?text=${encodedMessage}`;

        document.getElementById('successModal').classList.add('active');
        orderForm.reset();
        updateTitleStructure();
    });

    window.closeModal = function() {
        document.getElementById('successModal').classList.remove('active');
        if (currentRedirectUrl !== "") {
            window.open(currentRedirectUrl, '_blank');
            currentRedirectUrl = "";
        }
    };
});