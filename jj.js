const hamburger = document.querySelector('.ham');
const nav_menu = document.querySelector('.navmenu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav_menu.classList.toggle('active');
})

// get the bars of the hamburger menu

const portfolio = document.querySelector('.portfolio-link');
const aboutUs = document.querySelector('.about-link');
const contactLink = document.querySelector('.contact-link');

const close = () => {
  hamburger.classList.toggle('active');
  nav_menu.classList.toggle('active');
};

portfolio.addEventListener('click', () => {
  close();
})

aboutUs.addEventListener('click', () => {
  close();
})

contactLink.addEventListener('click', () => {
  close();
})


const pop =document.getElementById('pop-outer');
const pop1 =document.getElementById('pop-outer1');
const pop2 =document.getElementById('pop-outer2');
const pop3 =document.getElementById('pop-outer3');


const open = document.getElementById('pop-open');
const open1 = document.getElementById('pop-open1');
const open2 = document.getElementById('pop-open2');
const open3 = document.getElementById('pop-open3');


const close_up = document.getElementById('pop-close');
const close_up1 = document.getElementById('pop-close1');
const close_up2 = document.getElementById('pop-close2');
const close_up3 = document.getElementById('pop-close3');



open.addEventListener('click', function () {
  pop.style.display = 'inline-block';
  pop.style.zIndex = '10'
})

open1.addEventListener('click', function () {
  pop1.style.display = 'inline-block';
  pop1.style.zIndex = '10'
})

open2.addEventListener('click', function () {
  pop2.style.display = 'inline-block';
  pop2.style.zIndex = '10'
})

open3.addEventListener('click', function () {
  pop3.style.display = 'inline-block';
  pop3.style.zIndex = '10'
})


close_up.addEventListener('click', function () {
  pop.style.display = 'none';
})
close_up1.addEventListener('click', function () {
  pop1.style.display = 'none';
})
close_up2.addEventListener('click', function () {
  pop2.style.display = 'none';
})
close_up3.addEventListener('click', function () {
  pop3.style.display = 'none';
})

window.addEventListener('click', function(e){
  if (e.target == pop) {
    pop.style.display = 'none'
  }
})
