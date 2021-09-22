/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL ACCUEIL*/
sr.reveal('.accueil__title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.accueil__img',{delay: 400});
sr.reveal('.accueil__social-icon',{ interval: 200});

/*SCROLL A PROPOS DE MOI*/
sr.reveal('.a_propos_de_moi__img',{});
sr.reveal('.a_propos_de_moi__subtitle',{delay: 400});
sr.reveal('.a_propos_de_moi__text',{delay: 400});

/*SCROLL COMPETENCE*/
sr.reveal('.competence__subtitle',{});
sr.reveal('.competence__text',{});
sr.reveal('.competence__data',{interval: 200});
sr.reveal('.competence__img',{delay: 600});

/*SCROLL TRAVAUX*/
sr.reveal('.travaux__img',{interval: 200});

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200});
