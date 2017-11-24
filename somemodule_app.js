angular.module('myModule', [])
  .run(function($rootScope, AppleService, AndroidService) {
    $rootScope.apple = AppleService.method();
    $rootScope.android = AndroidService.method();
  });
