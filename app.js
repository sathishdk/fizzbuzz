var app = angular.module("myApp", []);

app.controller("FizzBuzzCtrl", function($scope){
  
  $scope.output = [];
  
  $scope.fizzBuzz = function(){
    for (var i = $scope.firstNo; i <= $scope.secondNo; i++){
    $scope.fizz = i%3;
    $scope.buzz = i%5;
    $scope.fizzBuzz = i%15;
      if ($scope.fizz === 0) {
        $scope.output.push("fizz");
      }
      else if ($scope.buzz === 0) {
        $scope.output.push("buzz");
      }
      else if ($scope.fizzBuzz === 0) {
        $scope.output.push("fizzbuzz");
      }
      else {
        $scope.output.push(i);
      }
    }
  }
  
});

