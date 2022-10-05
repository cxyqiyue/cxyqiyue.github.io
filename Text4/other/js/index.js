const hamburgerEl = document.querySelector('.hamburger')
const navMenuEl = document.querySelector('.nav-menu')

hamburgerEl.addEventListener('click', () => {
  hamburgerEl.classList.toggle('active')
  navMenuEl.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', () => {
    hamburgerEl.classList.toggle('active')
    navMenuEl.classList.toggle('active')
  })
})