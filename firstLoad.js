(function() {
  let visited = localStorage.getItem('visited');
  if (!visited) {
      document.getElementById("loader").style.display = "block";
      localStorage.setItem('visited', true);
      console.log("first");
  }
  else {
    console.log("already visited");
  }
}) ();