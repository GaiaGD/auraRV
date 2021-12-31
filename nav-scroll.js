window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    console.log("scrolled");
    document.getElementById("nav-logo-shrink").classList.remove("px-5")
    document.getElementById("nav-logo-shrink").classList.add("col-6")
    document.getElementById("nav-logo-shrink-mobile").classList.remove("col-8")
    document.getElementById("nav-logo-shrink-mobile").classList.add("col-6")
    document.getElementById("navigator").classList.remove("my-5")
    document.getElementById("navigator").classList.add("py-5")
    // document.getElementById("opened-nav").classList.add("mobile-nav-scrolled")
  }
  else {
    console.log("back to top");
    document.getElementById("nav-logo-shrink").classList.add("px-5")
    document.getElementById("nav-logo-shrink").classList.remove("col-6")
    document.getElementById("nav-logo-shrink-mobile").classList.remove("col-6")
    document.getElementById("nav-logo-shrink-mobile").classList.add("col-8")
    document.getElementById("navigator").classList.add("my-5")
    document.getElementById("navigator").classList.remove("py-5")
    // document.getElementById("opened-nav").classList.remove("mobile-nav-scrolled")
  }
};
