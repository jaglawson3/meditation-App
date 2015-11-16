$(function(){
  $.get('zen-quote_koan-library.json', function(data){
    koans = data.koans;
    quotes = data.quotes;
    console.log(data);

  })



  $("input.set").click(function() {
      var duration = $('.durationControl').val()
      alert( "Your duration has been set.");
      localStorage.setItem("duration", duration);
 });

 // $("input.submit").click(function() {
 //     var displayed = $('.focusPoint').val()
 //     sessionStorage.setItem("displays", displayed);
 //
 // });


  randomKoan = function(data){
      var $zenDisplay = $(".zenDisplay");
      var randomKoan = koans[Math.floor(Math.random()*koans.length)]
      $zenDisplay.append(randomKoan.title + randomKoan.text + randomKoan.source);
      $zenDisplay.empty();
      $zenDisplay.append(randomKoan.title + randomKoan.text + randomKoan.source);
  };

  randomQuote = function(data){
      var $zenDisplay = $(".zenDisplay");
      var randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
      $zenDisplay.append(randomQuote.text + randomQuote.author);
      $zenDisplay.empty();
      $zenDisplay.append(randomQuote.text + randomQuote.author);
  };

  nothing = function(){
      var $zenDisplay = $(".zenDisplay");
      $zenDisplay.empty();
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
