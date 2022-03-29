let seconds = 00;
let outputSeconds = document.getElementById('second');
let buttonStart = document.getElementById('playbtn');
let countInput = document.getElementById('count');
//let timeInput = document.getElementById('time');
const timeInput = document.querySelector('#time');
let wakeLockTimeout;
let wakeLock;
let Interval;

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

//Counter & Play Time/Wake Lock

async function startLock() {
  wakeLock = await navigator.wakeLock.request("screen");
  wakeLockTimeout = setTimeout(releaseLock, +timeInput.value * 60 * 1000);
  console.log("Wake Lock On");
}

async function releaseLock() {
  clearTimeout (wakeLockTimeout);
  await wakeLock.release();
  console.log("Wake Lock Off");
}

buttonStart.addEventListener('click', async (e) => {
  startLock();
  clearInterval(Interval);
  Interval = setInterval(startTime, 1000);
  targetDiv.style.display = "none";
})

/*buttonStart.addEventListener('click', () => {
  clearInterval(Interval);
  Interval = setInterval(startTime, 1000);
  targetDiv.style.display = "none";
})*/

function startTime(){
  let count = Number(countInput.value);
  seconds++;
  outputSeconds.innerHTML = seconds;
  second.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  if(seconds >= count){
    seconds = 0;
  }
}

//Wake Lock 
if('wakeLock' in navigator) {
  //Wake Lock is supported
  document.getElementById("wakelockalert").innerText = '';
} else {
  document.getElementById("wakelockalert").innerText = 'WAKE LOCK IS NOT SUPPORTED PLEASE USE A DIFFERENT BROWSER';
  document.getElementById("time").disabled=true;
  alert("Some of Night Night's features are not supported by your browser!  For the best experience use Chrome or Edge.")
}
