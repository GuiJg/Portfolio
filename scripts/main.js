const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0])
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);

//scroll header background branco 
const menu = document.getElementById("header-portfolio");
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

//
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header-portfolio");

    // Função para aplicar as alterações no estilo
    function applyStyles(isScrolled) {
        // Altera a cor dos links
        document.querySelectorAll(".header-link").forEach(function (link) {
            link.style.color = isScrolled ? "black" : "white";
        });
        
        document.querySelectorAll("svg path").forEach(function (path) {
            path.style.fill = isScrolled ? "black" : "white";
        });

        // Altera a imagem do logo
        document.querySelector(".header-logo img").src = isScrolled ? "assets/ICON GUILHERME PESSOA PT.png" : "assets/ICON GUILHERME PESSOA BR.png";
    }

    // Aplica os estilos no carregamento inicial da página
    applyStyles(false);

    // Adiciona um ouvinte de evento de rolagem (scroll)
    window.addEventListener("scroll", function () {
        // Obtém a posição atual de rolagem
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Define a posição de rolagem em que as alterações devem ocorrer
        const scrollThreshold = 1; // Ajuste conforme necessário

        // Verifica se a posição de rolagem ultrapassou o limite
        if (scrollPosition > scrollThreshold) {
            // Aplica as alterações quando o scroll desce além do limite
            applyStyles(true);
        } else {
            // Reverte as alterações quando o scroll volta acima do limite
            applyStyles(false);
        }
    });
});
