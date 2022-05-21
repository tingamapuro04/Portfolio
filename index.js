const projectInfo = [
  {
    name: 'Tonic',
    history: ['Canopy', 'Back End Dev', 2015],
    fimage: "./photos/Tanya.png",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    sLive: "https://github.com/tingamapuro04",
    lSource: "https://github.com/tingamapuro04"
  },
  {
    name: 'Multi-Post Stories',
    history: ['Canopy', 'Back End Dev', 2015],
    fimage: "./photos/second.png",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.',
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    sLive: "https://github.com/tingamapuro04",
    lSource: "https://github.com/tingamapuro04"
  },
  {
    name: 'Tonic',
    history: ['Canopy', 'Back End Dev', 2015],
    fimage: "./photos/third.png",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.', 
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    sLive: "https://github.com/tingamapuro04",
    lSource: "https://github.com/tingamapuro04"
  },
  {
    name: 'Tonic',
    history: ['Canopy', 'Back End Dev', 2015],
    fimage: "./photos/fourth.png",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.', 
    technologies: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    sLive: 'https://github.com/tingamapuro04',
    lSource: 'https://github.com/tingamapuro04'
  }
]





function listProject (item) {
  return `
  <div class="inside">
    <div class="pop-head">
      <div class="pop-times">
        <h1>${item.name}<h1>
        <p>&times</p>
      </div>
      
      <ul clas="pop-hist">
      <li>${item.history[0]}</li>
      <li>${item.history[1]}</li>
      <li>${item.history[2]}</li>
      </ul>
    </div>
    <div class="pop-img">
      <img src="${item.fimage}">
    </div>
    <div class="pop-lower">
      <p class="desc">${item.description}</p>
      <div class="pop-tech">
      <ul class="pop-tec-list">
        <li>${item.technologies[0]}
        <li>${item.technologies[1]}
        <li>${item.technologies[2]}
        <li>${item.technologies[3]}
        <li>${item.technologies[4]}
        <li>${item.technologies[5]}
      </ul>
      <hr>
      <div class= "pop-btn">
        <button class="pop-btn" type= "link"><a href="${item.sLive}"> See live <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
        <button class="pop-btn" type= "link"><a href="${item.lSource}"> See Source <i class="fa-brands fa-github"></i></a></button>
      </div>
      </div>
    </div>
  `
}




document.getElementById("windowPop").innerHTML = `
${projectInfo.map(listProject).join(' ')}
`



function secondcard(item) {
  return `
  <div id="card2" class="inside">
    <div class="pop-head">
      <div class="pop-times">
        <h1>${item.name}<h1>
        <p id="close1">&times</p>
      </div>
      
      <ul class="pop-hist">
      <li>${item.history[0]}</li>
      <li>${item.history[1]}</li>
      <li>${item.history[2]}</li>
      </ul>
    </div>
    <div class="pop-img">
      <img src="${item.fimage}">
    </div>
    <div class="pop-lower">
      <p class="desc">${item.description}</p>
      <div class="pop-tech">
      <ul class="pop-tec-list">
        <li>${item.technologies[0]}
        <li>${item.technologies[1]}
        <li>${item.technologies[2]}
        <li>${item.technologies[3]}
        <li>${item.technologies[4]}
        <li>${item.technologies[5]}
      </ul>
      <hr class="pop-hr">
      <div class= "pop-btn1">
        <button class="pop-btn" type= "link"><a href="${item.sLive}"> See live <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
        <button class="pop-btn" type= "link"><a href="${item.lSource}"> See Source <i class="fa-brands fa-github"></i></a></button>
      </div>
      </div>
    </div>
  `
}





const twolist = []
twolist.push(projectInfo[0])
document.getElementById("adoyo").innerHTML = `
${twolist.map(secondcard).join('')}
`





