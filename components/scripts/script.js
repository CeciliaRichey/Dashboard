var Script;

jQuery(document).ready(function($) {});

Script = (function() {
  jQuery('#sidebar .sub-menu > a').click(function() {
    var diff, o, responsiveView;
    o = $(this).offset();
    diff = 250 - o.top;
    if (diff > 0) {
      $('#sidebar').scrollTo('-=' + Math.abs(diff), 500);
    } else {
      $('#sidebar').scrollTo('+=' + Math.abs(diff), 500);
    }
    responsiveView = function() {
      var wSize;
      wSize = $(window).width();
      if (wSize <= 768) {
        $('#container').addClass('sidebar-close');
        $('#sidebar > ul').hide();
      }
      if (wSize > 768) {
        $('#container').removeClass('sidebar-close');
        return $('#sidebar > ul').show();
      }
    };
    $(window).on('load', responsiveView);
    return $(window).on('resize', responsiveView);
  });
  $('.fa-bars').click(function() {
    if ($('#sidebar > ul').is(':visible') === true) {
      $('#main-content').css({
        'margin-left': '0px'
      });
      $('#sidebar').css({
        'margin-left': '-210px'
      });
      $('#sidebar > ul').hide();
      return $('#container').addClass('sidebar-closed');
    } else {
      $('#main-content').css({
        'margin-left': '210px'
      });
      $('#sidebar > ul').show();
      $('#sidebar').css({
        'margin-left': '0'
      });
      return $('#container').removeClass('sidebar-closed');
    }
  });
  return $('[data-toggle="tooltip"]').tooltip();
})();
