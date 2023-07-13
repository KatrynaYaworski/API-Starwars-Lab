

residentsBtn = document.getElementById('get-residents')

const clickedBtn = () => {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then(res => {
        const data = res.data.results
        const residentsData = data[0].residents
        console.log(data)
    residentsData.forEach(element => {
        axios.get(element)
        .then(  res => {
          let name = res.data.name;
          let residents = document.createElement('h2')
          residents.textContent = `${name}`
          let image = document.createElement('div')
          image.className = (`${name}-img`).replace(/\s/g,'')
          residents.appendChild(image)
          residents.className = (`${name}`).replace(/\s/g,'')
          document.querySelector('main').appendChild(residents)
          
        })
        
    });
    })
}

residentsBtn.addEventListener('click', clickedBtn)