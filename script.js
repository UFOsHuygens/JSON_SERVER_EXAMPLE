var h1 = document.querySelector("h1");

fetch("http://localhost:3000/solarsystem_db").then(response => response.json())
.then(json => {json.map(item => {
    h1.innerHTML += `${item.planet}<br>`
})})

// npm install -g json-server
// json-server --watch db.json