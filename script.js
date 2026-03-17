// Changement d'apparence de la navbar au défilement
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    // Si l'utilisateur défile vers le bas de plus de 50px, on change le style
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Simulation d'ajout au panier
const productCards = document.querySelectorAll('.product-card');
const cartIcon = document.getElementById('cart-icon');
let cartCount = 0; // Compteur de panier initialisé à 0

productCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Empêcher l'ajout si le produit est épuisé
        const badge = card.querySelector('.badge');
        if (badge && badge.classList.contains('sold-out')) {
            alert('Ce produit est en rupture de stock.');
            return;
        }

        // Incrémenter le compteur du panier
        cartCount++;
        cartIcon.textContent = `PANIER (${cartCount})`;
        
        // Petit effet visuel pour le panier
        cartIcon.style.color = '#e67e22'; // Orange chaleureux
        setTimeout(() => {
            cartIcon.style.color = '#4a4a4a'; // Couleur d'origine
        }, 200); // Rétablir la couleur après 200ms
    });
});
