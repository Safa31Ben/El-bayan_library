
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
        }else if(scrollPos < 2520){
            authors.classList.remove('highlight');
            quots.classList.add('highlight');
            sciBooks.classList.remove('highlight');
        }else if(scrollPos <3700){
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
window.addEventListener('click', highlightMenu);



//flipped book

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');

const paper1 = document.querySelector('#p1');
const paper2 = document.querySelector('#p2');
const paper3 = document.querySelector('#p3');
const paper4 = document.querySelector('#p4');
const paper5 = document.querySelector('#p5');
const paper6 = document.querySelector('#p6');
const paper7 = document.querySelector('#p7');
const paper8 = document.querySelector('#p8');
const paper9 = document.querySelector('#p9');
const paper10 = document.querySelector('#p10');
const paper11 = document.querySelector('#p11');
const paper12 = document.querySelector('#p12');
const paper13 = document.querySelector('#p13');
const paper14 = document.querySelector('#p14');
const paper15 = document.querySelector('#p15');
const paper16 = document.querySelector('#p16');
const paper17 = document.querySelector('#p17');
const paper18 = document.querySelector('#p18');
const paper19 = document.querySelector('#p19');
const paper20 = document.querySelector('#p20');

let currentLocation = 1;
let numOfPages = 20;
let maxLocation = numOfPages+1;

prevBtn.addEventListener('click',goPrevPage);
nextBtn.addEventListener('click',goNextPage);

window.addEventListener('resize',function(){
    if(window.innerWidth > 960){
        if(currentLocation != 1){
            openBook();
        }
    }else{
        openBook();
    }
});

function openBook(){
    if(window.innerWidth  > 960){
        book.style.transform = "translateX(-50%)";
        prevBtn.style.transform = "translateX(180px)";
        nextBtn.style.transform = "translateX(-180px)";
    }else{
        book.style.transform = "translateX(0%)";
        prevBtn.style.transform = "translateX(0px)";
        nextBtn.style.transform = "translateX(0px)";
    }
}

function closeBook(isAtBeginning){
    if(window.innerWidth > 960){
        if(isAtBeginning){
            book.style.transform = "translateX(0%)";
        }else{
        book.style.transform = "translateX(-100%)";
        }
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage(){
    if(window.innerWidth > 960){
        if(currentLocation < maxLocation *2){
            switch(currentLocation){
                case 1 : case 2: 
                    openBook();
                    paper1.classList.add("flipped");
                    paper1.style.zIndex = 1;
                    break;
                case 3 : case 4 : 
                    paper2.classList.add("flipped");
                    paper2.style.zIndex = 2;
                    break;
                case 5 : case 6:
                    paper3.classList.add("flipped");
                    paper3.style.zIndex = 3;
                    break;
                case 7 :  case 8 :
                    paper4.classList.add("flipped");
                    paper4.style.zIndex = 4;
                    break;
                case 9 : case 10:
                    paper5.classList.add("flipped");
                    paper5.style.zIndex = 5;
                    break;
                case 11 : case 12:
                    paper6.classList.add("flipped");
                    paper6.style.zIndex = 6;
                    break;
                case 13: case 14 : 
                    paper7.classList.add("flipped");
                    paper7.style.zIndex = 7;
                    break;
                case 15 :  case 16:
                    paper8.classList.add("flipped");
                    paper8.style.zIndex = 8;
                    break;
                case 17 : case 18:
                    paper9.classList.add("flipped");
                    paper9.style.zIndex = 9;
                    break;
                case 19 : case 20:
                    paper10.classList.add("flipped");
                    paper10.style.zIndex = 10;
                    break;
                case 21 : case 22:
                    paper11.classList.add("flipped");
                    paper11.style.zIndex = 11;
                    break;
                case 23 : case 24 :
                    paper12.classList.add("flipped");
                    paper12.style.zIndex = 12;
                    break;
                case 25 : case 26:
                    paper13.classList.add("flipped");
                    paper13.style.zIndex = 13;
                    break;
                case 27 : case 28:
                    paper14.classList.add("flipped");
                    paper14.style.zIndex = 14;
                    break;
                case 29 : case 30:
                    paper15.classList.add("flipped");
                    paper15.style.zIndex = 15;
                    break;
                case 31 : case 32:
                    paper16.classList.add("flipped");
                    paper16.style.zIndex = 16;
                    break;
                case 33 : case 34:
                    paper17.classList.add("flipped");
                    paper17.style.zIndex = 17;
                    break;
                case 35 : case 36:
                    paper18.classList.add("flipped");
                    paper18.style.zIndex = 18;
                    break;
                case 37 : case 38:
                    paper19.classList.add("flipped");
                    paper19.style.zIndex = 19;
                    break;
                case 39 : case 40:
                    paper20.classList.add("flipped");
                    paper20.style.zIndex = 20;
                    closeBook(false);
                    break;
                default:
                    throw new Error("Unkown state");
            }
            currentLocation+=2;
        }
    }else{
        if(currentLocation < maxLocation*2 ){
            switch(currentLocation){
                case 0: case 1 : 
                    paper1.classList.add("flipped");
                    break;
                case 2 : 
                    paper1.classList.add("flipped");
                    paper1.style.zIndex = 1;
                    break;
                case 3 : 
                    paper2.classList.add("flipped");
                    break;
                case 4 :
                    paper2.classList.add("flipped");
                    paper2.style.zIndex = 2;
                    break;
                case 5 : 
                    paper3.classList.add("flipped");
                    break;
                case 6 : 
                    paper3.classList.add("flipped");
                    paper3.style.zIndex = 3;
                    break;
                case 7 : 
                    paper4.classList.add("flipped");
                    break;
                case 8 :
                    paper4.classList.add("flipped");
                    paper4.style.zIndex = 4;
                    break;
                case 9 : 
                    paper5.classList.add("flipped");
                    break;
                case 10 :
                    paper5.classList.add("flipped");
                    paper5.style.zIndex = 5;
                    break;
                case 11 : 
                    paper6.classList.add("flipped");
                    break;
                case 12 : 
                    paper6.classList.add("flipped");
                    paper6.style.zIndex = 6;
                    break;
                case 13 : 
                    paper7.classList.add("flipped");
                    break;
                case 14 : 
                    paper7.classList.add("flipped");
                    paper7.style.zIndex = 7;
                    break;
                case 15 : 
                    paper8.classList.add("flipped");
                    break;
                case 16 : 
                    paper8.classList.add("flipped");
                    paper8.style.zIndex = 8;
                    break;
                case 17 :
                    paper9.classList.add("flipped");
                    break;
                case 18 :
                    paper9.classList.add("flipped");
                    paper9.style.zIndex = 9;
                    break;
                case 19 :
                    paper10.classList.add("flipped");
                    break;
                case 20 :
                    paper10.classList.add("flipped");
                    paper10.style.zIndex = 10;
                    break;
                case 21 :
                    paper11.classList.add("flipped");
                    break;
                case 22 :
                    paper11.style.zIndex = 11;
                    paper12.style.zIndex = 12;
                    break;
                case 23 : 
                    paper12.classList.add("flipped");
                    break;
                case 24 :
                    paper13.style.zIndex = 13;
                    break;
                case 25 : 
                    paper13.classList.add("flipped");
                    break;
                case 26 : 
                    paper14.style.zIndex = 14;
                    break;
                case 27 : 
                    paper14.classList.add("flipped");
                    break;
                case 28 : 
                    paper15.style.zIndex = 15;
                    break;
                case 29 :
                    paper15.classList.add("flipped");
                    break;
                case 30 :
                    paper16.style.zIndex = 16;
                    break;
                case 31 :
                    paper16.classList.add("flipped");
                    break;
                case 32 :
                    paper17.style.zIndex = 17;
                    break;
                case 33 : 
                    paper17.classList.add("flipped");
                    break;
                case 34 :
                    paper18.style.zIndex = 18;
                    break;
                case 35 : 
                    paper18.classList.add("flipped");
                    break;
                case 36 :
                    paper19.style.zIndex = 19;
                    break;
                case 37 : 
                    paper19.classList.add("flipped");
                    break;
                case 38 : 
                    paper20.style.zIndex = 20;
                    break;
                case 39 : 
                    paper20.classList.add("flipped");
                    break;
                default:
                    throw new Error("Unkown state");
            }
            currentLocation++;
        }
    }
}
function goPrevPage(){
    if(window.innerWidth > 960){
        if(currentLocation >1 ){
            switch(currentLocation){
                case 2 : case 3:
                    closeBook(true);
                    paper1.classList.remove("flipped");
                    paper1.style.zIndex = 20;
                    break;
                case 4 : case 5:
                    paper2.classList.remove("flipped");
                    paper2.style.zIndex = 19;
                    break;
                case 6 : case 7:
                    paper3.classList.remove("flipped");
                    paper3.style.zIndex = 18;
                    break;
                case 8 : case 9:
                    paper4.classList.remove("flipped");
                    paper4.style.zIndex = 17;
                    break;
                case 10 : case 11:
                    paper5.classList.remove("flipped");
                    paper5.style.zIndex = 16;
                    break;
                case 12 : case 13:
                    paper6.classList.remove("flipped");
                    paper6.style.zIndex = 15;
                    break;
                case 14 : case 15:
                    paper7.classList.remove("flipped");
                    paper7.style.zIndex = 14;
                    break;
                case 16 : case 17:
                    paper8.classList.remove("flipped");
                    paper8.style.zIndex = 13;
                    break;
                case 18 : case 19:
                    paper9.classList.remove("flipped");
                    paper9.style.zIndex = 12;
                    break;
                case 20 : case 21:
                    paper10.classList.remove("flipped");
                    paper10.style.zIndex = 11;
                    break;
                case 22 : case 23:
                    paper11.classList.remove("flipped");
                    paper11.style.zIndex = 10;
                    break;
                case 24 : case 25:
                    paper12.classList.remove("flipped");
                    paper12.style.zIndex = 9;
                    break;
                case 26 : case 27:
                    paper13.classList.remove("flipped");
                    paper13.style.zIndex = 8;
                    break;
                case 28 : case 29:
                    paper14.classList.remove("flipped");
                    paper14.style.zIndex = 7;
                    break;
                case 30 : case 31:
                    paper15.classList.remove("flipped");
                    paper15.style.zIndex = 6;
                    break;
                case 32 : case 33:
                    paper16.classList.remove("flipped");
                    paper16.style.zIndex = 5;
                    break;
                case 34 : case 35:
                    paper17.classList.remove("flipped");
                    paper17.style.zIndex = 4;
                    break;
                case 36 : case 37:
                    paper18.classList.remove("flipped");
                    paper18.style.zIndex = 3;
                    break;
                case 38 : case 39:
                    paper19.classList.remove("flipped");
                    paper19.style.zIndex = 2;
                    break;
                case 40 : case 41: case 42:
                    openBook();
                    paper20.classList.remove("flipped");
                    paper20.style.zIndex = 1;
                    break;
                default:
                    throw new Error("Unkown state");
            }
            currentLocation-=2;
        }
    }else{
        if(currentLocation > 1 ){
            switch(currentLocation){
                case 2 :
                    paper1.classList.remove("flipped");
                    break;
                case 3 :
                    paper1.style.zIndex = 20;
                    break;
                case 4 :
                    paper2.classList.remove("flipped");
                    break;
                case 5 :
                    paper2.style.zIndex = 19;
                    break;
                case 6 :
                    paper3.classList.remove("flipped");
                    break;
                case 7 :
                    paper3.style.zIndex = 18;
                    break;
                case 8 :
                    paper4.classList.remove("flipped");
                    break;
                case 9 :
                    paper4.style.zIndex = 17;
                    break;
                case 10 :
                    paper5.classList.remove("flipped");
                    break;
                case 11 :
                    paper5.style.zIndex = 16;
                    break;
                case 12 :
                    paper6.classList.remove("flipped");
                    break;
                case 13 :
                    paper6.style.zIndex = 15;
                    break;
                case 14 :
                    paper7.classList.remove("flipped");
                    break;
                case 15 : 
                    paper7.style.zIndex = 14;
                    break;
                case 16 : 
                    paper8.classList.remove("flipped");
                    break;
                case 17 : 
                    paper8.style.zIndex = 13;
                    break;
                case 18 :
                    paper9.classList.remove("flipped");
                    break;
                case 19 :
                    paper9.style.zIndex = 12;
                    break;
                case 20 :
                    paper10.classList.remove("flipped");
                    break;
                case 21 :
                    paper10.style.zIndex = 11;
                    break;
                case 22 :
                    paper11.classList.remove("flipped");
                    break;
                case 23 :
                    paper11.style.zIndex = 10;
                    paper12.style.zIndex = 9;
                    break;
                case 24 :
                    paper12.classList.remove("flipped");
                    break;
                case 25 :
                    paper13.style.zIndex = 8;
                    break;
                case 26 :
                    paper13.classList.remove("flipped");
                    break;
                case 27 : 
                    paper14.style.zIndex = 7;
                    break;
                case 28 :
                    paper14.classList.remove("flipped");
                    break;
                case 29 : 
                    paper15.style.zIndex = 6;
                    break;
                case 30 :
                    paper15.classList.remove("flipped");
                    break;
                case 31 :
                    paper16.style.zIndex = 5;
                    break;
                case 32 :
                    paper16.classList.remove("flipped");
                    break;
                case 33 : 
                    paper17.style.zIndex = 4;
                    break;
                case 34 :
                    paper17.classList.remove("flipped");
                    break;
                case 35 :   
                    paper18.style.zIndex = 3;
                    break;
                case 36 :
                    paper18.classList.remove("flipped");
                    break;
                case 37 : 
                    paper19.style.zIndex = 2;
                    break;
                case 38 :
                    paper19.classList.remove("flipped");
                    break;
                case 39 :
                    paper20.style.zIndex = 1;
                    break;
                case 40 :
                    paper20.classList.remove("flipped");
                    break;
                default:
                    throw new Error("Unkown state");
            }
            currentLocation--;
        }
    }
}

//owlCarousel
$(document).ready( function(){
    $('.carousel').owlCarousel( { 
            margin: 10 ,
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
