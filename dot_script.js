angular.module('myapp', [])
  .controller('mainCtrl', ['$scope', function($scope){
    $scope.users = [
      {name: 'taguchi', score: 52.22},
      {name: 'tanaka', score: 38.22},
      {name: 'takeshi', score:  11.11},
      {name: 'guchi', score: 35.22},
      {name: 'takato', score: 76.22},
      {name: 'yashi', score:  31.11},
      {name: 'kobachi', score: 39.22},
      {name: 'nakada', score: 48.22},
      {name: 'takahashi', score:  97.11},
    ];
    $scope.today = new Date();
  }])

  .controller('userItemCtrl', ['$scope', function($scope){
    $scope.increment = function(){
      $scope.user.score++;
    };
    $scope.addUser = function(){
    };
  }]);
