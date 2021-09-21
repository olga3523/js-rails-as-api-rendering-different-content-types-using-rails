function getData() {
    fetch('http://localhost:3000/birds').then(response => response.json()).then(text => console.log(text));
}

getData();