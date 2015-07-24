jQuery(document).ready ($) ->

  ###---LEFT BAR ACCORDION----###
$(function() ->
    $('#nav-accordion').dcAccordion ->
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
//        cookie: 'dcjq-accordion-1',
        classExpand: 'dcjq-current-parent'
    )
)

Script = do ->
  #    sidebar dropdown menu auto scrolling
  jQuery('#sidebar .sub-menu > a').click ->
    o = $(this).offset()
    diff = 250 - (o.top)
    if diff > 0
      $('#sidebar').scrollTo '-=' + Math.abs(diff), 500
    else
      $('#sidebar').scrollTo '+=' + Math.abs(diff), 500

    responsiveView = ->
      wSize = $(window).width()
      if wSize <= 768
        $('#container').addClass 'sidebar-close'
        $('#sidebar > ul').hide()
      if wSize > 768
        $('#container').removeClass 'sidebar-close'
        $('#sidebar > ul').show()

    $(window).on 'load', responsiveView
    $(window).on 'resize', responsiveView
  $('.fa-bars').click ->
    if $('#sidebar > ul').is(':visible') == true
      $('#main-content').css 'margin-left': '0px'
      $('#sidebar').css 'margin-left': '-210px'
      $('#sidebar > ul').hide()
      $('#container').addClass 'sidebar-closed'
    else
      $('#main-content').css 'margin-left': '210px'
      $('#sidebar > ul').show()
      $('#sidebar').css 'margin-left': '0'
      $('#container').removeClass 'sidebar-closed'

  #    tool tips
  $('[data-toggle="tooltip"]').tooltip()

