$(document).ready(function(){
  // SKILLS BAR JS
  var offsetTop = $('#skills').offset().top;
  $(window).scroll(function() {
  var height = $(window).height();
  if($(window).scrollTop()+height > offsetTop) {
    jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },2000);
    });
  }
  });

  $(".js--section-about").waypoint(function (t) {
    "down" == t ? $("header").addClass("sticky") : $("header").removeClass("sticky")
  });

  // Typed Js
  var typed = new Typed('.animate', {
    strings: ["Web Desinger","Web Developer"],
    typeSpeed:60,
    backSpeed:50,
    loop:true
});

  // COUNTER UP JS
  $(".counter").counterUp({
    time: 1000,
    delay: 10
  });

  // MIXITUP JS
  var mixer = mixitup('.portfolio_item_container');

// OWL-CAROUSEL JS
$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  margin: 30,
  animateIn: 'fadeIn',
  nav: false,
  autoplayHoverPause: false,
  responsive: {
      0: {
          items: 1,
      },
      480: {
          items: 1,
      },
      768: {
          items: 3,
      },
      992: {
          items: 3,
      },
      1024: {
          items: 3,
      }
    }
  
});
  
});