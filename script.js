function deleteJoke(){
    delete ('.jokes')
}

function generateJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(json => {
        const container = document.querySelector('.jokes') 
        const icon =  document.createElement('img'); icon.src = "https://random.imagecdn.app/50/50"
        container.appendChild(icon)
        const itemJoke = document.createElement('span')
        itemJoke.textContent = json.value
        itemJoke.classList.add('jokes__item')
        container.appendChild(itemJoke)
        container.innerHTML(icon)
    });
}

