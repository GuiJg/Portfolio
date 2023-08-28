//navbar mobile
const menuButton = document.querySelector('.toggle');
const headerMenu = document.querySelector('.header-menu');
  
  menuButton.addEventListener('click', function() {
      headerMenu.classList.toggle('active');
  });

  window.addEventListener('scroll', function(){

    const button = document.querySelector('.btn-content');
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition > 100) {
      button.style.opacity = '1';
    } else {
      button.style.opacity = '0';
    }
  });

//navbar transparent
const menu = document.getElementById("portfolio"); 
window.addEventListener("scroll", function () {
    
  if (window.scrollY > 0) {
    menu.classList.add("header-scroll");
    for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {
        
    }
  } else {
    menu.classList.remove("header-scroll");
    for (let i = 0; i < document.querySelectorAll(".header-link").length; i++) {
        
    }
  }
});