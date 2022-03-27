//Dropdown Div w/ instructions & settings options
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
  let count = Number(countInput.value);
  seconds++;
  outputSeconds.innerHTML = seconds;
  second.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  if(seconds >= count){
    seconds = 0;
  }
}
 
//Play time user input & Wake Lock

let wakeLock = null
 
if('wakeLock' in navigator) {
  //Wake Lock is supported
  document.getElementById("wakelockalert").innerText = '';
} else {
  document.getElementById("wakelockalert").innerText = 'WAKE LOCK IS NOT SUPPORTED - PLEASE USE A DIFFERENT BROWSER';
}








/*const acquireLock = async () => {
  try {
    wakeLock = await navigator.wakeLock.request('screen')
  } catch (err) {
    console.log(`${err.name}, ${err.message}`)
  }
}

function tryKeepScreenAlive(minutes) {
  navigator.wakeLock.request("screen").then(lock => {
    setTimeout(() => lock.release(), minutes * 60 * 1000);
  });
}

tryKeepScreenAlive(10);*/

