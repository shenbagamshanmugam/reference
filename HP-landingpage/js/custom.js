
$( document ).ready(function() {
// Sidebar Toggle.
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });


      $("#newsOwl").owlCarousel(
        {
          items:3,
          loop:true,
          margin:10,
          merge:false,
          autoWidth:true,
          nav:true,
          navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
          responsiveClass:true
          

        });

        
        $('#exploreCarousel, #mostusedCarousel').carousel({
          interval: 500000
        })

});

