console.log("hey");

let count = 0;

function alertUser() {
    count++;
    let label = document.getElementById("display-counter");
    label.innerText = `Clicked ${count} ${count === 1 ? 'time' : 'times'}`;
  }

const clicked = document.getElementById("main-button");

clicked.addEventListener("click", alertUser);
