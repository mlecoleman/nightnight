

//Counter

let seconds = 00;
let outputSeconds = document.getElementById('second');
let buttonStart = document.getElementById('playbtn');
let Interval 

buttonStart.addEventListener('click', () => {
  clearInterval(Interval);
  Interval = setInterval(startTime, 1000); 
})

function startTime(){
  seconds++;
  outputSeconds.innerHTML = seconds;
}
 

//Dropdown window
const targetDiv = document.getElementById("instructions");
const btn = document.getElementById("howto");
btn.onclick = function () {
  if (targetDiv.style.display !== "block") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
};


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