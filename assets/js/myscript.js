// WINDOW VH

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

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
            .fadeIn(600)
            .delay(600)
            .fadeOut(600, showNextQuote);
    }

    showNextQuote();

})();

(function() {

    var quoteTwo = $(".quote_two");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quoteTwo.eq(quoteIndex % quoteTwo.length)
            .fadeIn(600)
            .delay(600)
            .fadeOut(600, showNextQuote);
    }

    showNextQuote();

})();

(function() {

    var quoteTwo = $(".quote_three");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quoteTwo.eq(quoteIndex % quoteTwo.length)
            .fadeIn(600)
            .delay(600)
            .fadeOut(600, showNextQuote);
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

var x = window.matchMedia("(max-width: 999px)");
var y = window.matchMedia("(min-width: 1000px)");

  function proyectInfoResponsive(x) {
    if (x.matches) { // If media query matches

      var proyectInfo = $(".proyects_item_info");
      var proyectSection = $(".proyects_item");

      $(proyectSection).on('click', function(e){
        $(this).children(proyectInfo).toggleClass('proyects_item_info-reveal');
        // e.stopPropagation();
      })
    }
  }

  function proyectInfo(y) {
    if (y.matches) { // If media query matches

      var proyectInfo = $(".proyects_item_info");
      var proyectSection = $(".proyects_item");

      $(proyectSection).on('hover', function(e){
        $(this).children(proyectInfo).toggleClass('proyects_item_info-reveal');
        e.stopPropagation();
      })
    }
  }

  proyectInfoResponsive(x) // Call listener function at run time
	x.addListener(proyectInfoResponsive) // Attach listener function on state changes
  proyectInfo(y) // Call listener function at run time
  x.addListener(proyectInfo) // Attach listener function on state changes
