//Dropdown window
const targetDiv = document.getElementById("instructions");
const howTo = document.getElementById("howto");
howTo.onclick = function () {
  if (targetDiv.style.display !== "block") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
};

//Counter
let seconds = 00;
let outputSeconds = document.getElementById('second');
let buttonStart = document.getElementById('playbtn');
let countInput = document.getElementById('count');
let timeInput = document.getElementById('time');
let Interval

buttonStart.addEventListener('click', () => {
  clearInterval(Interval);
  Interval = setInterval(startTime, 1000);
  targetDiv.style.display = "none";
})

function startTime(){
  let count;
  count = Number(countInput.value);
  seconds++;
  outputSeconds.innerHTML = seconds;
  second.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  if(seconds >= count){
    seconds = 0;
  }
}
 




//const instructions = document.querySelector('.play');

//instructions.onclick = function() {
//   console.log('clicked!');
//  }

/*
function timer(seconds) {
  setInterval(function() {
    seconds++;
  }, 1000); 
}
*/