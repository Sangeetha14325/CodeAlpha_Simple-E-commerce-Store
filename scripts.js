
document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const cart = document.getElementById('cart');

    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>$${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productList.appendChild(productDiv);
            });
        });

    window.addToCart = (productId) => {
        fetch(`/api/add-to-cart/${productId}`, { method: 'POST' })
            .then(response => response.json())
            .then(cartItems => {
                cart.innerHTML = '';
                cartItems.forEach(item => {
                    const cartItemDiv = document.createElement('div');
                    cartItemDiv.className = 'cart-item';
                    cartItemDiv.innerHTML = `
                        <h4>${item.product__name}</h4>
                        <p>Quantity: ${item.quantity}</p>
                        <p>$${item.product__price * item.quantity}</p>
                    `;
                    cart.appendChild(cartItemDiv);
                });
            });
    };
});
        