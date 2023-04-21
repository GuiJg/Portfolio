// typing
setTimeout(() => {
    document.querySelector("h1").style.opacity = 1
    document.querySelectorAll(".typing-text")[0].style.borderRightColor = "transparent"
    document.querySelector("h1").style.animation = "typing 2s steps(34), cursor .4s step-end infinite alternate"
  }, 2000)