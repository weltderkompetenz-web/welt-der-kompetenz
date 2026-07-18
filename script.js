document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. CONFIGURATION DU ROUTAGE MULTI-NUMÉROS WHATSAPP
       ========================================================================== */
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
       2. MOTEUR D'ANIMATION PERSPECTIVE 3D SUR LES CARDS
       ========================================================================== */
    const cards = document.querySelectorAll('.3d-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            
            // Calcul de l'angle d'inclinaison (max 15 degrés pour l'élégance UI)
            const angleX = (yc - y) / 10;
            const angleY = (x - xc) / 10;
            
            card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    });

    /* ==========================================================================
       3. INTERRUPTEUR DE THÈME DE COULEURS (DARK / LIGHT)
       ========================================================================== */
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

    /* ==========================================================================
       4. LOGIQUE PARALLAXE FLUIDE SUR L'ARRIÈRE-PLAN
       ========================================================================== */
    window.addEventListener('scroll', () => {
        const bg = document.getElementById('parallaxBg');
        let offset = window.pageYOffset;
        bg.style.backgroundPositionY = `${offset * 0.35}px`;
    });

    /* ==========================================================================
       5. GESTION DU SCROLL REVEAL EFFICACE
       ========================================================================== */
    const reveals = document.querySelectorAll('.reveal');
    function handleScrollReveal() {
        const triggerBottom = window.innerHeight * 0.9;
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < triggerBottom) {
                reveal.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', handleScrollReveal);
    handleScrollReveal();

    /* ==========================================================================
       6. INTERACTION DE SÉLECTION DYNAMIQUE DE SERVICES
       ========================================================================== */
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

    /* ==========================================================================
       7. FILTRAGE DE L'ESPACE PORTFOLIO
       ========================================================================== */
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

    /* ==========================================================================
       8. GESTION DES ENVOIS DE FORMULAIRES ET SÉCURISATION DES DONNÉES SENSIVLES
       ========================================================================== */
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
            alert("Veuillez sélectionner un pôle de compétences précis avant de poursuivre.");
            return;
        }

        const messageTemplate = `*WELT DER KOMPETENZEN - UNIQUE COMMANDE*\n\n` +
                                `• *Identité :* ${lastName} ${firstName}\n` +
                                `• *Pôle :* ${serviceLabel}\n` +
                                `• *WhatsApp :* ${whatsappNumber}\n` +
                                `• *Enveloppe :* ${budget}\n` +
                                `• *Urgence :* ${urgency}\n\n` +
                                `*Spécifications techniques :*\n${description}`;

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