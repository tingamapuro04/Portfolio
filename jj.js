const hamburger = document.querySelector('.ham');
const navMenu = document.querySelector('.navmenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// get the bars of the hamburger menu

const portfolio = document.querySelector('.portfolio-link');
const aboutUs = document.querySelector('.about-link');
const contactLink = document.querySelector('.contact-link');

const close = () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
};

portfolio.addEventListener('click', () => {
  close();
});

aboutUs.addEventListener('click', () => {
  close();
});

contactLink.addEventListener('click', () => {
  close();
});

const name1 = document.getElementById('name_1');
const email1 = document.getElementById('email_1');
const text1 = document.getElementById('text_1');

const form = document.getElementById('form');
form.addEventListener('input', () => {
  // getting the values of the inputs;
  const namevalue = name1.value.trim();
  const emailvalue = email1.value.trim();
  const textvalue = text1.value.trim();

  const details = {
    name: namevalue,
    email: emailvalue,
    text: textvalue,
  };

  localStorage.setItem('details', JSON.stringify(details));
});

const detailsRetrieve = JSON.parse(localStorage.getItem('details'));

if (detailsRetrieve) {
  name1.value = detailsRetrieve.name;
  email1.value = detailsRetrieve.email;
  text1.value = detailsRetrieve.text;
}