
$(document).ready(function(){
   $('.hide1').on({
      mouseenter: function(){         
          $('.hide_size1').show('slow');
      },
       mouseleave: function(){
        $('.hide_size1').hide('slow');
      },
   });
    
    $('.hide2').on({
      mouseenter: function(){
     $('.hide_size2').show('slow');
      },
       mouseleave: function(){
     $('.hide_size2').hide('slow');
      },
   });
    
    $('.hide3').on({
      mouseenter: function(){
          $('.hide_size3').show('slow');
      },
       mouseleave: function(){
          $('.hide_size3').hide('slow');
      },
   });
    
});