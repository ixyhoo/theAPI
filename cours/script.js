// XMLttpRequest

function reqListener() {
    console.log(this.responseText);
}           

let req = new XMLHttpRequest();
req.onload = reqListener;

req.open('get', 'data.txt', true);
req.send();