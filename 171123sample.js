angular.module('myapp', [])
  .controller('SampleController', ['$scope', function($scope) {
    $scope.text = 'TextBox';
    $scope.checkbox = true;
    $scope.radio = 'FUGA';
    $scope.select = 'foo';
    $scope.click = function() {
      $scope.message = 'click here!';
    };
  }])
