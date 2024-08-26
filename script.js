const bg = document.querySelector('#bg')

window.addEventListener('scroll', () => {
  bg.style.opacity = 1 - window.pageYOffset / 900
  bg.style.backgroundSize = 160 - window.pageYOffset / 12 + '%'
})