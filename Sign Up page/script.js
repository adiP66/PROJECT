const togglebtn = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
let signupbtn = document.getElementById('signupbtn');
let signinbtn = document.getElementById('signinbtn');
let namefield = document.getElementById('namefield');
let title = document.getElementById('title');


togglebtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

signinbtn.addEventListener('click', () => {
    namefield.style.maxHeight = '0';
    title.innerHTML = "Sign In";
    signupbtn.classList.add("disable")
    signinbtn.classList.remove("disable")
})

signupbtn.addEventListener('click', () => {
    namefield.style.maxHeight = '60px';
    title.innerHTML = "Sign Up";
    signupbtn.classList.remove("disable")
    signinbtn.classList.add("disable")
})

