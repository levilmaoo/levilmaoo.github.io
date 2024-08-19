function addToCart(itemName, itemPrice) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.href = 'cart.html';
}

function calculateTotal() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalCents = 0;
    cartItems.forEach(item => totalCents += item.price);
    return totalCents;
}

function loadCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartContainer.innerHTML = '';

    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.setAttribute('data-name', item.name);
        itemDiv.setAttribute('data-price', item.price);

        itemDiv.innerHTML = `
            <div class="item-info">
                <span class="item-name">${item.name}</span>
                <span class="item-price">$${(item.price / 100).toFixed(2)}</span>
            </div>
            <button class="remove-button" onclick="removeItem(this)">Remove</button>
        `;

        cartContainer.appendChild(itemDiv);
    });

    document.getElementById('cart-total').textContent = (calculateTotal() / 100).toFixed(2);
}

function removeItem(button) {
    const itemName = button.parentElement.getAttribute('data-name');
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.name !== itemName);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    button.parentElement.remove();
    document.getElementById('cart-total').textContent = (calculateTotal() / 100).toFixed(2);
}

function proceedToCheckout() {
    window.location.href = 'checkout.html';
}

window.onload = loadCart;
