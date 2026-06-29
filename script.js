const products = [
    { id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Headphones", price: 1500 },
    { id: 3, name: "Mouse", price: 500 },
    { id: 4, name: "Keyboard", price: 1200 }
];

let cart = 0;

function showProducts() {
    const container = document.getElementById('products');
    products.forEach(p => {
        container.innerHTML += `
            <div class="product">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <button onclick="addToCart()">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart() {
    cart++;
    document.getElementById('cart-count').textContent = cart;
}

showProducts();
