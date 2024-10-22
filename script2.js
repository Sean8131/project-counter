let count = 0;

let updatedCount = document.getElementById('display-counter');

const addButton = document.getElementById('counter-button');

addButton.addEventListener('click', function() {
    ++ count;
    let timeOrTimes = "time";
    if (count == 1) {
        timeOrTimes = "time"
    } else {
        timeOrTimes = "times"
    }
    updatedCount.innerText = `Clicked ${count} ${timeOrTimes}`;
    updatedCount.style.backgroundColor = "grey";
});