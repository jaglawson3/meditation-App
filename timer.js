// the date when the countdown has to end yyyy, mm(starting from 0 not from 1), dd, hh, mm, ss
// for months 0 == january, 1 == february
start = function(){

var duration = $('.durationControl').val()
//
// if(duration != 0){
//   countdown = $('#countdown'),
//   hours = countdown.find('.hours span'),
//   minutes = countdown.find('.minutes span'),
//   seconds = countdown.find('.seconds span'),
//   setTimer;

setTimer = function () {
//need to figure how to link these logic with input from furationControl

  event.preventDefault();

  if(duration != 0) {

  d = Math.floor(time_left / 86400);
  time_left -= d * 86400;

  h = Math.floor(time_left/3600);
  time_left -= h*3600;

  m = Math.floor(time_left/60);
  time_left -= m*60;

  days.html(d);
  hours.html(h);
  minutes.html(m);
  seconds.html(Math.floor(time_left));



  var timeLeft = ((Days > 0) ? Days + " days " : "") + hours + ":" + seconds)

  console.log(timeLeft)
  //     Timer.innerHTML = TimeStr;

};
};
$("input.start").click(function(event){
  Timer.innerHTML = TimeStr;
});

// function timer() {
//   var buddhistBell = new Audio("buddhistBell.wav");
//   if (TotalSeconds <= 0) {
//     alert("You have completed your meditation")
//     buddhistBell.play();
// }
//
// TotalSeconds -= 1;
// UpdateTimer()
// window.setTimeout("Tick()", 1000);
// }
//
// function UpdateTimer() {
//     var Minutes = Math.floor(Seconds / 60);
//     Seconds -= Minutes * (60);
//     var TimeStr = ((Days > 0) ? Days + " days " : "") + LeadingZero(Minutes) + ":" + LeadingZero(Seconds)
//     Timer.innerHTML = TimeStr;
// }
//
// function LeadingZero(Time) {
//     return (Time < 10) ? "0" + Time : + Time;
// }
//
// var buddhistBell = new Audio("buddhistBell.wav"); // buffers automatically when created
// buddhistBell.play();
