$(document).ready(function(){
    $('.menu-ul li:has(ul)').click(function(e){
        e.preventDefault();

        if($(this).hasClass('activado')){
            
       }else {
           $('.menu-ul li ul').slideUp();
           $('.menu-ul li').removeClass('activado');
           $(this).addClass('activado');
           $(this).children('ul').slideDown();
       }
    });
});