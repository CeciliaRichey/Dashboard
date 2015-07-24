app.controller('MainController', ['$scope', function($scope) { 
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
    location: "home"
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
],
  $scope.someFormula = function(index) { 
    $scope.health += 1; 
};
}]);


