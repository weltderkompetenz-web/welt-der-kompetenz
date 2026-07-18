document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. ROUTAGE & DICTIONNAIRE SÉCURISÉ DES NUMÉROS DE TÉLÉPHONE (VÉRIFIÉS)
       ========================================================================== */
    const servicesRouting = {
        "allemand": "49157812140",       // Allemagne (+49)
        "web": "2290158255572",         // Bénin (+229)
        "saas": "22996966297",
        "ui-ux": "22955172503",
        "tiktok": "2290158255572",
        "invitations": "2290158255572",
        "apps": "22955172503",
        "ia": "22996966297",
        "general": "2290158255572"       // Numéro central par défaut
    };


    /* ==========================================================================
       2. SYSTÈME SÉCURISÉ DE GESTION DE THÈME (DARK / LIGHT MODE)
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
       3. ANIMATION PARALLAXE FLUIDE SUR L'AXE Y
       ========================================================================== */
    window.addEventListener('scroll', () => {
        const bg = document.getElementById('parallaxBg');
        let offset = window.pageYOffset;
        bg.style.backgroundPositionY = `${offset * 0.4}px`;
    });


    /* ==========================================================================
       4. DETECTION AU SCROLL (APPARITION PROGRESSIVE DES BLOCS - REVEAL)
       ========================================================================== */
    const reveals = document.querySelectorAll('.reveal');
    
    function handleScrollReveal() {
        const triggerBottom = window.innerHeight * 0.88;
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < triggerBottom) {
                reveal.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', handleScrollReveal);
    handleScrollReveal(); // Execution initiale au cas où


    /* ==========================================================================
       5. ROUTAGE ET DYNAMISME DU FORMULAIRE VIA LES BOUTONS "COMMANDER"
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
            titleElement.innerText = "Initier un projet";
        } else {
            const label = selectElement.options[selectElement.selectedIndex].text;
            titleElement.innerText = `Commander : ${label}`;
        }
    }


    /* ==========================================================================
       6. INTERFACE FILTRABLE POUR LE PORTFOLIO DE RÉALISATIONS
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
       7. TRAITEMENT DU FORMULAIRE, SÉCURITÉ ANTI-XSS ET ENVOI WHATSAPP CIBLÉ
       ========================================================================== */
    const orderForm = document.getElementById('orderForm');
    let currentRedirectUrl = ""; // Stockage temporaire sécurisé du lien généré

    // Fonction de nettoyage basique pour neutraliser l'injection de scripts malveillants
    function sanitizeInput(string) {
        const temp = document.createElement('div');
        temp.textContent = string;
        return temp.innerHTML;
    }

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Extraction et sécurisation des chaînes de caractères saisies par l'utilisateur
        const lastName = sanitizeInput(document.getElementById('clientLastName').value.trim());
        const firstName = sanitizeInput(document.getElementById('clientFirstName').value.trim());
        const serviceKey = selectElement.value;
        const serviceLabel = selectElement.options[selectElement.selectedIndex].text;
        const whatsappNumber = sanitizeInput(document.getElementById('clientWhatsapp').value.trim());
        const budget = sanitizeInput(document.getElementById('projectBudget').value.trim());
        const urgency = document.getElementById('projectUrgency').value;
        const description = sanitizeInput(document.getElementById('projectDesc').value.trim());

        if (serviceKey === 'general') {
            alert("Veuillez sélectionner une expertise ou un service précis avant de valider.");
            return;
        }

        // Construction sémantique du message encodé pour WhatsApp
        const messageTemplate = `*WELT DER KOMPETENZEN - NOUVELLE COMMANDE*\n\n` +
                                `• *Client :* ${lastName} ${firstName}\n` +
                                `• *Service :* ${serviceLabel}\n` +
                                `• *Contact WhatsApp :* ${whatsappNumber}\n` +
                                `• *Budget :* ${budget}\n` +
                                `• *Urgence :* ${urgency}\n\n` +
                                `*Description du besoin :*\n${description}`;

        const encodedMessage = encodeURIComponent(messageTemplate);
        
        // Sélection automatique de la route téléphonique correspondante au service choisi
        const destinationPhone = servicesRouting[serviceKey] || servicesRouting['general'];
        
        // Assignation de l'URL finale pour redirection
        currentRedirectUrl = `https://wa.me/${destinationPhone}?text=${encodedMessage}`;

        // Déclenchement de la fenêtre modale UX professionnelle
        document.getElementById('successModal').classList.add('active');
        
        // Reset automatique du formulaire
        orderForm.reset();
        updateTitleStructure();
    });

    // Fonctions globales d'accès à la fermeture de la fenêtre d'état
    window.closeModal = function() {
        document.getElementById('successModal').classList.remove('active');
        if (currentRedirectUrl !== "") {
            window.open(currentRedirectUrl, '_blank');
            currentRedirectUrl = ""; // purge de la variable par sécurité
        }
    };
});