function addProductToCart(productId, productName, productPrice){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];   //get existing cart data from local storage
    const product = cart.find(item => item.id === productId);  //check if the product is already in the cart

    if (product){
        product.quantity += 1; //increase quantity of existing product

    }else{
        //add new product to cart (pushing it into an array)
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: 1,
        });
    }
    localStorage.setItem('cart',JSON.stringify(cart)); //update cart data in local storage
    updateCartIconDisplay();
    window.location.href='cart.html'; //redirect user to cart page after adding a product
}
//update cart icon display after adding a product
    function updateCartIconDisplay(){
        const cart = JSON.parse(localStorage.getItem('cart')) || []; //get cart dat from local storage
        const totalQuantity = cart.reduce((acc,product)=> acc + product.quantity, 0);//calculate total quantity of items in cart
        const cartIcon = document.getElementById('cart-icon');
        cartIcon.textContent= `cart(${totalQuantity})`;//display total quantity on cart icon
    }
        
