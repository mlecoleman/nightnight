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