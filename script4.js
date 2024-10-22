let count = 0;

const counterButton = document.querySelector('#counter-button');

counterButton.addEventListener('click', function() {
    count++;
    let displayCounter = document.querySelector('#display-counter');
    let timeOrTimes = "time";
    if (count == 1) {
        timeOrTimes = "time";
    } else {
        timeOrTimes = "times";
    }
    displayCounter.innerText = `Clicked ${count} ${timeOrTimes}`;
})