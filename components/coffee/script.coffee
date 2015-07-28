do ->
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


  # data = 
  #   labels: [
  #     'January'
  #     'February'
  #     'March'
  #     'April'
  #     'May'
  #     'June'
  #     'July'
  #   ]
  #   datasets: [
  #     {
  #       label: 'My First dataset'
  #       fillColor: 'rgba(220,220,220,0.2)'
  #       strokeColor: 'rgba(220,220,220,1)'
  #       pointColor: 'rgba(220,220,220,1)'
  #       pointStrokeColor: '#fff'
  #       pointHighlightFill: '#fff'
  #       pointHighlightStroke: 'rgba(220,220,220,1)'
  #       data: [
  #         65
  #         59
  #         80
  #         81
  #         56
  #         55
  #         40
  #       ]
  #     }
  #     {
  #       label: 'My Second dataset'
  #       fillColor: 'rgba(151,187,205,0.2)'
  #       strokeColor: 'rgba(151,187,205,1)'
  #       pointColor: 'rgba(151,187,205,1)'
  #       pointStrokeColor: '#fff'
  #       pointHighlightFill: '#fff'
  #       pointHighlightStroke: 'rgba(151,187,205,1)'
  #       data: [
  #         28
  #         48
  #         40
  #         19
  #         86
  #         27
  #         90
  #       ]
  #     }
  #   ]

  # myLineChart = new Chart($("#lineChart").get(0).getContext("2d")).Line(data)

  # if (myLineChart.datasets[0].points[4].value > 50)
  #   myLineChart.datasets[0].points[4].fillColor =  "lightgreen"
  #   myLineChart.update()
