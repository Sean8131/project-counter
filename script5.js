let counter = 0;

const counterButton = document.getElementById('counter-button');

const displayCounter = document.getElementById('display-counter');

let timeOrTimes;

counterButton.addEventListener('click', function(){
    counter++;
    if (counter == 1) {
        timeOrTimes = "time"
    } else {
        timeOrTimes = "times";
    };
    displayCounter.innerText = `Clicked ${counter} ${timeOrTimes}`;
});