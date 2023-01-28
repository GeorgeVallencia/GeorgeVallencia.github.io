const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 0);  
});

let menu = document.querySelector('#menu-icon');
let listElements = document.querySelector('.list-el');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    listElements.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    listElements.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'});
sr.reveal('.home-img',{delay:350, origin:'right'});

sr.reveal('.sub-service, .about, .portfolio, .service, .cta, .contact',{delay:200, origin:'bottom'});


const homePage = document.querySelector('.home');
const aboutPage = document.querySelector('.about');
const portfolioPage = document.querySelector('.portfolio');
const servicesPage = document.querySelector('.service');
const contactPage = document.querySelector('.contact');

