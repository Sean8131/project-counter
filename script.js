console.log("hey");

function alertUser () {
    alert("This is an alert");
}

const clicked = document.getElementById("main-button");

clicked.addEventListener('click', alertUser);