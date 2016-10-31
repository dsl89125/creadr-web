  //navbar color change when scroll 
  //this need to be impproved. the else statement set color to original color so even when move back to top nav color don't change back. need to add 
  //one more statement to set initial color to something... also can add animate to graduatly change color. 


$(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 700) { // check if user scrolled more than 50 from top of the browser window
          $("#navbarwhole").css("background-color", "rgba(0,0,0,0.85)"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $("#navbarwhole").css("background-color", "rgba(240, 240, 240, 0.55)"); // if not, change it back to transparent
        }
      });
    });


var offset = $(window).scrollTop() - actualBlock.offset().top,
  windowHeight = $(window).height();
 
if( offset >= -windowHeight && offset <= 0 ) {
  // section entering the viewport
  translateY = (-offset)*100/windowHeight;
    scale = 1;
  opacity = 1;
} else if( offset > 0 && offset <= windowHeight ) {
  //section leaving the viewport 
    scale = (1 - ( offset * 0.3/windowHeight));
  opacity = ( 1 - ( offset/windowHeight) );
  translateY = 0;
  boxShadowBlur = 40*(offset/windowHeight);
}