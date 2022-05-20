const projectInfo = [
  {
    name: 'Tonic',
    history: ['Canopy', 'Back End Dev', 2015],
    fimage: "./photos/Tanya.png",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae aspernatur, soluta et modi iusto similique aut corrupti molestias voluptates rerum.", 
    technologies: ['html', 'css', 'javascript'],
    sLive: "https://github.com/tingamapuro04",
    lSource: "https://github.com/tingamapuro04"
  },
  {
    name: 'Multi-Post Stories',
    history: ['Canopy', 'Back End Dev', 2015],
    fimage: "./photos/second.png",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.', 
    technologies: ['html', 'css', 'javascript'],
    sLive: "https://github.com/tingamapuro04",
    lSource: "https://github.com/tingamapuro04"
  },
  {
    name: 'Tonic',
    history: ['Canopy', 'Back End Dev', 2015],
    fimage: "./photos/third.png",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae aspernatur, soluta et modi iusto similique aut corrupti molestias voluptates rerum.", 
    technologies: ['html', 'css', 'javascript'],
    sLive: "https://github.com/tingamapuro04",
    lSource: "https://github.com/tingamapuro04"
  },
  {
    name: 'Tonic',
    history: ['Canopy', 'Back End Dev', 2015],
    fimage: "./photos/fourth.png",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae aspernatur, soluta et modi iusto similique aut corrupti molestias voluptates rerum.", 
    technologies: ['html', 'css', 'javascript'],
    sLive: 'https://github.com/tingamapuro04',
    lSource: 'https://github.com/tingamapuro04'
  }
]





function listProject (item) {
  return `
  <div class="inside">
    <div class="pop-head">
      <h1>${item.name}<h1>
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
      </ul>
      <hr>
      </div>
    </div>
  
  <p>${item.description}</p>
  </div>
  `
}




document.getElementById("windowPop").innerHTML = `
${projectInfo.map(listProject).join(' ')}
`