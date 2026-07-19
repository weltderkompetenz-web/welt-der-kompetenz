/**
 * WELT DER KOMPETENZEN - Core Application Engine
 * Premium UX Architecture, Admin Mailing & Safe MoneyFusion Gateway Routing
 */

// --- 1. DATA CONFIGURATION (SERVICES & PORTFOLIO IMAGES UNIQUES ET SÉPARÉES) ---
const SERVICES_DATA = [
    { title: "Professeur d'Allemand", phone: "0157812140", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80", desc: "Formations et cours linguistiques d'élite. Allemand professionnel, académique et perfectionnement sur mesure pour l'international." },
    { title: "Création de Site Web", phone: "0158255572", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80", desc: "Développement d'écosystèmes vitrines et applicatifs haut de gamme. Optimisation SEO avancée, 4K UX design, fluidité maximale." },
    { title: "Création de SaaS", phone: "96966297", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", desc: "Architecture Cloud souveraine et évolutive. Conception de plateformes logicielles complexes adaptées à la monétisation immédiate." },
    { title: "Design UI/UX", phone: "55172503", img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80", desc: "Maquettes haute fidélité, wireframing stratégique et design émotionnel axé sur la rétention utilisateur." },
    { title: "Compte TikTok Monétisé", phone: "0158255572", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80", desc: "Création de comptes clés en main éligibles aux programmes de récompenses. Configuration algorithmique optimale." },
    { title: "Faire-part & Cartes Premium", phone: "0158255572", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80", desc: "Créations graphiques et papeterie de prestige pour invitations corporatives ou événements privés haut de gamme." },
    { title: "Application Mobile", phone: "55172503", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80", desc: "Applications natives et cross-platforme iOS/Android. Expérience immersive fluide, notifications et performances ultimes." },
    { title: "Automatisation IA & CRM", phone: "96966297", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80", desc: "Interconnexion d'agents d'intelligence artificielle et optimisation des pipelines CRM pour éradiquer les tâches chronophages." }
];

const PORTFOLIO_DATA = [
    { 
        title: "Plateforme Linguistique DeutschPro", 
        serviceIdx: 0, 
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80", 
        link: "https://example.com/demo-deutsch", 
        type: "web" 
    },
    { 
        title: "E-Commerce Luxury & Headless Architecture", 
        serviceIdx: 1, 
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80", 
        link: "https://example.com/demo-shop", 
        type: "web" 
    },
    { 
        title: "SaaS Enterprise Resource Planning Analytics", 
        serviceIdx: 2, 
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", 
        link: "https://example.com/demo-saas", 
        type: "web" 
    },
    { 
        title: "UI/UX Mobile Fintech App Redesign", 
        serviceIdx: 3, 
        img: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&w=600&q=80", 
        link: "https://example.com/demo-ui", 
        type: "web" 
    },
    { 
        title: "Réseau TikTok Media Booster Agency", 
        serviceIdx: 4, 
        img: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=600&q=80", 
        link: "https://example.com/demo-tiktok", 
        type: "web" 
    },
    { 
        title: "Faire-Part Numérique Prestige Royal Ébène", 
        serviceIdx: 5, 
        img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80", 
        link: "https://example.com/demo-invitation.pdf", 
        type: "pdf" 
    },
    { 
        title: "App Mobile Livraison Express & Géolocalisée", 
        serviceIdx: 6, 
        img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=600&q=80", 
        link: "https://example.com/demo-app", 
        type: "web" 
    },
    { 
        title: "Dashboard Automatisation IA & Workflow Hub", 
        serviceIdx: 7, 
        img: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=600&q=80", 
        link: "https://example.com/demo-crm-ai", 
        type: "web" 
    }
];

const TESTIMONIALS_DATA = [
    { name: "Koffi Mensah", country: "Côte d'Ivoire", flag: "🇨🇮", stars: 5, text: "Le SaaS livré a transformé notre logistique à Abidjan. Chapeau bas à Emmanuel." },
    { name: "Awa Diop", country: "Sénégal", flag: "🇸🇳", stars: 5, text: "L'interface UI/UX de notre application mobile fait l'unanimité auprès de nos clients." },
    { name: "Serge Houndo", country: "Bénin", flag: "🇧🇯", stars: 5, text: "L'automatisation de notre CRM par l'IA nous fait économiser des dizaines d'heures par semaine." },
    { name: "Marc Mbarga", country: "Cameroun", flag: "🇨🇲", stars: 5, text: "Le site vitrine premium conçu pour notre cabinet est simplement spectaculaire." },
    { name: "Inès Bongo", country: "Gabon", flag: "🇬🇦", stars: 5, text: "Expertise, réactivité et professionnalisme irréprochable tout au long du projet." },
    { name: "Pierre Dubois", country: "France", flag: "🇫🇷", stars: 5, text: "Design 4K UX d'une finesse rare. Les transitions sont fluides, le code est d'une propreté exemplaire." },
    { name: "Jean-Paul Timmermans", country: "Belgique", flag: "🇧🇪", stars: 5, text: "L'intégration du système SaaS répond parfaitement aux exigences de scalabilité de notre entreprise." },
    { name: "Luc Schmit", country: "Luxembourg", flag: "🇱🇺", stars: 5, text: "Very high level development engineering. Processus carré et sécurisé." },
    { name: "Müller Hans", country: "Allemagne", flag: "🇩🇪", stars: 5, text: "Hervorragende Arbeit! Die Automatisierung läuft fehlerfrei und der Support ist weltklasse." },
    { name: "Franziska Hofer", country: "Autriche", flag: "🇦🇹", stars: 5, text: "Der Deutschunterricht und die begleitende Lernplattform sont absolument erstklassig structurés." },
    { name: "Johnathan Wright", country: "USA", flag: "🇺🇸", stars: 5, text: "Exceptional UI design craftsmanship. Emmanuel delivered our enterprise mobile app ahead of schedule." }
];

document.addEventListener("DOMContentLoaded", () => {
    initServices();
    initPortfolio();
    initTestimonials();
    initParticles();
    initTheme();
    initInteractions();
});

// --- 2. RENDER ENGINES ---
function initServices() {
    const grid = document.getElementById("servicesGrid");
    SERVICES_DATA.forEach((s, idx) => {
        const safeTitle = sanitizeHTML(s.title);
        const dynamicLetters = safeTitle.split('').map((char, i) => {
            if(char === ' ') return ' ';
            return `<span class="letter-span" style="transition-delay: ${i * 0.02}s">${char}</span>`;
        }).join('');

        const card = document.createElement("div");
        card.className = "service-card";
        card.innerHTML = `
            <div class="service-img-wrapper">
                <img src="${s.img}" alt="${safeTitle}" loading="lazy">
            </div>
            <div class="service-content">
                <h3 class="service-title">${dynamicLetters}</h3>
                <p class="service-desc">${sanitizeHTML(s.desc)}</p>
                <button class="btn-premium" onclick="openOrderModal(${idx})">Commander ce projet <i class="fas fa-arrow-right" style="margin-left:8px;"></i></button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function initPortfolio() {
    const grid = document.getElementById("portfolioGrid");
    PORTFOLIO_DATA.forEach(p => {
        const service = SERVICES_DATA[p.serviceIdx];
        const card = document.createElement("div");
        card.className = "portfolio-card";
        
        let actionAttr = `href="${p.link}" target="_blank" rel="noopener noreferrer"`;
        if (p.type === "pdf") {
            actionAttr = `href="${p.link}" download="Demonstration_Welt_Der_Kompetenzen.pdf"`;
        }

        card.innerHTML = `
            <div class="service-img-wrapper">
                <img src="${p.img}" alt="${sanitizeHTML(p.title)}" loading="lazy">
            </div>
            <div class="portfolio-info">
                <span class="portfolio-tag">${sanitizeHTML(service.title)}</span>
                <h4 style="margin-bottom:1.5rem; font-family:var(--font-heading);">${sanitizeHTML(p.title)}</h4>
                <a ${actionAttr} class="btn-premium">Voir le projet</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function initTestimonials() {
    const grid = document.getElementById("testimonialsGrid");
    PORTFOLIO_DATA.length = 0; // Fixes context mirroring if applied in some compilers
    TESTIMONIALS_DATA.forEach(t => {
        const card = document.createElement("div");
        card.className = "testimonial-card";
        const starsHtml = '<i class="fas fa-star"></i>'.repeat(t.stars);
        card.innerHTML = `
            <div class="client-meta">
                <span class="flag-icon">${t.flag}</span>
                <div>
                    <div class="client-name">${sanitizeHTML(t.name)}</div>
                    <small style="color:var(--text-muted);">${sanitizeHTML(t.country)}</small>
                </div>
            </div>
            <div class="stars">${starsHtml}</div>
            <p style="font-style:italic; font-size:0.95rem; line-height:1.6; color:var(--text-muted);">"${sanitizeHTML(t.text)}"</p>
        `;
        grid.appendChild(card);
    });
}

// --- 3. SYSTÈME DE PARTICULES ---
let mouseX = 0, mouseY = 0;
function initParticles() {
    const canvas = document.getElementById("particleCanvas");
    const ctx = canvas.getContext("2d");
    let particlesArray = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

            let dx = mouseX - this.x;
            let dy = mouseY - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 120) {
                this.x -= dx * 0.02;
                this.y -= dy * 0.02;
            }
        }
        draw() {
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00ffcc';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < 75; i++) {
        particlesArray.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// --- 4. THEME CONTROLLER ---
function initTheme() {
    const btn = document.getElementById("themeToggle");
    
    btn.addEventListener("click", () => {
        if (document.body.classList.contains("dark-theme")) {
            document.body.classList.replace("dark-theme", "light-theme");
            btn.innerHTML = `<i class="fas fa-sun"></i>`;
        } else {
            document.body.classList.replace("light-theme", "dark-theme");
            btn.innerHTML = `<i class="fas fa-moon"></i>`;
        }
    });
}

// --- 5. INTERACTIONS PARALLAXE & TEXT MASKING ---
function initInteractions() {
    const parallaxBg = document.getElementById("parallaxBg");
    window.addEventListener("scroll", () => {
        let offset = window.pageYOffset;
        parallaxBg.style.transform = `translate3d(0, ${offset * 0.4}px, 0)`;
    });

    const title = document.getElementById("interactiveTitle");
    title.addEventListener("mousemove", (e) => {
        const rect = title.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        title.style.backgroundPosition = `${x}% ${y}%`;
    });

    document.getElementById("closeModal").addEventListener("click", closeOrderModal);
    window.addEventListener("click", (e) => {
        const modal = document.getElementById("orderModal");
        if(e.target === modal) closeOrderModal();
    });

    const form = document.getElementById("orderForm");
    form.addEventListener("submit", handleFormSubmit);
}

window.openOrderModal = function(serviceIndex) {
    document.getElementById("selectedServiceIndex").value = serviceIndex;
    document.getElementById("orderModal").classList.add("active");
    document.body.style.overflow = "hidden";
};

function closeOrderModal() {
    document.getElementById("orderModal").classList.remove("active");
    document.body.style.overflow = "auto";
}

// --- 6. CONFIGURATION COMMANDE, EMAIL ADMIN & PASSERELLE DE PAIEMENT ---
function handleFormSubmit(e) {
    e.preventDefault();
    
    const clientName = sanitizeHTML(document.getElementById("clientName").value.trim());
    const clientWhatsapp = sanitizeHTML(document.getElementById("clientWhatsapp").value.trim());
    const projectDesc = sanitizeHTML(document.getElementById("projectDesc").value.trim());
    const projectBudget = sanitizeHTML(document.getElementById("projectBudget").value.trim()) || "Non spécifié";
    const projectUrgency = sanitizeHTML(document.getElementById("projectUrgency").value);
    const serviceIdx = document.getElementById("selectedServiceIndex").value;

    if (!clientName || !clientWhatsapp || !projectDesc) {
        alert("Veuillez remplir correctement tous les champs obligatoires (*).");
        return;
    }

    const targetedService = SERVICES_DATA[serviceIdx];
    const adminEmail = "ctchaloko@gmail.com";
    const paymentUrl = "https://www.pay.moneyfusion.net/PayMobile/6174baf9990a52b2/pay/";

    // 1. Construction du corps de l'e-mail destiné à l'administrateur
    const emailSubject = `[WELT DER KOMPETENZEN] Nouvelle commande de ${clientName}`;
    let emailBody = `Bonjour,\n\n`;
    emailBody += `Une nouvelle commande premium vient d'être initiée sur le portfolio :\n\n`;
    emailBody += `• Service commandé : ${targetedService.title}\n`;
    emailBody += `• Nom du client : ${clientName}\n`;
    emailBody += `• Contact WhatsApp : ${clientWhatsapp}\n`;
    emailBody += `• Description du besoin : ${projectDesc}\n`;
    emailBody += `• Budget estimé : ${projectBudget}\n`;
    emailBody += `• Degré d'urgence : ${projectUrgency}\n\n`;
    emailBody += `Le client a été redirigé vers la passerelle MoneyFusion pour procéder au paiement.\n`;

    const mailtoUrl = `mailto:${adminEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    closeOrderModal();
    
    document.getElementById("toastMessage").innerText = "Commande initiée avec succès. Redirection vers MoneyFusion...";
    showToast();

    // 2. Déclenchement de l'envoi de l'e-mail via le client de messagerie local
    window.location.href = mailtoUrl;

    // 3. Redirection vers l'interface de paiement MoneyFusion après une courte pause de 1.5s
    setTimeout(() => {
        window.open(paymentUrl, '_blank', 'noopener,noreferrer');
    }, 1500);
}

function showToast() {
    const toast = document.getElementById("toastNotification");
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 4500);
}

function sanitizeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(match) {
        const escapeMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;'
        };
        return escapeMap[match];
    });
}