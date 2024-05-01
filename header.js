function changeNavbarColor() {
    var header = document.getElementById("navbar");
    if (window.pageYOffset > 768 || window.innerWidth < 768) { 
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  }
  
  window.addEventListener("scroll", changeNavbarColor);
  window.addEventListener("resize", changeNavbarColor);