/*===== SCROLL HEADER =====*/
function scrollHeader(){
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*===== MENU SHOW & HIDE =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        });
    }
}
showMenu('nav-toggle','nav-menu');

/*===== REMOVE MENU ON LINK CLICK =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(sectionsClass) { // Check if the element exists
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }                                                 
    });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION (OPTIMIZED) =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false // Animations only happen once
});

/* -- HOME -- */
sr.reveal('.home__title', {});
sr.reveal('.button', {delay: 200});
sr.reveal('.home__social-icon', {interval: 200});
sr.reveal('.home__img', {origin:'bottom', delay: 400});

/* -- ABOUT -- */
sr.reveal('.about__img', {origin: 'left'});
sr.reveal('.about__subtitle', {origin: 'right', delay: 200});
sr.reveal('.about__text', {origin: 'right', delay: 400});

/* -- SKILLS -- */
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {delay: 200});
sr.reveal('.skills__data', {interval: 100});
sr.reveal('.skills__img', {origin: 'right', delay: 400});

/* -- WORK -- */
sr.reveal('.work__item', {interval: 200});

/* -- CONTACT -- */
sr.reveal('.contact__info', {origin: 'left'});
sr.reveal('.contact__form', {origin: 'right', delay: 200});