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

        let cart = [];

        // Add to cart functionality
        $(document).on("click", ".add-to-cart", function(e) {
            e.preventDefault();

            let productName = $(this).data("product");
            let productPrice = parseFloat($(this).data("price"));
            let cartItem = { name: productName, price: productPrice };

            // Add the item to the cart
            cart.push(cartItem);

            // Update the cart modal
            updateCart();
        });

        // Update cart display
        function updateCart() {
            let cartItemsList = $("#cart-items");
            cartItemsList.empty();
            let total = 0;

            cart.forEach(item => {
                cartItemsList.append(`<li>${item.name} - ₱${item.price.toFixed(2)}</li>`);
                total += item.price;
            });

            $("#cart-total").text(total.toFixed(2));
        }

        // Show the cart modal
        $("#checkout-btn").on("click", function() {
            alert("Proceeding to checkout...");
        });

        // Close the cart modal
        $("#close-cart-btn").on("click", function() {
            $("#cart-modal").hide();
        });