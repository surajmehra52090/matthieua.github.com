$(function() {
// Color switcher when you click an nav anchor
  $('ul li a').click(function(){
    var anyActive = $(this).parent().parent().find('li a.active');
    // checks to see if the anchor parent list has an active anchor setted
      if(anyActive) { 
          // remove the active class from the previous selected anchor
        $(this).parent().parent().find('li a.active').removeClass('active');
        // add active state to the anchor clicked
        $(this).addClass('active');
      }
  });
  
  $('#sidebarNav a').bind("click", jump);
return false;


});

















