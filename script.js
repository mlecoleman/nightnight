let seconds = 00;
let outputSeconds = document.getElementById('second');
let buttonStart = document.getElementById('playbtn');
let countInput = document.getElementById('count');
let timeInput = document.querySelector('#time');
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


//Wake Lock Error
if('wakeLock' in navigator) {
  //Wake Lock is supported
  document.getElementById("wakelockalert").innerText = '';
} else {
  document.getElementById("wakelockalert").innerText = 'AUTOMATIC SCREEN LOCK FEATURE IS NOT SUPPORTED IN YOUR BROWSER. To prevent your device from sleeping during play, you will need to manually change your device settings.';
  document.getElementById("time").disabled=true;
  alert("FYI: Some of Night Night's features are not supported by your browser.")
}

//Counter & Play Time/Wake Lock
async function startLock() {
  wakeLock = await navigator.wakeLock.request("screen");
  wakeLockTimeout = setTimeout(reloadPage, +timeInput.value * 60 * 1000);
  console.log("Wake Lock On");
}

async function reloadPage() {
  window.location.reload(true);
}

buttonStart.addEventListener('click', async (e) => {
  startLock();
  clearInterval(Interval);
  Interval = setInterval(startTime, 1000);
  targetDiv.style.display = "none";
})
//

function rememberInput(){
  const magicnumber = localStorage.getItem("magicnumber")
  const playtime = localStorage.getItem("playtime")
  if(magicnumber){
    document.getElementById("count").value = magicnumber
  }
  if(playtime){
    document.getElementById("time").value = playtime
  }
  document.getElementById("count").addEventListener('focusout',afterCount)
  document.getElementById("time").addEventListener('focusout',afterTime)
}

function afterCount(e) {
  //console.log(e.target.value)
  localStorage.setItem("magicnumber",e.target.value)
}
function afterTime(e) {
  //console.log(e.target.value)
  localStorage.setItem("playtime",e.target.value)
}

document.addEventListener("DOMContentLoaded", rememberInput)

//
function startTime(){
  let count = Number(countInput.value);
  seconds++;
  outputSeconds.innerHTML = seconds;
  second.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  if(seconds >= count){
    seconds = 0;
  }
}
