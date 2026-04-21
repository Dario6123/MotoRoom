console.log("MotoRoom site încărcat 🚀");

// 🔥 VARIABILE GLOBALE (IMPORTANT)
let total = 0;
let count = 0;

document.addEventListener("DOMContentLoaded", function () {

    // 🌙 DARK MODE
    window.toggleTheme = function () {
        document.body.classList.toggle("light-mode");
    };

    // ⬆ BUTON UP
    let btn = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });

    window.scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // 🛒 ADAUGĂ ÎN COȘ
    window.addToCart = function (nume, pret) {
        let lista = document.getElementById("cartItems");

        let item = document.createElement("li");

        item.innerHTML = `
            ${nume} - ${pret}€
            <button class="remove-btn">❌</button>
        `;

        lista.appendChild(item);

        total += pret;
        count++;

        document.getElementById("total").textContent = total;
        document.getElementById("cartCount").textContent = count;

        // ❌ ȘTERGERE PRODUS
        item.querySelector(".remove-btn").addEventListener("click", function () {
            lista.removeChild(item);

            total -= pret;
            count--;

            document.getElementById("total").textContent = total;
            document.getElementById("cartCount").textContent = count;
        });
    };

    // 🧺 DESCHIDE / ÎNCHIDE COȘ
    window.toggleCart = function () {
        let cart = document.getElementById("cartBox");

        if (cart.style.display === "block") {
            cart.style.display = "none";
        } else {
            cart.style.display = "block";
        }
    };

});

// 🧾 FINALIZARE COMANDĂ (FAKE ORDER)
window.placeOrder = function () {

    if (count === 0) {
        alert("Coșul este gol!");
        return;
    }

    alert("✅ Comanda ta a fost trimisă cu succes!");

    // golește coșul
    document.getElementById("cartItems").innerHTML = "";

    total = 0;
    count = 0;

    document.getElementById("total").textContent = total;
    document.getElementById("cartCount").textContent = count;

    console.log("Comandă finalizată ✔️");
};