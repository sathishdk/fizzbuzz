var app = angular.module("myApp", []);

app.controller("FizzBuzzCtrl", function($scope){
  
  $scope.output = [];
  
  $scope.fizzBuzz = function(){
    for (var i = $scope.firstNo; i <= $scope.secondNo; i++){
    $scope.fizz = i%3;
    $scope.buzz = i%5;
    $scope.fizzBuzz = i%15;
      if ($scope.fizz === 0) {
        $scope.output.push("<strong>fizz</strong><br/>");
      }
      else if ($scope.buzz === 0) {
        $scope.output.push("<strong>buzz</strong><br/>");
      }
      else if ($scope.fizzBuzz === 0) {
        $scope.output.push("<strong>fizzbuzz</strong><br/>");
      }
      else {
        $scope.output.push(i);
      }
    }
  }
  
});

