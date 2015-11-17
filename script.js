$(function() {
  $.get('zen-quote_koan-library.json', function(data) {
    koans = data.koans;
    quotes = data.quotes;
    console.log(data);

  })

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

  $("input.submit").click(function(event) {
    event.preventDefault();
    $focusPoint = $(".focusPoint select")
    setDisplay($focusPoint.val())
    console.log($focusPoint.val())
  });
});
