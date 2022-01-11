
const showMobileNav = document.getElementById("showMobileNav");
const mobileNav = document.getElementById("mobileNav");

showMobileNav.addEventListener("click", function() {
    console.log("hello");
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
        showMobileNav.classList.remove("open");
      } else {
        mobileNav.style.display = "block";
        showMobileNav.classList.add("open");
      }
    }
);
