$(document).ready(function(){
  $('.nav-link, .navbar-brand, .new-button, .sidebar-link').click(function() {
      var sectionTo = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(sectionTo).offset().top -100
      }, 500);
  });
});
