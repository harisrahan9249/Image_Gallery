$(document).ready(function() {
    var $mainImage = $('#mainImage');
    
    $('.thumbnail').click(function() {
      var src = $(this).attr('src');
      $mainImage.fadeOut(400, function() {
        $mainImage.attr('src', src).fadeIn(400);
      });
    });
  });
  