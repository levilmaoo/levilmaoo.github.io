function calculateTotal() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalCents = 0;
    cartItems.forEach(item => totalCents += item.price);
    return totalCents;
}

function loadCheckout() {
    const totalAmount = calculateTotal();
    document.getElementById('checkout-total').textContent = (totalAmount / 100).toFixed(2);
}

document.getElementById('pay-button').addEventListener('click', function () {
    const totalAmount = calculateTotal();
    window.location.href = `https://cash.app/$levi20009`;
});

window.onload = loadCheckout;
