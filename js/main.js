const menuButton = document.querySelector(".menu");
const mobileNavbar = document.querySelector(".nav__mobile");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    mobileNavbar.classList.toggle("open")
}