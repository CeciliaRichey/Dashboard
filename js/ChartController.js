app.controller('ChartController', ['$scope', '$timeout', function ($scope, $timeout) {
  $scope.health =
    [ 
  { 
    username: 'Cecilia', 
    timestamp: new Date(2015, 12, 30, 23, 59, 58),
    bookmarked: false, 
    systolic: 118,
    diastolic: 78,
    bpm: 162,
    arrhythmia: 'none',
    oxygen: 96,
    hydration: 89,
    location: "gym",
    symptoms: [],
    notes: ""
  },
  { 
    username: 'Cecilia', 
    timestamp: new Date(2015, 12, 30, 23, 59, 58),
    bookmarked: true, 
    systolic: 120,
    diastolic: 80,
    bpm: 130,
    arrhythmia: 'none',
    oxygen: 98,
    hydration: 92,
    location: "unknown: gps coordinates 80109012",
    symptoms: ["light headed"],
    notes: "Just exercised"
  }, 
  { 
    username: 'Cecilia', 
    timestamp: new Date(2015, 12, 30, 23, 45, 12),
    bookmarked: false, 
    systolic: 122,
    diastolic: 84,
    bpm: 98,
    arrhythmia: 'none',
    oxygen: 91,
    hydration: 89,
    location: "work",
    symptoms: [],
    notes: ""
  }, 
  { 
    username: 'Cecilia', 
    timestamp: new Date(2015, 12, 30, 23, 24, 47),
    bookmarked: false, 
    systolic: 122,
    diastolic: 90,
    bpm: 100,
    arrhythmia: 'none',
    oxygen: 90,
    hydration: 88,
    location: "work",
    symptoms: [],
    notes: ""
  },
  { 
    username: 'Cecilia', 
    timestamp: new Date(2015, 12, 30, 23, 22, 45),
    bookmarked: false, 
    systolic: 132,
    diastolic: 88,
    bpm: 140,
    arrhythmia: 'none',
    oxygen: 94,
    hydration: 90,
    location: "work",
    symptoms: [],
    notes: ""
  }, 
  { 
    username: 'Cecilia', 
    timestamp: new Date(2015, 12, 30, 23, 18, 42), 
    bookmarked: true, 
    systolic: 130,
    diastolic: 78,
    bpm: 80,
    arrhythmia: 'none',
    oxygen: 92,
    hydration: 86,
    location: "school",
    symptoms: ["light headed", "shortness of breath"],
    notes: 'none'
  }, 
  { 
    username: 'Cecilia', 
    timestamp: new Date(2015, 12, 30, 23, 12, 15),
    bookmarked: false, 
    systolic: 140,
    diastolic: 100,
    bpm: 90,
    arrhythmia: 'none',
    oxygen: 91,
    hydration: 84,
    location: "school",
    symptoms: [],
    notes: ""
  }, 
  { 
    username: 'Cecilia', 
    timestamp: new Date(2015, 12, 30, 22, 19, 24),
    bookmarked: true, 
    systolic: 132,
    diastolic: 80,
    bpm: 88,
    arrhythmia: 'none',
    oxygen: 98,
    hydration: 84,
    location: "home",
    symptoms: ["shortness of breath"],
    notes: 'none'
  }, 
    { 
    username: 'Cecilia', 
    timestamp: new Date(2015, 12, 30, 21, 22, 46),
    bookmarked: false, 
    systolic: 123,
    diastolic: 91,
    bpm: 102,
    arrhythmia: 'none',
    oxygen: 91,
    hydration: 89,
    location: "home",
    symptoms: [],
    notes: ""
  }, 
];

  $scope.timeframe = "Last 6 Months";
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.metrics = [
    {
       name: 'Blood Pressure',
       values: [65, 59, 80, 81, 56, 55, 40],
       selected: true
    },
        {
       name: 'Pulse',
       values: [28, 48, 40, 19, 86, 27, 90],
       selected: true
    },
        {
       name: 'Oxygen',
       values: [92, 94, 98, 88, 86, 90, 96],
       selected: true
    },
        {
       name: 'Hydration',
       values: [88, 78, 76, 77, 78, 87, 97],
       selected: true
    }
    ];

  $scope.series = [];
  $scope.data =[];
  $scope.metrics.forEach( function(value, index) {
    if($scope.metrics[index].selected===true) {
      $scope.series.push($scope.metrics[index].name);
      $scope.data.push($scope.metrics[index].values);
    }
  });

 $scope.$watch('metrics[0].selected', function() {
    $scope.series = [];
    $scope.data =[];
    $scope.metrics.forEach( function(value, index) {
      if($scope.metrics[index].selected===true) {
        $scope.series.push($scope.metrics[index].name);
        $scope.data.push($scope.metrics[index].values);
      }
    });
   });
  $scope.$watch('metrics[1].selected', function() {
    $scope.series = [];
    $scope.data =[];
    $scope.metrics.forEach( function(value, index) {
      if($scope.metrics[index].selected===true) {
        $scope.series.push($scope.metrics[index].name);
        $scope.data.push($scope.metrics[index].values);
      }
    });
   });
   $scope.$watch('metrics[2].selected', function() {
    $scope.series = [];
    $scope.data =[];
    $scope.metrics.forEach( function(value, index) {
      if($scope.metrics[index].selected===true) {
        $scope.series.push($scope.metrics[index].name);
        $scope.data.push($scope.metrics[index].values);
      }
    });
   });
  $scope.$watch('metrics[3].selected', function() {
    $scope.series = [];
    $scope.data =[];
    $scope.metrics.forEach( function(value, index) {
      if($scope.metrics[index].selected===true) {
        $scope.series.push($scope.metrics[index].name);
        $scope.data.push($scope.metrics[index].values);
      }
    });
   });

  $scope.timestamp = [0, 1, 0, 0, 1, 0, 0];

  $scope.timestamp.forEach( function(value, index) {
    if(value===1) {
      $scope.$on("create", function(evt, chart) {
      	chart.datasets.forEach ( function (value2, index2) {
          chart.datasets[index2].points[index].fillColor = "red";
          chart.datasets[index2].points[index].radius = 7;
          chart.update();
         });
      });
  }});
}]);
