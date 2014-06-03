'use strict';

angular
  .module('myappApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'myApp.controllers',
    'myApp.services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

//remoteCouch = 'http://admin:Swbv123abc@terminus.iriscouch.com/todos';
