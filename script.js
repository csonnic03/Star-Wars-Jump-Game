var baby_yoda = document.getElementById("baby_yoda");
var storm_trooper = document.getElementById("storm_trooper");
var tie = document.getElementById("tie");

//Function that makes the character jumps
function jump() {
    if(baby_yoda.classList != "animate"){
        baby_yoda.classList.add("animate");
    }
    setTimeout(function(){
        baby_yoda.classList.remove("animate");
    }, 500);
}
//Checks if you are Dead
var checkDead = setInterval(function(){
    //Gets the top value of charcter
    var characterTop = parseInt(window.getComputedStyle(baby_yoda).getPropertyValue("top"));

    //Gets the left value of block
    var blockLeft = parseInt(window.getComputedStyle(storm_trooper).getPropertyValue("left"));
    if(blockLeft<48 && blockLeft<0 && characterTop>=480){
        //Sets animation of block to none
        storm_trooper.style.animation = "none";
        tie.style=animation="none";
        //Changes location of file to the you Lost Page
        window.location = "file://C:/Users/csonn/OneDrive/Desktop/Jump Game/you_lost.html";

    }
}, 10);

//Timer
//Sets the minutes id
var minutesLabel = document.getElementById("minutes");

//Sets the second id
var secondsLabel = document.getElementById("seconds");
//Sets the total seconds
var totalSeconds = 0;
setInterval(setTime, 1000);

//Sets tye time on the canvas
function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

//Returns the value of the timer
function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

//Changes color of timer
var timerLabel = document.getElementById('timer');
timerLabel.style.color = "black";
timerLabel.style.display = "none";
timerLabel.style.display = "inline-block";
