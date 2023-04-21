function toggleHamburger() {
    var x = document.getElementsById("menu");
    if (x.style.display == "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }
  }