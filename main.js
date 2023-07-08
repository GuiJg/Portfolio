// typing
setTimeout(() => {
    document.querySelector("h1").style.opacity = 1
    document.querySelectorAll(".typing-text")[0].style.borderRightColor = "transparent"
    document.querySelector("h1").style.animation = "typing 2s steps(34), cursor .4s step-end infinite alternate"
  }, 2000)

setTimeout(() => {
    document.querySelector(".typing-front").style.opacity = 1
    document.querySelectorAll(".typing-text")[1].style.borderRightColor = "transparent"
    document.querySelector(".typing-front").style.animation = "typing 2s steps(34), cursor .4s step-end infinite alternate"
  }, 4200) 

//navbar mobile
const menuButton = document.querySelector('.menu-button');
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

const menu = document.getElementById("portfolio"); // colocar em cache
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