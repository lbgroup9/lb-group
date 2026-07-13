// 1. Gestion du bouton "Découvrir"
document.querySelector('.btn-primary').addEventListener('click', function(e) {
    e.preventDefault(); // Empêche le saut direct
    document.getElementById('lb3d').scrollIntoView({
        behavior: 'smooth'
    });
});

// 2. Gestion de TOUS les liens du menu (Accueil, LB 3D, LB Video, etc.)
document.querySelectorAll('nav a').forEach(lien => {
    lien.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le téléportement
        
        // On récupère l'identifiant de la section (ex: #lb3d)
        const cibleId = this.getAttribute('href'); 
        const cibleSection = document.querySelector(cibleId);
        
        // Si la section existe, on y glisse en douceur
        if (cibleSection) {
            cibleSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- LOGIQUE DU SLIDER AVANT/APRÈS ---
const plansSlider = document.querySelector('.slider');
const plansBeforeWrapper = document.querySelector('.image-before-wrapper');
const plansSliderLine = document.querySelector('.slider-line');
const plansSliderButton = document.querySelector('.slider-button');

if (plansSlider && plansBeforeWrapper && plansSliderLine && plansSliderButton) {
    plansSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        plansBeforeWrapper.style.width = `${value}%`;
        plansSliderLine.style.left = `${value}%`;
        plansSliderButton.style.left = `${value}%`;
    });
}

// --- LOGIQUE DU DIAPORAMA (3 IMAGES) ---
const slides = document.querySelectorAll('.slide-img');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
let currentSlide = 0;

function showSlide(index) {
    // Enleve la classe active de l'ancienne image
    slides[currentSlide].classList.remove('active');
    
    // Calcule le nouvel index (boucle si on dépasse 0 ou 2)
    currentSlide = (index + slides.length) % slides.length;
    
    // Ajoute la classe active sur la nouvelle image
    slides[currentSlide].classList.add('active');
}

if (prevBtn && nextBtn && slides.length > 0) {
    // Clic flèche droite
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Clic flèche gauche
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
}