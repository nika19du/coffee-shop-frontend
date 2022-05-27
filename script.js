const menu = document.querySelector('#mobile-menu');

const menuLinks=document.querySelector('.nav-menu');

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Initialize Swiper
const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
// Optional parameters 
loop: true,

// If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable:true
},

// Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
}, 
});  
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault(); 
    e.target.elements.email.value = ''; 
  });

gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero',{
    duration:0.6,
    opacity:0,
    y:-150,
    stagger:0.6
});
gsap.from('.animate-box',{
    scrollTrigger:'.animate-box',
    duration:0.5,
    opacity:2, 
    x:-150,
    stagger:0.12
});
gsap.from('.animate-card',{
    scrollTrigger:'.animate-card',
    duration:0.8,
    opacity:2, 
    y:50
    // duration:1,
    // opacity:0,
    // y: 50,
    // stagger:0.1,
    // delay:0.2
});
gsap.from('.animate-top-box',{
    scrollTrigger:'.animate-top-box',
    duration:0.8,
    opacity:2, 
    y:50
});
