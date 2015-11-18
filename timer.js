$(function(){

  $("input.set").click(function() {
    event.preventDefault();
    var duration = parseInt($('.durationControl').val());
    //need to prevent user input value from exceeding the max set in the input, right now for example you can enter 655 minutes but you can only use the arrows up to 60


    if(duration == 0){
          alert("Duration can be set in minutes only.")
    }

    else {
          alert( "Your duration has been set.");
          sessionStorage.setItem("duration", duration);
    }
  });

  //$("input.set").click(function() {
  //code goes here
  //}

  function timerDisplay(minutes, seconds){
      var timer = document.getElementById("timer");
      var minutesDisplay = minutes + " minutes";
      var secondsDisplay = seconds + " seconds";

      timer.innerText = minutesDisplay + " : " + secondsDisplay;
  };

  function countDown(){
      var minutes = parseInt(sessionStorage.getItem("duration"));
      console.log(minutes);
      var seconds = 0;
          if(typeof interval != "undefined"){
            clearInterval(interval);
          }
      interval = setInterval(function(){
            //user can still input numbers larger than max of 60 set in html, also what if user enter less than 1 minute, it still starts at 59 seconds
          if(seconds == 0 && minutes == 0){
            clearInterval(interval);
            audio = new Audio('buddhistBell.wav');
            audio.play();
            //this is where we will put the stuff that plays the bell sound
          }
          else if(minutes > 60){
              minutes = 60;
          }
          else if (seconds == 0){
            minutes--;
            seconds = 59;
          }
          else{
            seconds--;
          }
          timerDisplay(minutes, seconds);
          console.log(seconds);
      }, 1000)
    };

    $("input.start").click(function(event){
      event.preventDefault();
      countDown();
    });
});
