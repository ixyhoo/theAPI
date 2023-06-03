// XMLttpRequest

function reqListener() {
    console.log(this.responseText);
}           

let req = new XMLHttpRequest();
req.onload = reqListener;

//req.open('get', 'data.txt', true);
//req.open('get', 'data.json', true);
//req.open('get', 'https://api.blablagues.net/?rub=blagues', true);
//req.send();

// Fetch API

fetch('https://api.blablagues.net/?rub=blagues').then((response) => {
    console.log(response);
})
.catch((error) => console.log(error));