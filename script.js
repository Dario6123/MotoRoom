console.log("MotoRoom site încărcat 🚀");
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

let btn = document.getElementById("backToTop");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

let total = 0;

function addToCart(nume, pret) {
    let lista = document.getElementById("cartItems");

    let item = document.createElement("li");
    item.textContent = nume + " - " + pret + "€";
    lista.appendChild(item);

    total += pret;
    document.getElementById("total").textContent = total;
}