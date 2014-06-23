
/* Code for creating a Parallax effect */
$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                            
        var yPos = -($window.scrollTop() / $scroll.data('speed'));
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });   
      }); // end window scroll
   });  // end section function
}); // close out script

/* Create HTML5 element for IE */
document.createElement("section");


/* Code for making sure the Carousel works */
  <!-- This is javascript that will turn the carousel on and tell it to slide at a certain interval-->
    <script type='text/javascript'>
    $(document).ready(function() {
         $('.carousel').carousel({
             interval: 5000
         })
    });    
    </script>



/* Code for the Modal Page */
/* source: http://www.bootply.com/71401# */

$('.thumbnail').click(function(){
    $('.modal-body').empty();
    var title = $(this).parent('a').attr("title");
    $('.modal-title').html(title);
    $($(this).parents('div').html()).appendTo('.modal-body');
    $('#myModal').modal({show:true});
});