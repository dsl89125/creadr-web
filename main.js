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


$(function() {
  $('#scrollbar').on('click', function(e) {
    e.preventDefault();
    // $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    $('body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});