// Changement d'apparence de la navbar au scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Simulation d'ajout au panier
const productCards = document.querySelectorAll('.product-card');
const cartIcon = document.getElementById('cart-icon');
let cartCount = 0;

productCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Empêcher l'ajout si c'est "Sold Out"
        const badge = card.querySelector('.badge');
        if (badge && badge.classList.contains('sold-out')) {
            alert('Ce produit est en rupture de stock.');
            return;
        }

        cartCount++;
        cartIcon.textContent = `PANIER (${cartCount})`;
        
        // Petit effet visuel
        cartIcon.style.color = '#e67e22'; // Orange chaleureux
        setTimeout(() => {
            cartIcon.style.color = '#4a4a4a'; // Couleur d'origine
        }, 200);
    });
});

// Animation d'entrée au défilement
const observerOptions = {
    threshold: 0.1 // 10% de l'élément doit être visible pour déclencher l'animation
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // Ajoute la classe 'in-view'
            observer.unobserve(entry.target); // Cesse d'observer après l'animation
        }
    });
}, observerOptions);

// Cible les sections et les cartes de produits pour l'animation
const elementsToAnimate = document.querySelectorAll('.collections-section h2, .collection-card, .products-section h2, .product-card, .about-content h2, .testimonial-card');

elementsToAnimate.forEach(element => {
    element.classList.add('fade-in'); // Ajoute la classe de base pour l'animation
    observer.observe(element); // Commence à observer
});
