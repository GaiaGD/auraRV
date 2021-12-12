window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    console.log("scrolled");
    document.getElementById("navigator").classList.remove("col-12")
    document.getElementById("navigator").classList.add("col-md-10")
    document.getElementById("navigator").classList.add("offset-md-1")
    document.getElementById("navigator").classList.add("palette-white-bg")
    document.getElementById("navigator").classList.remove("my-5")
    document.getElementById("navigator").classList.add("py-2")
  }
  else {
    console.log("back to top");
    document.getElementById("navigator").classList.add("col-12")
    document.getElementById("navigator").classList.remove("col-md-10")
    document.getElementById("navigator").classList.remove("offset-md-1")
    document.getElementById("navigator").classList.remove("palette-white-bg")
    document.getElementById("navigator").classList.add("my-5")
    document.getElementById("navigator").classList.remove("py-2")
  }
};
