console.log("hey");

let count = 0;

let count = 0;

function alertUser () {
    count++;
    let label = document.getElementById("display-counter");
    label.innerText = `Clicked ${count} times`; 
    count++;
    let label = document.getElementById("display-counter");
    label.innerText = `Clicked ${count} times`; 
}

const clicked = document.getElementById("main-button");

clicked.addEventListener('click', alertUser);


