// 1) *When click on START timer will start from 00 seconds until the user click STOP
// 2) *When click on START again, it will start from the same time it was stopped last time
// 3) *When click on RESET, the timer will be reset to the 00:00:00 time

/*Initial declration of variables*/
let hours   = 0;
let minutes = 0;
let seconds = 0;

let countdownDisplay = document.querySelector('.countdown_timer');

let newHours = 0;
let newMinutes = 0;
let newSeconds = 0 ;

let interval = null;
let clockStart= "false";


let startBtn = document.getElementById("start");
let resetBtn  = document.getElementById("reset");

/*logic to increment timer value*/

function timer(){

seconds++;

if(seconds/60 === 1){

    seconds = 0;
    minutes++

    if(minutes/60 === 1){
        minutes = 0;
        hours++;

    }

  }

  /*logic to display clock in two digits*/

  if(seconds < 10){
      newSeconds = "0" + seconds;
  }else{
      newSeconds = seconds;
  }
  
  if(minutes < 10){
    newMinutes = "0" + minutes;
   }else{
    newMinutes = seconds
   }

     
  if(hours < 10){
    newHours = "0" + minutes;
   }else{
    newHours = hours;
   }

   /* display new time values */
    countdownDisplay.innerHTML = `${newHours}:${newMinutes}:${newSeconds}`;
}

/* function when user click on start again, it will start from the same time it was stopped last time*/

startBtn.addEventListener('click', function() {
    if(clockStart === "false"){
        interval = window.setInterval(timer,1000);
        startBtn.innerHTML="STOP"
        clockStart="true";
    }
    else
    {
        window.clearInterval(interval);
        startBtn.innerHTML="START"
        clockStart="false";
    }
})

/*function to reset the watch */

resetBtn.addEventListener('click',function(){

    window.clearInterval(interval);
    hours   = 0;
    minutes = 0;
    seconds = 0;
    countdownDisplay.innerHTML = "00:00:00";
    startBtn.innerHTML = "START"

})



