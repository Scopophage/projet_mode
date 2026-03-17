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
        cartIcon.textContent = `CART (${cartCount})`;
        
        // Petit effet visuel
        cartIcon.style.color = '#888';
        setTimeout(() => {
            cartIcon.style.color = '#fff';
        }, 200);
    });
});
