window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    console.log("scrolled");
    document.getElementById("nav-logo-shrink").classList.remove("col-6")
    document.getElementById("nav-logo-shrink").classList.add("col-4")
    document.getElementById("navigator").classList.add("palette-white-bg")
    document.getElementById("navigator").classList.remove("my-5")
    document.getElementById("navigator").classList.add("py-2")
    document.getElementById("opened-nav").classList.add("mobile-nav-scrolled")
  }
  else {
    console.log("back to top");
    document.getElementById("nav-logo-shrink").classList.add("col-6")
    document.getElementById("nav-logo-shrink").classList.remove("col-4")
    document.getElementById("navigator").classList.remove("palette-white-bg")
    document.getElementById("navigator").classList.add("my-5")
    document.getElementById("navigator").classList.remove("py-2")
    document.getElementById("opened-nav").classList.remove("mobile-nav-scrolled")
  }
};