const hamburgerBar = document.getElementById("hamburgerMenu");
const navv = document.getElementById("hamburger-nav-list");

hamburgerBar.addEventListener("click", () => {
    navv.classList.toggle("active");
    hamburgerBar.classList.toggle("active");
})