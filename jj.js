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
const open = document.getElementById('pop-open');
const close_up = document.getElementById('pop-close');

open.addEventListener('click', function () {
  pop.style.display = 'inline-block';
  pop.style.zIndex = '10'
})


close_up.addEventListener('click', function () {
  pop.style.display = 'none'
})

window.addEventListener('click', function(e){
  if (e.target == pop) {
    pop.style.display = 'none'
  }
})
