(function($) { 
"use strict";

/*================================================================= 
    pre loader 
==================================================================*/
$('.js-preloader').preloadinator({
  animation: 'fadeOut',
  animationDuration: 400
});


$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});




/*================================================================= 
    Partner carousel
==================================================================*/
const swiper2 = new Swiper('.partnerCarousel', {
  // Optional parameters
  breakpoints: {
    1200:{
      slidesPerView: 6,
    },
    992:{
      slidesPerView: 4, 
    },
    576:{
      slidesPerView: 3
    },
    320:{
      slidesPerView: 2
    },
   },
  //slidesPerView: 6,
  spaceBetween: 24,
  loop: true,
  autoplay: {
     delay: 5000,
   },

});






/*================================================================= 
    Navbar fixed top
==================================================================*/

$(document).ready(function () {

    var menu = $('.site-header nav');
    var origOffsetY = $('.hero-area').height();

    function scroll() {
        if ($(window).width() < 1200 && $(window).scrollTop() >= origOffsetY) {
            $('.site-header nav').addClass('fixed-top');
            
        } else {
            $('.site-header nav').removeClass('fixed-top');
           
        }
    }

    document.onscroll = scroll;

});


/*================================================================= 
    Contact form 
==================================================================*/
$(function() {
    // Here is the form
    var form = $('#fungi-contact');

    // Getting the messages div
    var formMessages = $('.form-message p');


    // Setting up an event listener for the contact form
  $(form).submit(function(event) {
      // Stopping the browser to submit the form
      event.preventDefault();
      
      // Serializing the form data
    var formData = $(form).serialize();

    // Submitting the form using AJAX
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    }).done(function(response) {
      
        // Making the formMessages div to have the 'success' class
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Setting the message text
        $(formMessages).text(response);

        // Clearing the form after successful submission 
        $('#inputName').val('');
        $('#inputEmail').val('');
        $('#inputPhone').val('');
        $('#inputMessage').val('');
    }).fail(function(data) {
      
        // Making the formMessages div to have the 'error' class
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Setting the message text
        if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
    });

  });

});

/*================================================================= 
    Animating numbers
==================================================================*/
$('.counter').counterUp({
    delay: 10,
    time: 3000
});


/*================================================================= 
    Progress bar animation
==================================================================*/
var waypoint = new Waypoint({
  element: document.getElementById('skill-section'),
  handler: function() {
    $('.progress .progress-bar').css("width",function() {
      return $(this).attr("aria-valuenow") + "%";
  })
  },
  //offset: 'bottom-in-view',
  offset: 700,
})


/*================================================================= 
    Animate on scroll initialization
==================================================================*/
AOS.init({
  once: true,
});

})(jQuery);



