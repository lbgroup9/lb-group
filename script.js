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