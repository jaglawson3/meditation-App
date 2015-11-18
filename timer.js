$(function(){
  function timerDisplay(minutes, seconds){
      var timer = document.getElementById("timer");
      var minutesDisplay = minutes + "minutes";
      var secondsDisplay = seconds + "seconds";

      timer.innerText = minutesDisplay + ":" + secondsDisplay;
  };

  function countDown(){
      var minutes = parseInt(sessionStorage.getItem("duration"));
      console.log(minutes);
      var seconds = 0;
      // var timer = getElementByClassName("timer");
      interval = setInterval(function(){
          if(seconds == 0 && minutes == 0){
            clearInterval(interval);
            return;
            //this is where we will put the stuff that plays the bell sound
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
