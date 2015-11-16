function timer() {
  var buddhistBell = new Audio("buddhistBell.wav");
  if (TotalSeconds <= 0) {
    alert("You have completed your meditation")
    buddhistBell.play();
}

TotalSeconds -= 1;
UpdateTimer()
window.setTimeout("Tick()", 1000);
}

function UpdateTimer() {
    var Minutes = Math.floor(Seconds / 60);
    Seconds -= Minutes * (60);
    var TimeStr = ((Days > 0) ? Days + " days " : "") + LeadingZero(Minutes) + ":" + LeadingZero(Seconds)
    Timer.innerHTML = TimeStr;
}

function LeadingZero(Time) {
    return (Time < 10) ? "0" + Time : + Time;
}

var buddhistBell = new Audio("buddhistBell.wav"); // buffers automatically when created
buddhistBell.play();
