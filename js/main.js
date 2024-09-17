/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    opacity: 1,
    scale: 1.1,
    duration: 2500,
    delay: 300,
    //reset: true, // Animations repeat
})

sr.reveal(`.home__container, .sedes, .about__img, .about__data, .favorite__data2, .galley_section`)
sr.reveal(`.home__container2, .footer__img-1, footer__img-2`, {rotate: {z: -15}})

sr.reveal(`.footer__container`, { scale: 1})


/*=============== finder ===============*/
const finder = document.getElementById('buscador');
const results = document.querySelectorAll('.favorite__card');

finder.addEventListener('input', function(){
    const textLooked = this.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");;

    results.forEach(favorite__card => {
        const textResult = favorite__card.textContent.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (textResult.includes(textLooked)){
            favorite__card.style.display = 'block';
        }else {
            favorite__card.style.display = 'none';
        }
    });    
});

/*=================== POP UP ===================*/
function toggle(imageId){
    //variables de las imagenes de cada milla//
    var mainImage = document.getElementById('mainImage');

    if (imageId === 'image1') {
        mainImage.src = 'imagenes/millas/1onemill.png';
    } else if (imageId === 'image2') {
        mainImage.src = 'imagenes/millas/2twomill.png';
    } else if (imageId === 'image3') {
        mainImage.src = 'imagenes/millas/3threemill.png';
    } else if (imageId === 'image4') {
        mainImage.src = 'imagenes/millas/4fourmill.png';
    } else if (imageId === 'image5') {
        mainImage.src = 'imagenes/millas/5fivemill.png';
    } else if (imageId === 'image6') {
        mainImage.src = 'imagenes/millas/6sixmill.png';
    } else if (imageId === 'imagemd0') {
        mainImage.src = 'imagenes/millas/MDunique.png';
    } else if (imageId === 'imagemd1') {
        mainImage.src = 'imagenes/millas/MDonemill.png';
    } else if (imageId === 'imagemd2') {
        mainImage.src = 'imagenes/millas/MDtwomill.png';
    } else if (imageId === 'imagemd3') {
        mainImage.src = 'imagenes/millas/MDthreemill.png';
    }
    //efecto pop up y blur del fondo//
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}



