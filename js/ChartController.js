app.controller('ChartController', ['$scope', '$timeout', function ($scope, $timeout) {
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
