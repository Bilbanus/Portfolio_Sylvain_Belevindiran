const sections = {
    creation: {
        projects: [
            {
                id: 1,
                title: 'Identité Visuelle',
                description: 'Création de logo et charte graphique pour une startup tech',
                image: '../img/figma.png'
            },
            {
                id: 2,
                title: 'Design UI/UX',
                description: 'Interface moderne pour application mobile',
                image: 'img/icons/ui-ux.png'
            },
            {
                id: 3,
                title: 'Illustration',
                description: 'Série d\'illustrations pour campagne marketing',
                image: 'img/icons/illustration.png'
            },
            {
                id: 4,
                title: 'Motion Design',
                description: 'Animation 2D pour vidéo promotionnelle',
                image: 'img/icons/motion-design.png'
            },
            {
                id: 5,
                title: 'Branding',
                description: 'Refonte complète de l\'image de marque',
                image: 'img/icons/branding.png'
            }
        ]
    },

    developpement: {
        projects: [
            {
                id: 6,
                title: 'Site E-commerce',
                description: 'Boutique en ligne avec système de paiement',
                image: 'img/icons/ecommerce.png'
            },
            {
                id: 7,
                title: 'Application Web',
                description: 'Dashboard analytique pour entreprise',
                image: 'img/icons/application-web.png'
            },
            {
                id: 8,
                title: 'Site Vitrine',
                description: 'Site corporate responsive et moderne',
                image: 'img/icons/site-vitrine.png'
            },
            {
                id: 9,
                title: 'API REST',
                description: 'Backend robuste et scalable',
                image: 'img/icons/api.png'
            },
            {
                id: 10,
                title: 'PWA',
                description: 'Application web progressive',
                image: 'img/icons/pwa.png'
            }
        ]
    },

    communication: {
        projects: [
            {
                id: 11,
                title: 'Campagne Social Media',
                description: 'Stratégie complète sur les réseaux sociaux',
                image: 'img/icons/social-media.png'
            },
            {
                id: 12,
                title: 'Content Marketing',
                description: 'Création de contenu engageant',
                image: 'img/icons/content-marketing.png'
            },
            {
                id: 13,
                title: 'SEO / SEA',
                description: 'Optimisation et référencement payant',
                image: 'img/icons/seo.png'
            },
            {
                id: 14,
                title: 'Newsletter',
                description: 'Campagne emailing personnalisée',
                image: 'img/icons/newsletter.png'
            },
            {
                id: 15,
                title: 'Stratégie Digitale',
                description: 'Plan marketing digital 360°',
                image: 'img/icons/strategie-digitale.png'
            }
        ]
    }
};


let currentIndexes = {
    creation: 0,
    developpement: 0,
    communication: 0
};

function renderCarousel(section) {
    const container = document.getElementById(`carousel-${section}`);
    const projects = sections[section].projects;
    const currentIndex = currentIndexes[section];
    
    container.innerHTML = '';

    for (let i = -2; i <= 2; i++) {
        const index = (currentIndex + i + projects.length) % projects.length;
        const project = projects[index];
        
        const translateX = i * 220;
        const scale = i === 0 ? 1 : 0.75 - Math.abs(i) * 0.1;
        const opacity = Math.abs(i) > 2 ? 0 : 1 - Math.abs(i) * 0.2;
        const zIndex = 10 - Math.abs(i);

        const vitrail = document.createElement('div');
        vitrail.className = 'vitrail';
        vitrail.style.transform = `translateX(${translateX}px) scale(${scale})`;
        vitrail.style.opacity = opacity;
        vitrail.style.zIndex = zIndex;

        vitrail.innerHTML = `
            <div class="vitrail-inner vitrail-bg-${section} ${i === 0 ? 'active' : ''}">
                <svg class="vitrail-pattern" viewBox="0 0 150 250">
                    <polygon points="75,10 120,50 110,120 40,120 30,50" fill="rgba(255,255,255,0.3)" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
                    <polygon points="75,120 120,120 135,190 75,230" fill="rgba(255,255,255,0.2)" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
                    <polygon points="75,120 30,120 15,190 75,230" fill="rgba(255,255,255,0.15)" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
                    <polygon points="30,50 75,10 75,120 40,120" fill="rgba(0,0,0,0.15)" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
                    <polygon points="75,10 120,50 75,120" fill="rgba(255,255,255,0.25)" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
                    <line x1="75" y1="10" x2="75" y2="230" stroke="rgba(0,0,0,0.3)" stroke-width="2" />
                    <line x1="30" y1="50" x2="120" y2="50" stroke="rgba(0,0,0,0.3)" stroke-width="2" />
                </svg>
<div class="vitrail-icon">
    <img src="${project.image}" alt="${project.title}">
</div>
            </div>
        `;

        if (i === 0) {
            vitrail.onclick = () => openModal(project);
        }

        container.appendChild(vitrail);
    }
}

function nextSlide(section) {
    const projects = sections[section].projects;
    currentIndexes[section] = (currentIndexes[section] + 1) % projects.length;
    renderCarousel(section);
}

function prevSlide(section) {
    const projects = sections[section].projects;
    currentIndexes[section] = (currentIndexes[section] - 1 + projects.length) % projects.length;
    renderCarousel(section);
}

function openModal(project) {
document.getElementById('modal-icon').innerHTML = `
    <img src="${project.image}" alt="${project.title}">
`;

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

// Initial render - Garde les carrousels statiques au chargement
renderCarousel('creation');
renderCarousel('developpement');
renderCarousel('communication');

// Close modal on background click
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});