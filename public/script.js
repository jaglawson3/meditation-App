$(function() {
  $.get("https://zen.g15.xyz/db").done(function(data) {
    koans = data.koans;
    quotes = data.quotes;
    console.log(data);
  }).fail(function() {
    $.get("zen-quote_koan-library.json", function(data) {
      koans = data.koans;
      quotes = data.quotes;
      console.log(data);
    });
  });

  $zenDisplayKoanTitle = $(".zenDisplayKoanTitle");
  $zenDisplayKoanText = $(".zenDisplayKoanText");
  $zenDisplayKoanSource = $(".zenDisplayKoanSource");
  $zenDisplayQuoteText = $(".zenDisplayQuoteText");
  $zenDisplayQuoteAuthor = $(".zenDisplayQuoteAuthor");

  randomKoan = function(data) {
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
    $zenDisplayKoanTitle.empty();
    $zenDisplayKoanText.empty();
    $zenDisplayKoanSource.empty();
    $zenDisplayQuoteText.empty();
    $zenDisplayQuoteAuthor.empty();
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
