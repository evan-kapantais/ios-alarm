$(document).ready(function(){

  $('.toggle').click(function(){

    $(this).toggleClass('active');
    $(this).parent().siblings('.alarm-left').toggleClass('active');
    
  });
});