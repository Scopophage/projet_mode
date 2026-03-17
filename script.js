let count = 0;
const cartBtn = document.getElementById('cart-icon');

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const isSoldOut = card.querySelector('.badge.sold');
        if (isSoldOut) {
            alert("Désolé, ce produit est épuisé !");
        } else {
            count++;
            cartBtn.innerText = `CART (${count})`;
            cartBtn.style.background = '#FFC300';
            setTimeout(() => { cartBtn.style.background = '#1A1A1A'; }, 300);
        }
    });
});
