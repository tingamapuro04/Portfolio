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
const emailz = document.getElementById('email_1');
const text1 = document.getElementById('text_1');

const formlocal = document.getElementById('form1');
formlocal.addEventListener('input', () => {
  // getting the values of the inputs;
  const namevalue = name1.value.trim();
  const emailvalue = emailz.value.trim();
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
  emailz.value = detailsRetrieve.email;
  text1.value = detailsRetrieve.text;
}