let seconds = 00;
let outputSeconds = document.getElementById('second');
let buttonStart = document.getElementById('playbtn');
let countInput = document.getElementById('count');
let timeInput = document.getElementById('time');
let wakeLock = null;
let Interval

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

//Counter & Wake Lock

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



/*
function acquireLock(minutes){
  minutes = Number(timeInput.value);
  navigator.wakeLock.request("screen").then(lock => {
    setTimeout(() => lock.release(), minutes * 60 * 1000);
  });
  console.log ('wake lock on');
}
*/

//Wake Lock Alerts 
if('wakeLock' in navigator) {
  //Wake Lock is supported
  document.getElementById("wakelockalert").innerText = '';
} else {
  document.getElementById("wakelockalert").innerText = 'WAKE LOCK IS NOT SUPPORTED PLEASE USE A DIFFERENT BROWSER';
  document.getElementById("time").disabled=true;
  alert("Some of Night Night's features are not supported by your browser!  For the best experience use Chrome or Edge.")
}

async function startLock() {
  wakeLock = await navigator.wakeLock.request("screen");
  console.log("wake Lock is on");
  
}



