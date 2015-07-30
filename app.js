var app = angular.module('app', ['ngRoute','app.main']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/",{

            templateUrl: 'main/main.html',
            controller: 'MainCtrl'

        })
        .otherwise({

        redirectTo: '/'

    });

    $locationProvider.html5Mode(false).hashPrefix('!');
}]);