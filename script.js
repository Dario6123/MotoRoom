console.log("MotoRoom OK 🚀");

let cart = [];

const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");
const countEl = document.getElementById("cartCount");

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ${item.price}€
            <button onclick="removeItem(${index})">❌</button>
        `;
        cartItems.appendChild(li);
    });

    totalEl.textContent = total;
    countEl.textContent = cart.length;
}

window.addToCart = function (name, price) {
    cart.push({ name, price });
    updateCart();
};

window.removeItem = function (index) {
    cart.splice(index, 1);
    updateCart();
};

window.toggleCart = function () {
    document.getElementById("cartBox").classList.toggle("show");
};

window.toggleTheme = function () {
    document.body.classList.toggle("light-mode");
};

window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

window.placeOrder = function () {
    if (cart.length === 0) {
        alert("Coșul este gol!");
        return;
    }

    alert("✅ Comanda a fost trimisă!");

    console.log("COMANDĂ:", cart);

    cart = [];
    updateCart();
};

let btn = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});