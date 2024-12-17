// Select elements
const enquireBtn = document.getElementById('enquire-btn');
const popupForm = document.getElementById('popup-form');
const closeBtn = document.getElementById('close-btn');

//Swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Show popup form
enquireBtn.addEventListener('click', () => {
  popupForm.classList.add('active');
  popupForm.style.display = 'block'; 
});

// Close popup form
closeBtn.addEventListener('click', () => {
  popupForm.classList.remove('active');
  setTimeout(() => {
    popupForm.style.display = 'none';
  }, 500); 
});

//Close popup when clicking outside the form
window.addEventListener('click', (e) => {
  if (e.target === popupForm) {
    popupForm.classList.remove('active');
    setTimeout(() => {
      popupForm.style.display = 'none'; 
    }, 500); 
  }
});

let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll=()=>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}
