//mudança de navbar responsivo para mobile
const menuButton = document.querySelector('.toggle');
const headerMenu = document.querySelector('.header-menu');
  
menuButton.addEventListener('click', function() {
    headerMenu.classList.toggle('active');
});

//Mudança de transparência do botão (back-to-the-top)
window.addEventListener('scroll', function(){

  const button = document.querySelector('.btn-content');
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollPosition > 100) {
    button.style.opacity = '1';
  } else {
    button.style.opacity = '0';
  }
});

//Mudança de transparência do header
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

//Mudança de transparência dos botões das redes sociais
window.addEventListener('scroll', function(){

  const button = document.querySelector('.social-fixed');
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollPosition > 100) {
    button.style.opacity = '1';
  } else {
    button.style.opacity = '0';
  }
});