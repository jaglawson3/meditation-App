$(function(){
  $.get('zen-quote_koan-library.json', function(data){
    koans = data.koans;
    quotes = data.quotes;
    console.log(data);

  })



  $("input.set").click(function() {
      var duration = $('.durationControl').val()
      event.preventDefault();
      alert( "Your duration has been set.");
      localStorage.setItem("duration", duration);
 });

 // $("input.submit").click(function() {
 //     var displayed = $('.focusPoint').val()
 //     sessionStorage.setItem("displays", displayed);
 //
 // });




  randomKoan = function(data){
      var $zenDisplayKoanTitle = $(".zenDisplayKoanTitle");
      var $zenDisplayKoanText = $(".zenDisplayKoanText");
      var $zenDisplayKoanSource = $(".zenDisplayKoanSource");
      var $zenDisplayQuoteText = $(".zenDisplayQuoteText");
      var $zenDisplayQuoteAuthor = $(".zenDisplayQuoteAuthor");
      var $zenDisplayNothing = $(".zenDisplayNothing");

      var randomKoan = koans[Math.floor(Math.random()*koans.length)];

      $zenDisplayNothing.empty();
      $zenDisplayKoanTitle.empty();
      $zenDisplayKoanText.empty();
      $zenDisplayKoanSource.empty();
      $zenDisplayQuoteText.empty();
      $zenDisplayQuoteAuthor.empty();

      $zenDisplayKoanTitle.append(randomKoan.title);
      $zenDisplayKoanText.append(randomKoan.text);
      $zenDisplayKoanSource.append(randomKoan.source);
  };

  randomQuote = function(data){
    var $zenDisplayQuoteText = $(".zenDisplayQuoteText");
    var $zenDisplayQuoteAuthor = $(".zenDisplayQuoteAuthor");
    var $zenDisplayKoanTitle = $(".zenDisplayKoanTitle");
    var $zenDisplayKoanText = $(".zenDisplayKoanText");
    var $zenDisplayKoanSource = $(".zenDisplayKoanSource");
    var $zenDisplayNothing = $(".zenDisplayNothing");

    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

    $zenDisplayNothing.empty();
    $zenDisplayKoanTitle.empty();
    $zenDisplayKoanText.empty();
    $zenDisplayKoanSource.empty();
    $zenDisplayQuoteText.empty();
    $zenDisplayQuoteAuthor.empty();
    $zenDisplayQuoteText.append(randomQuote.text);
    $zenDisplayQuoteAuthor.append(randomQuote.author);
  };

  nothing = function(){
    var $zenDisplayQuoteText = $(".zenDisplayQuoteText");
    var $zenDisplayQuoteAuthor = $(".zenDisplayQuoteAuthor");
    var $zenDisplayKoanTitle = $(".zenDisplayKoanTitle");
    var $zenDisplayKoanText = $(".zenDisplayKoanText");
    var $zenDisplayKoanSource = $(".zenDisplayKoanSource");
    var $zenDisplayNothing = $(".zenDisplayNothing");

      $zenDisplayNothing.empty();
      $zenDisplayKoanTitle.empty();
      $zenDisplayKoanText.empty();
      $zenDisplayKoanSource.empty();
      $zenDisplayQuoteText.empty();
      $zenDisplayQuoteAuthor.empty();
  }

setDisplay = function(selectValue){
    if(selectValue == "koan"){
      randomKoan();
    }
    else if(selectValue == "quote"){
      randomQuote();
    }
    else if(selectValue == "nothing"){
      nothing();
    }
  };

$("input.submit").click(function(event){
  event.preventDefault();
  $focusPoint = $(".focusPoint select")
  setDisplay($focusPoint.val())
  console.log($focusPoint.val())
});

  // $("input.submit").click(function) {
  //   //this is where the code will go to start the timer
  // });

//     var $jumbotron = $('#jumbotron');
//
//     appendRandomKoan = function(data){
//     for (i=0;i<koans.length; i++){
//         console.log(koans[i].source);
//           $jumbotron.append(koans[Math.floor(Math.random()*koans.length)]);
//       }
//     }
//
//     appendRandomQuote = function(data){
//       for (i=0;i<quotes.length; i++){
//           console.log(quotes[i].author);
//             $jumbotron.append(quotes[Math.floor(Math.random()*quotes.length)]);
//       }
//     }
//
//     generateRandomQuote = function(){
//       $jumbotron.append(quotes[Math.floor(Math.random()*quotes.length)]);
//     }
//
//
// });

})
