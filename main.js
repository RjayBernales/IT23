function myNav(){
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.left == "0%"){
            nav.style.left = "-100%";
            bar.src = "pic/menu.png"
        }else{
            nav.style.left = "0%";
            bar.src = "pic/x.png"
        }
    }
}
myNav();

window.onload = ()=>{
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px"
}

let cart = []; // Array to hold cart items

// Function to update the cart and display it in the modal
function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let cartTotal = document.getElementById('cart-total');
    
    // Clear the current cart display
    cartItems.innerHTML = '';

    let total = 0;

    // Loop through cart items and display them
    cart.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₱${item.price}`;
        cartItems.appendChild(listItem);
        total += parseFloat(item.price); // Update total price
    });

    // Update the total price
    cartTotal.textContent = total.toFixed(2);
}

// Function to add product to the cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
    document.getElementById('cart-modal').style.display = 'flex'; // Show cart modal when a product is added
}

// Event listener for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(event) {
        let productName = event.target.getAttribute('data-product');
        let productPrice = event.target.getAttribute('data-price');
        addToCart(productName, productPrice);
    });
});

// Event listener for Checkout button
document.getElementById('checkout-btn').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Proceeding to checkout...');
        // You can add checkout functionality here
        // For example, submitting the cart to a backend, or just clearing the cart
        cart = []; // Empty the cart
        updateCart();
        document.getElementById('cart-modal').style.display = 'none'; // Hide the modal
    }
});

// Event listener for Close Cart button
document.getElementById('close-cart-btn').addEventListener('click', function() {
    document.getElementById('cart-modal').style.display = 'none'; // Close the cart modal
});
