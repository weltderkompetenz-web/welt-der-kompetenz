document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. EFFET PARALLAXE DE L'IMAGE DE FOND
       ========================================================================== */
    window.addEventListener('scroll', () => {
        const bg = document.getElementById('parallaxBg');
        let offset = window.pageYOffset;
        // Décale légèrement l'arrière-plan pour un effet 3D au scroll
        bg.style.transform = `translateY(${offset * 0.4}px)`; 
    });


    /* ==========================================================================
       2. REVEAL ANIMATION (APPARITION FLUIDE DES ÉLÉMENTS AU SCROLL)
       ========================================================================== */
    const reveals = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85;
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < triggerBottom) {
                reveal.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Exécuter une fois au chargement pour afficher le Hero initial


    /* ==========================================================================
       3. SÉLECTION ET ROUTAGE DYNAMIQUE VERS LE FORMULAIRE
       ========================================================================== */
    const orderButtons = document.querySelectorAll('.btn-order');
    const selectElement = document.getElementById('serviceSelect');
    const titleElement = document.getElementById('formTitle');

    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const serviceValue = e.target.getAttribute('data-service');
            
            // Modifier la valeur du sélecteur
            selectElement.value = serviceValue;
            updateFormTitle();
            
            // Scroll fluide vers la section commande
            document.getElementById('commander').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Écouter les changements manuels faits directement sur le menu déroulant
    selectElement.addEventListener('change', updateFormTitle);

    function updateFormTitle() {
        const selectedText = selectElement.options[selectElement.selectedIndex].text;
        if (selectElement.value === 'general') {
            titleElement.innerText = "Formuler votre besoin";
        } else {
            titleElement.innerText = `Commander : ${selectedText}`;
        }
    }


    /* ==========================================================================
       4. FILTRAGE DYNAMIQUE DE LA GALERIE PORTFOLIO
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Gérer la classe active sur les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const filterValue = e.target.getAttribute('data-filter');

            // Filtrer les images avec transitions propres
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });


    /* ==========================================================================
       5. TRAITEMENT ET VALIDATION DU FORMULAIRE DE COMMANDE
       ========================================================================== */
    const orderForm = document.getElementById('orderForm');

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const service = selectElement.value;
        const name = document.getElementById('clientName').value;
        const email = document.getElementById('clientEmail').value;
        const criteria = document.getElementById('criteria').value;

        // Message de succès interactif (Simulé)
        alert(`Merci ${name} ! Votre demande pour le service [${service}] a bien été transmise à l'équipe centrale de WELT DER KOMPETENZEN. Un email de confirmation sera envoyé à ${email}.`);
        
        // Réinitialiser le formulaire
        orderForm.reset();
        updateFormTitle();
    });

});