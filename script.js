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

    // Protection au cas où l'élément themeToggle n'existe pas ou a été modifié dans le HTML
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-theme')) {
                body.classList.replace('dark-theme', 'light-theme');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                body.classList.replace('light-theme', 'dark-theme');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        });
    }


    /* ==========================================================================
       Nouveau : LOGIQUE D'OUVERTURE DU MENU HAMBURGER (MOBILE)
       ========================================================================== */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('header nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            // Bascule l'affichage du menu mobile de façon dynamique
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = 'var(--bg-dark)';
                navMenu.style.padding = '20px';
                navMenu.style.borderBottom = '1px solid var(--card-border)';
            }
        });

        // Ferme automatiquement le menu mobile au clic sur un lien
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                }
            });
        });
    }


    /* ==========================================================================
       3. ANIMATION PARALLAXE FLUIDE SUR L'AXE Y
       ========================================================================== */
    window.addEventListener('scroll', () => {
        const bg = document.getElementById('parallaxBg');
        if (bg) {
            let offset = window.pageYOffset;
            bg.style.backgroundPositionY = `${offset * 0.4}px`;
        }
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
            if (selectElement) selectElement.value = targetService;
            updateTitleStructure();
            const commanderSection = document.getElementById('commander');
            if (commanderSection) commanderSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    if (selectElement) {
        selectElement.addEventListener('change', updateTitleStructure);
    }

    function updateTitleStructure() {
        if (!selectElement || !titleElement) return;
        if (selectElement.value === 'general') {
            titleElement.innerText = "Formuler votre besoin";
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

    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!selectElement) return;

            // ADAPTATION SÉCURISÉE DES ANCIENS SÉCTEURS VERS LES NOUVEAUX IDS DU FORMULAIRE MAQUETTE
            const clientNameInput = document.getElementById('clientName');
            const clientEmailInput = document.getElementById('clientEmail');
            const criteriaInput = document.getElementById('criteria');

            const clientName = clientNameInput ? sanitizeInput(clientNameInput.value.trim()) : "Non spécifié";
            const clientEmail = clientEmailInput ? sanitizeInput(clientEmailInput.value.trim()) : "Non spécifié";
            const serviceKey = selectElement.value;
            const serviceLabel = selectElement.options[selectElement.selectedIndex].text;
            const description = criteriaInput ? sanitizeInput(criteriaInput.value.trim()) : "";

            if (serviceKey === 'general') {
                alert("Veuillez sélectionner une expertise ou un service précis avant de valider.");
                return;
            }

            // Construction sémantique du message encodé pour WhatsApp tout en respectant l'organisation initiale
            const messageTemplate = `*WELT DER KOMPETENZEN - NOUVELLE COMMANDE*\n\n` +
                                    `• *Client :* ${clientName}\n` +
                                    `• *Email de Contact :* ${clientEmail}\n` +
                                    `• *Service demandé :* ${serviceLabel}\n\n` +
                                    `*Description du besoin et critères :*\n${description}`;

            const encodedMessage = encodeURIComponent(messageTemplate);
            
            // Sélection automatique de la route téléphonique correspondante au service choisi
            const destinationPhone = servicesRouting[serviceKey] || servicesRouting['general'];
            
            // Assignation de l'URL finale pour redirection
            currentRedirectUrl = `https://wa.me/${destinationPhone}?text=${encodedMessage}`;

            // Déclenchement ou redirection directe selon présence de la modale d'état
            const successModal = document.getElementById('successModal');
            if (successModal) {
                successModal.classList.add('active');
            } else {
                // Redirection fallback si la modale de succès n'existe pas dans la structure HTML actuelle
                window.open(currentRedirectUrl, '_blank');
                currentRedirectUrl = "";
            }
            
            // Reset automatique du formulaire
            orderForm.reset();
            updateTitleStructure();
        });
    }

    // Fonctions globales d'accès à la fermeture de la fenêtre d'état
    window.closeModal = function() {
        const successModal = document.getElementById('successModal');
        if (successModal) {
            successModal.classList.remove('active');
        }
        if (currentRedirectUrl !== "") {
            window.open(currentRedirectUrl, '_blank');
            currentRedirectUrl = ""; // purge de la variable par sécurité
        }
    };
});