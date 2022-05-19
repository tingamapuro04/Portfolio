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


const name1 = document.getElementById('name_1')
const email = document.getElementById('email_1')





const form = document.getElementById('form');
form.addEventListener('submit', function (event) {
  // event.preventDefault()

  // getting the values of the inputs;
  const namevalue = name1.value.trim()
  const emailvalue = email.value.trim()
  console.log(namevalue)

  const details = {
    name: namevalue,
    email: emailvalue
  }

  localStorage.setItem('details', JSON.stringify(details))
})

const details_retrieve = JSON.parse(localStorage.getItem('details'))

if (details_retrieve) {
  name1.value = details_retrieve.name
  email.value = details_retrieve.email
}