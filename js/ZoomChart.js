//Still need to format date so that year is only displayed if there are 12+ months of data.  


  window.onload = function () {


    var chart = new CanvasJS.Chart("chartContainer",
    {
      zoomEnabled: true,
      animationEnabled: true,
      animationDuration: 2000,
      legend: {
        fontFamily: 'Lato',
        horizontalAlign: "center",
        verticalAlign: "top",
        cursor: "pointer",
        itemclick: function (e) {
            //console.log("legend click: " + e.dataPointIndex);
            //console.log(e);
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }
            e.chart.render();
        }
      },
      axisY:{
        includeZero: false
      },
      axisX: {
      },
      data: [
      {        
        legendText: "Oxygen",      
        showInLegend: true,
        type: "splineArea",
        color: "#FD6761",
        fillOpacity: .9,
        toolTipContent: "{x}<br/>Oxygen: {y}",
        dataPoints: [
        { x: new Date(1960, 08, 15), y: 14 },
        { x: new Date(1960, 08, 16), y: 34},
        { x: new Date(1960, 08, 17), y: 45 },
        { x: new Date(1960, 08, 18), y: 47 },
        { x: new Date(1960, 08, 19), y: 33 },
        { x: new Date(1960, 08, 20), y: 28 },
        { x: new Date(1960, 08, 21), y: 23 },
        { x: new Date(1960, 08, 22), y: 13 },
        { x: new Date(1960, 08, 23), y: 10},
        { x: new Date(1960, 08, 24), y: 17 , 
          markerType: "triangle",
          markerColor: "red", 
          markerSize: 12, 
          toolTipContent: '{x}<br/>Oxygen: {y}<br/><button class="notes" value= {x}>Notes</button>',
          click: onClick
        },
        { x: new Date(1960, 08, 25), y: 10},
        { x: new Date(1960, 08, 26), y: 17 },
        { x: new Date(1960, 08, 27), y: 22 },
        { x: new Date(1960, 08, 28), y: 12 },
        { x: new Date(1960, 08, 29), y: 12 },
        { x: new Date(1960, 08, 30), y: 52},
        { x: new Date(1960, 08, 31), y: 45 },
        { x: new Date(1960, 09, 01), y: 20}
                ]
      },
      {
        legendText: "Blood Pressure",      
        showInLegend: true,
        type: "splineArea",
        color: "#7F7E95",
        fillOpacity: .8,
        toolTipContent: "{x}<br/>Blood Pressure: {y}",
        dataPoints: [
        { x: new Date(1960, 08, 15), y: 5 },
        { x: new Date(1960, 08, 16), y: 9},
        { x: new Date(1960, 08, 17), y: 17 },
        { x: new Date(1960, 08, 18), y: 32 },
        { x: new Date(1960, 08, 19), y: 22 },
        { x: new Date(1960, 08, 20), y: 14 },
        { x: new Date(1960, 08, 21), y: 25 },
        { x: new Date(1960, 08, 22), y: 18 },
        { x: new Date(1960, 08, 23), y: 20},
        { x: new Date(1960, 08, 24), y: 5 , markerType: "triangle",markerColor: "red", markerSize: 12, toolTipContent: '{x}<br/>Blood Pressure: {y}<br/><button class="notes">Notes</button>', click: onClick},
        { x: new Date(1960, 08, 25), y: 9},
        { x: new Date(1960, 08, 26), y: 17 },
        { x: new Date(1960, 08, 27), y: 32 },
        { x: new Date(1960, 08, 28), y: 22 },
        { x: new Date(1960, 08, 29), y: 14 },
        { x: new Date(1960, 08, 30), y: 25 },
        { x: new Date(1960, 08, 31), y: 18 },
        { x: new Date(1960, 09, 01), y: 20}
                ]
      },
        {        
        legendText: "Pulse",      
        showInLegend: true,
        type: "splineArea",
        color: "#77C0DB",
        fillOpacity: .7,
        toolTipContent: "{x}<br/>Pulse: {y} bpm",
        dataPoints: [
        { x: new Date(1960, 08, 15), y: 10 },
        { x: new Date(1960, 08, 16), y: 19},
        { x: new Date(1960, 08, 17), y: 27 },
        { x: new Date(1960, 08, 18), y: 42 },
        { x: new Date(1960, 08, 19), y: 42 },
        { x: new Date(1960, 08, 20), y: 24 },
        { x: new Date(1960, 08, 21), y: 45 },
        { x: new Date(1960, 08, 22), y: 10 },
        { x: new Date(1960, 08, 23), y: 10},
        { x: new Date(1960, 08, 24), y: 15 , markerType: "triangle",markerColor: "red", markerSize: 12, toolTipContent: '{x}<br/>Pulse: {y}<br/><button class="notes">Notes</button>', click: onClick},
        { x: new Date(1960, 08, 25), y: 20},
        { x: new Date(1960, 08, 26), y: 27 },
        { x: new Date(1960, 08, 27), y: 32 },
        { x: new Date(1960, 08, 28), y: 22 },
        { x: new Date(1960, 08, 29), y: 12 },
        { x: new Date(1960, 08, 30), y: 55 },
        { x: new Date(1960, 08, 31), y: 38 },
        { x: new Date(1960, 09, 01), y: 14}
                ]
      }   
        ]
  });

    chart.render();
    $('.sixMonths').click(function() {
      event.preventDefault();
      console.log(chart);
      chart.options.axisX.minimum = new Date(1960, 08, 20);
      chart.options.axisX.maximum = new Date(1960, 08, 26);
      chart.render();
    })

    function onClick(e){
    alert(e.dataPoint.x + ", " + e.dataPoint.y);   
    };

    $('.canvasjs-chart-tooltip').hover(function(event1) {
      $('button').click(function(event2){
        var date = $(this).prop("value");
        console.log(event1);
        console.log(event2);
        $('.zoom').append("<h4>" + date + "</h4>");
      })
    })
  };