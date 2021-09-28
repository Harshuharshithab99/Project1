$(function(){

 var imgs = ['MyImages/Index - 1.jpg',
    'MyImages/Index - 2.jpg',
    'MyImages/Index - 3.jpg',
    'MyImages/Index - 4.jpg',
    'MyImages/Index - 5.jpg'];
    var cnt = imgs.length;

   $(function() {
        setInterval(Slider, 3000);
         });

     function Slider() {
     $('#imageSlide').fadeOut("slow", function() {
       $(this).attr('src', imgs[(imgs.length++) % cnt]).fadeIn("slow");
     });
     }

});