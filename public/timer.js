$(function() {

  $("input.set").click(function() {
    event.preventDefault();
    var duration = $('.durationControl').val();
    if (duration == 0) {
      alert("Duration must be set in minutes.")
    } else {
      alert("Your duration is set. Press start to begin your meditation time.");
      sessionStorage.setItem("duration", duration);
    }
  });

  function timerDisplay(minutes, seconds) {
    var timer = document.getElementById("timer");
    var minutesDisplay = minutes + " minutes";
    var secondsDisplay = seconds + " seconds remaining";

    timer.innerText = minutesDisplay + " : " + secondsDisplay;
  };

  $zenDisplayKoanTitle = $(".zenDisplayKoanTitle");
  $zenDisplayKoanText = $(".zenDisplayKoanText");
  $zenDisplayKoanSource = $(".zenDisplayKoanSource");
  $zenDisplayQuoteText = $(".zenDisplayQuoteText");
  $zenDisplayQuoteAuthor = $(".zenDisplayQuoteAuthor");

  function noMoreText(){
    $zenDisplayQuoteText.empty();
    $zenDisplayQuoteAuthor.empty();
    $zenDisplayKoanTitle.empty();
    $zenDisplayKoanText.empty();
    $zenDisplayKoanSource.empty();
  }

  function countDown() {
    var minutes = parseInt(sessionStorage.getItem("duration"));
    var audio = document.getElementById("buddhistBell");
    console.log(minutes);
    var seconds = 0;
    if (typeof interval != "undefined") {
      clearInterval(interval);
    }
    interval = setInterval(function() {
      if (seconds == 0 && minutes == 0) {
          clearInterval(interval);
          audio.play();
          noMoreText();
          timer.empty();


      } else if (minutes > 60) {
          minutes = 60;
      }else if (seconds == 0) {
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
