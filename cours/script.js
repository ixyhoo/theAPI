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

/*fetch('https://api.blablagues.net/?rub=blagues').then((response) => {
    console.log(response);
})
.catch((error) => console.log(error));*/
/*fetch("data.txt").then((response) => response.text()).then((data) => console.log(data));

fetch("data.json").then((response) => response.json()).then((data) => console.log(data));*/

const myHeaders = new Headers();

const init = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
}

//fetch("data.json", init).then((response) => console.log(response));

// CRUD => Create (post), Read (GET), Update (PUT), Delete (DELETE)

const init2 = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        pseudo: 'John',
        message: 'Hello'
    }),
    mode: 'cors',
    Credential: "same-origin",
}
document.querySelector('form').addEventListener('submit', (e) => {

    fetch("http://localhost:3000/posts", init2).then((response) => console.log(response));
});

// Asynchrone

setTimeout(() => {
    //console.log('1');
}, 1000);

//promise
fetch("monLien").then((res)=> res)

//async await