$(function() {

  $("input.set").click(function() {
    event.preventDefault();
    var duration = $('.durationControl').val();
    if (duration == 0) {
      alert("Duration is set in minutes only.")
    } else {
      alert("Your duration has been set.");
      sessionStorage.setItem("duration", duration);
    }
  });

  function timerDisplay(minutes, seconds) {
    var timer = document.getElementById("timer");
    var minutesDisplay = minutes + " minutes";
    var secondsDisplay = seconds + " seconds";

    timer.innerText = minutesDisplay + " : " + secondsDisplay;
  };

  function countDown() {
    var minutes = parseInt(sessionStorage.getItem("duration"));
    console.log(minutes);
    var seconds = 0;
    if (typeof interval != "undefined") {
      clearInterval(interval);
    }
    interval = setInterval(function() {
      if (seconds == 0 && minutes == 0) {
        clearInterval(interval);
        audio = new Audio('buddhistBell.wav');
        audio.play();

      } else if (minutes > 60) {
        minutes = 60;
      } else if (seconds == 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      timerDisplay(minutes, seconds);
      console.log(seconds);
    }, 1000)
  };

  $("input.start").click(function(event) {
    event.preventDefault();
    countDown();
  });
});
