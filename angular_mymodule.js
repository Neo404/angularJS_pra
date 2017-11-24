/* モジュールの定義
var myModule = angular.module('mymodule', []);

myModule.controller('SampleController', function($scope) {
  $scope.message = 'hi module';
});
*/
//モジュールの依存関係
angular.module('hogeModule', [])
  .run(function($rootScope, hogeService) {
    $rootScope.message = hogeService.method();
  });

angular.module('mymodule', ['hogeModule'])
  .service('hogeService', function() {
    this.method = function() {
      return 'hoge service';
    };
  });
