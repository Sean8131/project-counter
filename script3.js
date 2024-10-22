count = 0;

const counterButton = document.querySelector('#counter-button');

counterButton.addEventListener('click', function() {
    count++;
    let displayCounter = document.querySelector('#display-counter');
    let timeOrTimes = "times";
    displayCounter.innerText = `Clicked ${count} ` == 1 ? "time": count != 1 ? "times":
    // if (count == 1) {
    //     timeOrTimes = "time"
    // } else {
    //     timeOrTimes = "times"
    // }
    // displayCounter.innerText = `Clicked ${count} ${timeOrTimes}` ;
    displayCounter.style.backgroundColor = 'grey';
});