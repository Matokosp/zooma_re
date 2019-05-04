

var checker = true;
var boton1 = document.getElementById("menuicon");
var boton2 = document.getElementById("hamburger");



function desplazar(){
    targetLeft = checker ? "158px" : "20px";
    targetRight = checker ? "130px" : "20px";
    targetMiddle = checker ? "148px" : "20px";
    $("#hamburger").animate({left: targetLeft},400);
    $("#menuicon2").animate({left: targetRight},400);
    $("#menuicon3").fadeToggle(400);
    $("#menuicon3").animate({left: targetMiddle},{queue: false},400);
    $('.menu-hide').toggleClass('show');
    checker ? (checker = false) : (checker = true);
}



  $(".nav-menu-res").click(function () {
  $(document).ready(function(){
  desplazar();
});
});



    $(document).ready(function(){
    window.addEventListener('click', function(e){
      var menu= document.getElementsByClassName("menu-hide show");
   if (e.target.className != "menu-hide show" && checker===false && e.target!= boton1 && e.target != boton2) {
        desplazar();

     }

    })
})
