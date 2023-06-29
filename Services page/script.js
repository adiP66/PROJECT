const togglebtn = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


togglebtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

