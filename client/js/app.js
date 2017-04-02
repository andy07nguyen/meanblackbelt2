// APP MODULE:
var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);
// ROUTES:
  myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/',{
          templateUrl: 'partials/login.html',
      })
      .when('/dashboard',{
          templateUrl: 'partials/main.html',
      })
      .when('/new',{
          templateUrl: 'partials/new.html',
      })
      .when('/question/:id',{
          templateUrl: 'partials/show.html',
      })
      .when('/answer/:id',{
          templateUrl: 'partials/answer.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
