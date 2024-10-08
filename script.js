let count = 0;

function incrementCounter() {
  count++;
  let label = document.getElementById("display-counter");
  label.innerText = `Clicked ${count} ${count === 1 ? "time" : "times"}`;
}
// The incrementCounter function increments the counter by 1 each time the "Add one more button" is clicked. If the count is 1, then the counter should read "Clicked 1 time", otherwise, the counter should read "Clicked <X> times".

const addOneMore = document.getElementById("counter-button");
// The addOneMore variable is being assigned the result of document.getElementById("main-button");

addOneMore.addEventListener("click", incrementCounter);
// When the user clicks the "counter-button", the incrementCounter function will be called.
