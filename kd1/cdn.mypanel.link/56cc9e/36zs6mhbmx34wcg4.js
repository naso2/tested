$(document).ready(function () {
  
   new WOW().init();
  
  
  jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
 });

   
 $('#testimonial').owlCarousel({
     loop:true,
     margin:10,
     rtl: true,
     autoplay:true,
     autoplayTimeout:4000,
     responsive:{
       0:{
         items:1
       },
       600:{
         items:2
       },
       1000:{
          items:3
       }
    }
  });

  $('#sale-card').owlCarousel({
     loop:true,
     margin:10,
     rtl: true,
     dots:false,
     nav:true,
     autoplay:true,
     autoplayTimeout:4000,
     margin:30,
      
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive:{
        0:{
           items:2,
        },
       600:{
           items:3,
            dots:true
       },
       1000:{
           items:4
       }
    }
    });
});
