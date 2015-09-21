'use strict';

angular.module('newProjectApp', [
  'oauth',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
      .when('/access_token=:accessToken', {
        template: '',
        controller: function ($location, AccessToken) {
          var hash = $location.path().substr(1);
          AccessToken.setTokenFromString(hash);
          $location.path('/');
          $location.replace();
        }
      });
  })

//Activar modo html5 para coger el token
//angular.module('newProjectApp').config(function($locationProvider) {
//  $locationProvider.html5Mode(true).hashPrefix('!');
//});
