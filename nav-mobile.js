
const navBurger = document.getElementById("nav-burger");
const mobileNav = document.getElementById("mobileNav");

navBurger.addEventListener("click", function() {
    console.log("hello");
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
        navBurger.classList.remove("open");
      } else {
        mobileNav.style.display = "block";
        navBurger.classList.add("open");
      }
    }
);
