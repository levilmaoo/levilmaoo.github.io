// Function to open the Firmware modal
function openFirmwareModal() {
    document.getElementById('firmwareModal').style.display = 'block';
}

// Function to close the Firmware modal
function closeFirmwareModal() {
    document.getElementById('firmwareModal').style.display = 'none';
}

// Function to add selected Firmware option to cart
function addFirmwareToCart() {
    // Retrieve selected option
    const selectedOption = document.querySelector('input[name="firmware-option"]:checked').value;

    // Retrieve cart from local storage or initialize as empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add selected option to cart
    cart.push({ name: 'FIRMWARE', price: parseInt(selectedOption, 10) });

    // Save cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Close the modal and redirect to cart page
    closeFirmwareModal();
    window.location.href = 'cart.html';
}

// Function to handle "Add to Cart" button click for other items
function addToCart(itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html';
}

// Function to handle "Return" button click
function returnToShop() {
    window.location.href = 'index.html';
}
