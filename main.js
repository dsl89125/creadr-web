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


$(document).ready(function(){
    $('#fireUp').click(function(){
      var name1 = $('#exampleInputName2').val();
      var email = $('#exampleInputEmail1').val();
      var response = $('#exampleTextarea').val();

    $.post("https://script.google.com/macros/s/AKfycbz-N82FYoSxrV-SGHtEvMSYjutHn-QDrPUV3K5VFpCrfhLXMk61/exec",
        {       
          name: name1,
          email: email,
          response:response
        },
        function(data,status){
            alert("Thank you for your feedback " + name1 + "\nSubmit Status Is: " + status);
            $( '.form-group' ).each(function(){this.reset();});//clear form after submit
        });
    });
});


// $(document).ready(function(){
//     $('#fireUp').click(function(){
//       var name1 = $('#exampleInputName2').serializeArray();
//       var email = $('#exampleInputEmail1').serializeArray();
//       var response = $('#exampleTextarea').serializeArray();

//     $.ajax(

//       url:"https://script.google.com/macros/s/AKfycbz-N82FYoSxrV-SGHtEvMSYjutHn-QDrPUV3K5VFpCrfhLXMk61/exec",
//        type:'POST' 
//         data:{       
//           name: name1,
//           email: email,
//           response:response },
//         success: {
//             alert("Thank you for your feedback " + name1 + "\nSubmit Status Is: " + status);
          
//     });
// });

