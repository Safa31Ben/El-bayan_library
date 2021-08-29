
let sc = window.scrollY;

window.addEventListener('reload', function(){
    window.scrollTo(sc);
    header.classList.toggle('sticky',window.scrollY > 0);
});

//add sticky header
window.addEventListener("scroll", function (){
    const header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
});

//muted sound muted
function mute(){
    if(document.getElementById("mute").checked == 1){
        document.getElementById("_audio").muted = false;
    }else{
        document.getElementById("_audio").muted = true;
    }
}

//Display Mobile Menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
menu.addEventListener('click', mobileMenu );

const hideMobileMenu = () => {
    const menu_b = document.querySelector('.is-active');
    if (window.innerWidth <= 960 && menu_b) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};
menuLinks.addEventListener('click', hideMobileMenu);

//active menu

const highlightMenu = () => {

    const ele = document.querySelector('.highlight');
    const books = document.querySelector('#Books-page');
    const authors = document.querySelector('#author-page');
    const quots = document.querySelector('#quots-page');
    const sciBooks = document.querySelector('#sci_books-page');

    let scrollPos = window.scrollY;

    if(window.innerWidth > 960){
        if(scrollPos <640 && scrollPos != 0){
            books.classList.add('highlight');
            authors.classList.remove('highlight');
        }else if(scrollPos < 1910){
            books.classList.remove('highlight');
            authors.classList.add('highlight');
            quots.classList.remove('highlight');
        }else if(scrollPos < 2500){
            authors.classList.remove('highlight');
            quots.classList.add('highlight');
            sciBooks.classList.remove('highlight');
        }else if(scrollPos <3400){
            sciBooks.classList.add('highlight');
            quots.classList.remove('highlight');
        }else{
            if( ele){
                ele.classList.remove('highlight');
            }
        }
    }else{
        if( ele){
            ele.classList.remove('highlight');
        }
    }
}
window.addEventListener('scroll', highlightMenu);

//flipbook
const book = document.querySelector('#book');

const selectFlip = () => {
    if(window.innerWidth <=800){
        $(book).turn({
            display:'single'
        });
    }else{
        $(book).turn({
            display: 'double',
            autoCenter: true
        });
    }
}
window.addEventListener('load', selectFlip);
window.addEventListener('resize', function(){
    this.window.location.reload();
});

//owlCarousel
$(document).ready( function(){
    $('.carousel').owlCarousel( { 
            margin: 20 ,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
    });
});
