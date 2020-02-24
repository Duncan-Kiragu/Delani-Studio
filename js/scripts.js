 $(document).ready(function(){
   $("#img1").click(function(){
        $("#design").toggle()
     });

    $("#img2").click(function(){
        $("#dev").toggle()
     });

    $("#img3").click(function(){
        $("#product").toggle()
     });
  
    $("form").submit (function(event) {
        var name=$("#contact-name").val();
        alert("Thank you"+ name +"for subscribing");
     });

    $('.animation').hide();
        $('.im').animate({
            opacity:1
     });

    $('.im').hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.animation').fadeIn();

       }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.animation').fadeOut();
       });

    $('.layering').hide();
        $('.im').animate({
            opacity:1
        });

     $('.im').hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.layering').fadeIn();

      }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.layering').fadeOut();
      });

     $('.mighty').hide();
        $('.im').animate({
            opacity:1
            
    });

    $('.im').hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.mighty').fadeIn();

       }, function() {
         $(this).stop().animate({opacity:1},500)
         $('.mighty').fadeOut();
      });
    
      $('.grey').hide();
      $('.im').animate({
        opacity:1
        
      });

      $('.im').hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.grey').fadeIn();

        }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.grey').fadeOut();
     });

    $('.day').hide();
    $('.im').animate({
        opacity:1
        
    });

    $('.im').hover(function() {
    $(this).stop().animate({opacity:.4},200);
    $('.day').fadeIn();

    }, function() {
    $(this).stop().animate({opacity:1},500)
    $('.day').fadeOut();
    });

    $('.buttons').hide();
    $('.im').animate({
        opacity:1
        
     });

    $('.im').hover(function() {
        $(this).stop().animate({opacity:.4},200);
        $('.buttons').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.buttons').fadeOut();
    });
     $('.burnt').hide();
     $('.im').animate({
         opacity:1

     });

     $('.im').hover(function() {
     $(this).stop().animate({opacity:.4},200);
     $('.burnt').fadeIn();

      }, function() {
      $(this).stop().animate({opacity:1},500)
      $('.burnt').fadeOut();
      });

      $('.giraffe').hide();
      $('.im').animate({
          opacity:1

      });

      $('.im').hover(function() {
      $(this).stop().animate({opacity:.4},200);
      $('.giraffe').fadeIn();

      }, function() {
      $(this).stop().animate({opacity:1},500)
      $('.giraffe').fadeOut();
      });
      });
