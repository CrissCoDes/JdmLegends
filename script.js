const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('activate')
    navMenu.classList.toggle('activate')
})

document.querySelectorAll('.nav-links').forEach(n => 
    n.addEventListener('click', ()=> {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }))
