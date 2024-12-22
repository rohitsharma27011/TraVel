let searchBar = document.querySelector('.fa-search');
let searchBox = document.querySelector('.search-box');

let menuBar = document.querySelector('.fa-bars');
let navBar = document.querySelector('.navbar');

let userBar = document.querySelector('.fa-user');
let loginForm = document.querySelector('.login-form-container');
let closeFrom = document.querySelector('#form-close');

let videoBtn = document.querySelectorAll('.vid-btn');


window.onscroll = () =>{
    searchBar.classList.remove('fa-times');
    searchBox.classList.remove('active');
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

searchBar.addEventListener('click', ()=>{
    searchBar.classList.toggle('fa-times');
    searchBox.classList.toggle('active');
});


menuBar.addEventListener('click', ()=>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

userBar.addEventListener('click', ()=>{
    loginForm.classList.toggle('active');
});

closeFrom.addEventListener('click', ()=>{
    loginForm.classList.remove('active');
});


videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
    });
});


var swiper = new Swiper(".review-slider",{
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay: 2500,
        disableOnInteraction:false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});



var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});
