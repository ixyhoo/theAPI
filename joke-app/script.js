const header = document.getElementById('header')
const content = document.getElementById('content')

fetch('https://api.blablagues.net/?rub=blagues')
    .then((response) => response.json())
    .then((data) => data.data.content.text_head)
    
    