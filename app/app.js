var myApp = angular.module('myApp', ['ngRoute' , 'ngAnimate']);


myApp.config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    
    .when('/',{
        templateUrl:'views/home.html',
         controller: "mainController"
    })
    
    .when('/contact',{
        templateUrl:'views/contact.html' ,
         controller: "mainController"
    })
    
    .when('/portfolio',{
        templateUrl:'views/portfolio.html' ,
        controller: "mainController"
    })    
    .otherwise({
        templateUrl:'views/404.html' ,
        controller: "mainController"
    });
    
});

myApp.controller('mainController', ['$scope', function($scope){
   
}]);
