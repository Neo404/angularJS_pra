angular.module('myapp', [])
  .controller('HelloWorldController', ['$scope', function($scope) {
    $scope.message = 'Hello World!!';
  }])

  .controller('SampleController', ['$scope', function($scope) {
    $scope.simple = '簡易記法を使った方法';
    $scope.directive = 'ディレクティブを使った方法';
  }]);
