$(document).ready(function() 
{
        var winWidth = $(window).width();
        if(winWidth<1000)
        {
          $(".navbar-collapse.collapse ul").css("background-color", "#bedbbb");
        }
        
        // Transition effect for navbar 
        $(window).scroll(function() 
        {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 500) 
          { 
              $('.navbar').addClass('solid');
          } 
          else 
          {
              $('.navbar').removeClass('solid');
          }
        });

        
        $(window).resize(function()
        {
        var winWidth = $(window).width();
        console.log(winWidth);
        var isVisible = $( ".collapse" ).is( ":visible" );
        console.log(isVisible);
        if(isVisible && winWidth>1000)
          {
            console.log("Larger Screen");
            $(".navbar-collapse.collapse ul").css("background-color", "transparent");
            $(".navbar-collapse.collapse .nav-link").css("color", "white"); 
          }
          if(!isVisible || winWidth<1000)
          {
            console.log("Smaller screen");
            $(".navbar-collapse.collapse ul").css("background-color", "#bedbbb"); //d0e8f2
            $(".navbar-collapse.collapse .nav-link").css("color", "black");
          }

      });

      $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
});