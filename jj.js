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



const form = document.getElementById('form');
const email = document.getElementById('email_1');
const emailvalue = email.value.trim()
const error_m = document.getElementById('error');

form.addEventListener('submit', (e) => {
  const messages = [];
  if (emailvalue !== emailvalue.toLowerCase()) {
    messages.push('Do your email in lowercase!')
  }

  if (messages.length > 0) {
    e.preventDefault()
    error_m.innerText = messages.join(', ')
  }
})