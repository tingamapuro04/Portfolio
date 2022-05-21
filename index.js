const projectInfo = [
  {
    name: 'Tonic',
    history: ['CANOPY', 'Back End Dev', 2015],
    fimage: './photos/Tanya.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply",
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    sLive: 'https://github.com/tingamapuro04',
    lSource: 'https://github.com/tingamapuro04',
  },
  {
    name: 'Multi-Post Stories',
    history: ['CANOPY', 'Facebook', 'Full Stack', 'Back End Dev', 2015],
    fimage: './photos/second.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply",
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    sLive: 'https://github.com/tingamapuro04',
    lSource: 'https://github.com/tingamapuro04',
  },
  {
    name: 'Tonic',
    history: ['CANOPY', 'Facebook', 'Full Stack', 'Back End Dev', 2015],
    fimage: './photos/third.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply",
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    sLive: 'https://github.com/tingamapuro04',
    lSource: 'https://github.com/tingamapuro04',
  },
  {
    name: 'Multi-Post Stories',
    history: ['Canopy', 'Uber', 'Lead Developer', 'Back End Dev', 2015],
    fimage: './photos/fourth.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ",
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    sLive: 'https://github.com/tingamapuro04',
    lSource: 'https://github.com/tingamapuro04',
  },
];

function secondcard(item) {
  return `
  <div id="card2" class="inside">
    <div class="pop-head">
      <div class="pop-times">
        <h1>${item.name}<h1>
        <p id="tonic1">&times</p>
      </div>
      
      <ul class="pop-hist">
      <li class="can">${item.history[0]}</li>
      <li class="back">${item.history[1]}</li>
      <li class="year">${item.history[2]}</li>
      </ul>
    </div>
    <div class="pop-img">
      <img src="${item.fimage}">
    </div>
    <div class="pop-lower">
      <p class="desc">${item.description}</p>
      <p class="desc1">${item.description1}</p>

      <div class="pop-tech">
      <ul class="pop-tec-list">
        <li>${item.technologies[0]}
        <li>${item.technologies[1]}
        <li>${item.technologies[2]}
        <li class="hid">${item.technologies[3]}
        <li class="hid">${item.technologies[4]}
        <li class="hid">${item.technologies[5]}
      </ul>
      <hr class="pop-hr">
      <div class= "pop-btn1">
        <button class="pop-btn" type= "link"><a href="${item.sLive}"> See live <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
        <button class="pop-btn" type= "link"><a href="${item.lSource}"> See Source <i class="fa-brands fa-github"></i></a></button>
      </div>
      </div>
    </div>
  `;
}

const twolist = [];
twolist.push(projectInfo[0]);
document.getElementById('adoyo').innerHTML = `
${twolist.map(secondcard).join('')}
`;

function firstcard(item) {
  return `
  <div id="card1" class="inside">
    <div class="pop-head">
      <div class="pop-times">
        <h1>${item.name}<h1>
        <p id="post1">&times</p>
      </div>
      
      <ul class="pop-hist">
      <li class="can can2">${item.history[0]}</li>
      <li class="face">${item.history[1]}</li>
      <li class="full">${item.history[2]}</li>
      <li class="back back1">${item.history[3]}</li>
      <li class="back">${item.history[4]}</li>
      </ul>
    </div>
    <div class="pop-img">
      <img src="${item.fimage}">
    </div>
    <div class="pop-lower">
      <p class="desc">${item.description}</p>
      <p class="desc1">${item.description1}</p>
      <div class="pop-tech">
      <ul class="pop-tec-list">
        <li>${item.technologies[0]}
        <li>${item.technologies[1]}
        <li>${item.technologies[2]}
        <li class="hid">${item.technologies[3]}
        <li class="hid">${item.technologies[4]}
        <li class="hid">${item.technologies[5]}
      </ul>
      <hr class="pop-hr">
      <div class= "pop-btn1">
        <button class="pop-btn" type= "link"><a href="${item.sLive}"> See live <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
        <button class="pop-btn" type= "link"><a href="${item.lSource}"> See Source <i class="fa-brands fa-github"></i></a></button>
      </div>
      </div>
    </div>
  `;
}

const onelist = [];
onelist.push(projectInfo[1]);
document.getElementById('mobutu').innerHTML = `
${onelist.map(firstcard).join('')}
`;

function thirdcard(item) {
  return `
  <div id ="card3" class="inside">
    <div class="pop-head">
      <div class="pop-times">
        <h1>${item.name}<h1>
        <p id="tonic2">&times</p>
      </div>
      
      <ul class="pop-hist">
      <li class="can can2">${item.history[0]}</li>
      <li class="face">${item.history[1]}</li>
      <li class="full">${item.history[2]}</li>
      <li class="back back1">${item.history[3]}</li>
      <li class="year">${item.history[4]}</li>
      </ul>
    </div>
    <div class="pop-img">
      <img src="${item.fimage}">
    </div>
    <div class="pop-lower">
      <p class="desc">${item.description}</p>
      <p class="desc1">${item.description1}</p>
      <div class="pop-tech">
      <ul class="pop-tec-list">
        <li>${item.technologies[0]}
        <li>${item.technologies[1]}
        <li>${item.technologies[2]}
        <li class="hid">${item.technologies[3]}
        <li class="hid">${item.technologies[4]}
        <li class="hid">${item.technologies[5]}
      </ul>
      <hr class="pop-hr">
      <div class= "pop-btn1">
        <button class="pop-btn" type= "link"><a href="${item.sLive}"> See live <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
        <button class="pop-btn" type= "link"><a href="${item.lSource}"> See Source <i class="fa-brands fa-github"></i></a></button>
      </div>
      </div>
    </div>
  `;
}

const threelist = [];
threelist.push(projectInfo[2]);
document.getElementById('alphonce').innerHTML = `
${threelist.map(thirdcard).join('')}
`;

function fourthcard(item) {
  return `
  <div class="inside card4">
    <div class="pop-head">
      <div class="pop-times">
        <h1>${item.name}<h1>
        <p id="post2">&times</p>
      </div>
      
      <ul class ="pop-hist">
        <li class="can can2">${item.history[0]}</li>
        <li class="face">${item.history[1]}</li>
        <li class="full">${item.history[2]}</li>
        <li class="back back1">${item.history[3]}</li>
        <li class="year">${item.history[4]}</li>
      </ul>
    </div>
    <div class="pop-img">
      <img src="${item.fimage}">
    </div>
    <div class="pop-lower">
      <p class="desc">${item.description}</p>
      <p class="desc1">${item.description1}</p>
      <div class="pop-tech">
      <ul class="pop-tec-list">
        <li>${item.technologies[0]}
        <li>${item.technologies[1]}
        <li>${item.technologies[2]}
        <li class="hid">${item.technologies[3]}
        <li class="hid">${item.technologies[4]}
        <li class="hid">${item.technologies[5]}
      </ul>
      <hr class="pop-hr">
      <div class= "pop-btn1">
        <button class="pop-btn" type= "link"><a href="${item.sLive}"> See live <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
        <button class="pop-btn" type= "link"><a href="${item.lSource}"> See Source <i class="fa-brands fa-github"></i></a></button>
      </div>
      </div>
    </div>
  `;
}

const fourlist = [];
fourlist.push(projectInfo[3]);
document.getElementById('nina').innerHTML = `
${fourlist.map(fourthcard).join('')}
`;

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