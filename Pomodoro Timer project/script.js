//step 1: Get HTML Elements
const timer = document.getElementById("timer");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

//Step 2: Create Variables
let minutes = 25;  //          minutes = 25
let seconds = 0;   //seconds = 0
let interval;   //interval = undefined

function showTime() {  //Step 3: Show Initial Time   output:25:00
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");

  timer.innerText = m + ":" + s;
}

startBtn.addEventListener("click", function () {
  interval = setInterval(function () {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(interval);
        alert("Time Up!");
        return;
      }

      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    showTime();
  }, 1000);
});

pauseBtn.addEventListener("click", function () {
  clearInterval(interval);
});

resetBtn.addEventListener("click", function () {
  clearInterval(interval);

  minutes = 25;
  seconds = 0;

  showTime();
});

showTime();