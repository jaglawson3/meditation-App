$(function() {
  $.get('zen-quote_koan-library.json', function(data) {
    var koans = data.koans;
    var quotes = data.quotes;
    console.log(data);
  })

var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if(this.readyState === 4 && this.status == 200){
      console.log(JSON.parse(this.responseText));
    };
  };

xhr.open('GET', '/zen_quote_koan-library.json');

xhr.send();

var xhr2 = new XMLHttpRequest();

  xhr2.onreadystatechange = function() {
    if(this.readyState === 4 && this.status == 200){
      var quoteKoan = JSON.parse(this.responseText);
      var koans = data.koans;
      var quotes = data.quotes;
      console.log(quoteKoan.data.koans, quoteKoan.data.quotes)
      };
    };


  xhr2.open('GET', 'http://zen.g15.xyz/db.json');

  xhr2.send();

  randomKoan = function(data) {

    var $zenDisplayKoanTitle = $(".zenDisplayKoanTitle");
    var $zenDisplayKoanText = $(".zenDisplayKoanText");
    var $zenDisplayKoanSource = $(".zenDisplayKoanSource");
    var $zenDisplayQuoteText = $(".zenDisplayQuoteText");
    var $zenDisplayQuoteAuthor = $(".zenDisplayQuoteAuthor");
    var randomKoan = koans[Math.floor(Math.random() * koans.length)];
    $zenDisplayKoanTitle.empty();
    $zenDisplayKoanText.empty();
    $zenDisplayKoanSource.empty();
    $zenDisplayQuoteText.empty();
    $zenDisplayQuoteAuthor.empty();
    $zenDisplayKoanTitle.append(randomKoan.title);
    $zenDisplayKoanText.append(randomKoan.text);
    $zenDisplayKoanSource.append(randomKoan.source);
  };

  randomQuote = function(data) {

    var $zenDisplayKoanTitle = $(".zenDisplayKoanTitle");
    var $zenDisplayKoanText = $(".zenDisplayKoanText");
    var $zenDisplayKoanSource = $(".zenDisplayKoanSource");
    var $zenDisplayQuoteText = $(".zenDisplayQuoteText");
    var $zenDisplayQuoteAuthor = $(".zenDisplayQuoteAuthor");
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $zenDisplayKoanTitle.empty();
    $zenDisplayKoanText.empty();
    $zenDisplayKoanSource.empty();
    $zenDisplayQuoteText.empty();
    $zenDisplayQuoteAuthor.empty();
    $zenDisplayQuoteText.append(randomQuote.text);
    $zenDisplayQuoteAuthor.append(randomQuote.author)
  };

  nothing = function() {
    var $zenDisplay = $(".zenDisplay");
    $zenDisplay.empty();
  }

  setDisplay = function(selectValue) {

    if (selectValue == "koan") {
      randomKoan();
    } else if (selectValue == "quote") {
      randomQuote();
    } else if (selectValue == "nothing") {
      nothing();
    }
  };

  $("input.clear").click(function() {
  event.preventDefault();
  $('.durationControl').val("");
  sessionStorage.clear()
  });

  $("input.submit").click(function(event) {
    event.preventDefault();
    $focusPoint = $(".focusPoint select")
    setDisplay($focusPoint.val())
    console.log($focusPoint.val())
  });
});
