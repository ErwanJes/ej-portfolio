(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
  });

  // Scroll to top button appear
  var menu = $('#sidebar-wrapper');
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
      if (!menu.hasClass('menu-light-blur-background')) {
        menu.addClass('menu-light-blur-background');
      }
    } else {
      $('.scroll-to-top').fadeOut();
      if (menu.hasClass('menu-light-blur-background')) {
        $('#sidebar-wrapper').removeClass('menu-light-blur-background');
      }
    }
  });

})(jQuery); // End of use strict



// Show & hide post posters (desktop, mobile)
const active_posters_buttons = document.querySelectorAll("a[data-poster]");
  
active_posters_buttons.forEach(el => el.addEventListener('click', event => {
  var data_attribute = event.currentTarget.getAttribute('data-poster');
  if (data_attribute) {
    var target_divs = document.getElementsByClassName("poster_" + data_attribute);

    // hide poster(s)
    const active_posters = document.querySelectorAll(".poster_image");
    active_posters.forEach(element => {
      element.classList.add("hidden");
    });

    // remove 'active' icon
    active_posters_buttons.forEach(element => {
      element.classList.remove("active");
    });

    // show the right poster
    if (target_divs) {
      target_divs[0].classList.remove("hidden");
    }

    // active icon
    event.currentTarget.classList.add("active");
  }

  event.preventDefault();
  event.stopPropagation();
}));

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);


// Submit quote form
function onTypeformSubmit(data) {
  window.location.href = "/thanku/";
}

// Manage GDPR

var base_url = window.location.origin;

glowCookies.start('fr', {
  hideAfterClick: true,
  policyLink: base_url + '/pages/legal.html',
  acceptBtnBackground: '#4d8579',
  analytics: 'UA-9257927-1',
  facebookPixel: '322069842687176',
});
