
// let widerScreenWidth = window.matchMedia("(min-width: 768px)");

// if (widerScreenWidth.matches) {
//     console.log("screen size desktop");
//     document.getElementById("navigator").classList.add("my-5");
// } else {
//     console.log("screen size mobile");
// }


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
