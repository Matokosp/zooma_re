// // GIF RESET
//
// var img = document.createElement("img"),
//     imageUrl = "#";
// img.src = imageUrl;
// document.body.appendChild(img);
//
// window.restartAnim = function () {
//     img.src = "";
//     img.src = imageUrl;
// }


// TEXT CHANGE

(function() {

    var quoteOne = $(".quote_one");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quoteOne.eq(quoteIndex % quoteOne.length)
            .fadeIn(1500)
            .delay(1500)
            .fadeOut(1500, showNextQuote);
    }

    showNextQuote();

})();

(function() {

    var quoteTwo = $(".quote_two");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quoteTwo.eq(quoteIndex % quoteTwo.length)
            .fadeIn(1500)
            .delay(1500)
            .fadeOut(1500, showNextQuote);
    }

    showNextQuote();

})();

// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
// ].reverse();

// textSequence(0);
// function textSequence(i) {
//
//   if (messages.length > i) {
//     setTimeout(function() {
//       document.getElementById("message").innerHTML = messages[i];
//       textSequence(++i);
//     }, 2000);
//   } else if (messages.length == i) {
//     textSequence(0);
//   }
//
//   }

// function nextMsg() {
//     // if (messages.length != 0) {
//       $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     // } else {
//     //
//     // }
// };
//
// $('#message').hide();
// nextMsg();




  // PROYECTS HOVER

  
