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