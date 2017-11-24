angular.module('myapp', [])
  .controller('SampleController', ['$scope', function($scope) {
    $scope.text = 'TextBox';
    $scope.checkbox = true;
    $scope.radio = 'FUGA';
    $scope.select = 'foo';
    $scope.items = [
      {key: 'hoge', value: 'HOGE'},
      {key: 'fuga', value: 'FUGA'},
      {key: 'apple', value: 'APPLE'},
    ];
    $scope.click = function() {
      $scope.message = 'click here!';
    };
    $scope.message2 = 'hoge';
    $scope.change = function() {
      $scope.message2 = 'nice change';
    };
    $scope.hoge = 'red solid-border';
    $scope.isRed = true;
    $scope.isDotted = true;

    $scope.first_number = 0;
    $scope.second_number = 0;
    $scope.sum = 0;
    $scope.$watch('first_number + second_number', 'sum = first_number + second_number');
  }])
