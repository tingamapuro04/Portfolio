const projectInfo = [
  {
    name: 'Movie Maze',
    history: ['Front End Dev', 'Microverse', 2022],
    fimage: './photos/Maze.jpeg',
    description: 'An app that fetches data from an API and renders it to the UI',
    technologies: ['Html', 'css', 'JavaScript', 'github', 'ruby', 'Bootstrap'],
    sLive: 'https://movie-maze.netlify.app/',
  },
  {
    name: 'Book Store',
    history: ['Front End Dev', 'Microverse', 2022],
    fimage: './photos/buku.jpeg',
    description: 'An app where we use Redux store to store data fetched from an API and also we can add and remove the items in the store',
    technologies: ['React', 'Redux', 'JavaScript'],
    sLive: 'https://beautiful-puffpuff-9f47fc.netlify.app/',
  },
  {
    name: 'Trading App',
    history: ['Front End Dev', 'Microverse', 2022],
    fimage: './photos/trad.jpeg',
    description: 'An app where a user is able to follow the trends so that they can trade with good information about the market',
    technologies: ['React', 'Redux', 'JavaScript'],
    sLive: 'https://m-trading-app.netlify.app/',
  },
  {
    name: 'Calculator',
    history: ['Front End Dev', 'Microverse', 2015],
    fimage: '/photos/Kalku.jpeg',
    description: 'A simple calculator that can be used for simple mathematical manipulations. It is made using React',
    technologies: ['React', 'JavaScript', 'Css'],
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
        <li class="first">${item.history[0]}</li>
        <li class="first">${item.history[1]}</li>
        <li>${item.history[2]}</li>
      </ul>
      <p>${item.description}</p>
      <ul class="unordered covered">
        <li>${item.technologies[0]}</li>
        <li>${item.technologies[1]}</li>
        <li>${item.technologies[2]}</li>
      </ul>
      <a href=${item.sLive}><button class="Project_see">See Project</button></a>
    </div>
  </div>
  `;
}

mapping.innerHTML = `${projectInfo.map(card).join('')}`;