function firstcard(item) {
  return `
  <div id="card1" class="inside">
    <div class="pop-head">
      <div class="pop-times">
        <h1>${item.name}<h1>
        <p id="close1">&times</p>
      </div>
      
      <ul class="pop-hist">
      <li>${item.history[0]}</li>
      <li>${item.history[1]}</li>
      <li>${item.history[2]}</li>
      </ul>
    </div>
    <div class="pop-img">
      <img src="${item.fimage}">
    </div>
    <div class="pop-lower">
      <p class="desc">${item.description}</p>
      <div class="pop-tech">
      <ul class="pop-tec-list">
        <li>${item.technologies[0]}
        <li>${item.technologies[1]}
        <li>${item.technologies[2]}
        <li>${item.technologies[3]}
        <li>${item.technologies[4]}
        <li>${item.technologies[5]}
      </ul>
      <hr class="pop-hr">
      <div class= "pop-btn1">
        <button class="pop-btn" type= "link"><a href="${item.sLive}"> See live <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
        <button class="pop-btn" type= "link"><a href="${item.lSource}"> See Source <i class="fa-brands fa-github"></i></a></button>
      </div>
      </div>
    </div>
  `
}




const onelist = []
onelist.push(projectInfo[1])
document.getElementById("mobutu").innerHTML = `
${onelist.map(firstcard).join('')}
`



function thirdcard(item) {
  return `
  <div id ="card3" class="inside">
    <div class="pop-head">
      <div class="pop-times">
        <h1>${item.name}<h1>
        <p id="close1">&times</p>
      </div>
      
      <ul class="pop-hist">
      <li>${item.history[0]}</li>
      <li>${item.history[1]}</li>
      <li>${item.history[2]}</li>
      </ul>
    </div>
    <div class="pop-img">
      <img src="${item.fimage}">
    </div>
    <div class="pop-lower">
      <p class="desc">${item.description}</p>
      <div class="pop-tech">
      <ul class="pop-tec-list">
        <li>${item.technologies[0]}
        <li>${item.technologies[1]}
        <li>${item.technologies[2]}
        <li>${item.technologies[3]}
        <li>${item.technologies[4]}
        <li>${item.technologies[5]}
      </ul>
      <hr class="pop-hr">
      <div class= "pop-btn1">
        <button class="pop-btn" type= "link"><a href="${item.sLive}"> See live <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
        <button class="pop-btn" type= "link"><a href="${item.lSource}"> See Source <i class="fa-brands fa-github"></i></a></button>
      </div>
      </div>
    </div>
  `
}


const threelist = []
threelist.push(projectInfo[2])
document.getElementById("alphonce").innerHTML = `
${threelist.map(thirdcard).join('')}
`






function fourthcard(item) {
  return `
  <div class="inside card4">
    <div class="pop-head">
      <div class="pop-times">
        <h1>${item.name}<h1>
        <p id="close1">&times</p>
      </div>
      
      <ul class ="pop-hist">
        <li>${item.history[0]}</li>
        <li>${item.history[1]}</li>
        <li>${item.history[2]}</li>
      </ul>
    </div>
    <div class="pop-img">
      <img src="${item.fimage}">
    </div>
    <div class="pop-lower">
      <p class="desc">${item.description}</p>
      <div class="pop-tech">
      <ul class="pop-tec-list">
        <li>${item.technologies[0]}
        <li>${item.technologies[1]}
        <li>${item.technologies[2]}
        <li>${item.technologies[3]}
        <li>${item.technologies[4]}
        <li>${item.technologies[5]}
      </ul>
      <hr class="pop-hr">
      <div class= "pop-btn1">
        <button class="pop-btn" type= "link"><a href="${item.sLive}"> See live <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
        <button class="pop-btn" type= "link"><a href="${item.lSource}"> See Source <i class="fa-brands fa-github"></i></a></button>
      </div>
      </div>
    </div>
  `
}


const fourlist = []
fourlist.push(projectInfo[3])
document.getElementById("nina").innerHTML = `
${fourlist.map(fourthcard).join('')}
`

const fBox = document.getElementById('adoyo')


const fButton = document.getElementById('fCard');
fButton.addEventListener('click', function() {
  fBox.style.display = 'block'
})