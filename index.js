const projectInfo = [
  {
    name: 'Movie Maze',
    history: ['CANOPY', 'Front End Dev', 2022],
    fimage: './photos/Maze.jpeg',
    description: "An app that fetches data from an API and renders it to the UI",
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    sLive: 'https://movie-maze.netlify.app/',
    lSource: 'https://github.com/tingamapuro04',
  },
  {
    name: 'Book Store',
    history: ['CANOPY', 'Facebook', 'Full Stack', 'Back End Dev', 2022],
    fimage: './photos/buku.jpeg',
    description: "An app where we use Redux store to store data fetched from an API and also we can add and remove the items in the store",
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    sLive: 'https://beautiful-puffpuff-9f47fc.netlify.app/',
  },
  {
    name: 'Trading App',
    history: ['CANOPY', 'Facebook', 'Full Stack', 'Back End Dev', 2022],
    fimage: './photos/trad.jpeg',
    description: "An app where a user is able to follow the trends so that they can trade with good information about the market",
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    sLive: 'https://m-trading-app.netlify.app/',
  },
  {
    name: 'Calculator',
    history: ['Canopy', 'Uber', 'Lead Developer', 'Back End Dev', 2015],
    fimage: '/photos/Kalku.jpeg',
    description: "A simple calculator that can be used for simple mathematical manipulations. It is made using React",
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    sLive: 'https://neon-puffpuff-9947bf.netlify.app/',
  },
];



const mapping = document.querySelector('.s-container');

function card(item) {
  return `
  <div class="Card">
    <img class="project-img" alt="card pic" src=${item.fimage} />
    <div class="details">
      <h1>${item.name}</h1>
      <ul class="unordered">
        <li>${item.history[0]}</li>
        <li>${item.history[1]}</li>
        <li>${item.history[2]}</li>
      </ul>
      <p>${item.description}</p>
      <ul class="unordered">
        <li>${item.technologies[0]}</li>
        <li>${item.technologies[1]}</li>
        <li>${item.technologies[2]}</li>
      </ul>
      <a href=${item.sLive}><button>See Project</button></a>
    </div>
  </div>
  `
}

mapping.innerHTML = `${projectInfo.map(card).join('')}`;

const fBox = document.getElementById('mobutu');
const sBox = document.getElementById('adoyo');
const tBox = document.getElementById('alphonce');
const nBox = document.getElementById('nina');

const closingB4 = document.getElementById('post2');
const closingB3 = document.getElementById('tonic2');
const closingB2 = document.getElementById('post1');
const closingB1 = document.getElementById('tonic1');

const fButton = document.getElementById('fCard');
fButton.addEventListener('click', () => {
  sBox.style.display = 'block';
});

const sButton = document.getElementById('sCard');
sButton.addEventListener('click', () => {
  fBox.style.display = 'block';
});

const tButton = document.getElementById('tCard');
tButton.addEventListener('click', () => {
  tBox.style.display = 'block';
});

const nButton = document.getElementById('lCard');
nButton.addEventListener('click', () => {
  nBox.style.display = 'block';
});

closingB4.addEventListener('click', () => {
  nBox.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === nBox) {
    nBox.style.display = 'none';
  }
});

closingB3.addEventListener('click', () => {
  tBox.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === tBox) {
    tBox.style.display = 'none';
  }
});

closingB2.addEventListener('click', () => {
  fBox.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === fBox) {
    fBox.style.display = 'none';
  }
});

closingB1.addEventListener('click', () => {
  sBox.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === sBox) {
    sBox.style.display = 'none';
  }
});