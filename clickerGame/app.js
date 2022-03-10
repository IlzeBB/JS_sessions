var click = 0;
var outOfTime = false;
function countNum() {
  if (!outOfTime) {
    click += 1;
    document.getElementById("score").innerHTML = click;
  }
}
var time = 60; 
var timer = setInterval(function () {
  time--;
  document.getElementById("timer").innerHTML = time + "s";
  if (time == 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Game is over";
   outOfTime = true;
    
  }
}, 1000);
