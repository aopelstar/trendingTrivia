angular.module('myApp', ['ui.router'])

angular.module('myApp').config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', { // 53E 
        url: '/',
        template: 'Home state',
        controller: 'question'

    }).state('easy', { //53G
        url: '/easy',
        templateUrl: "app/views/easy.html",
        controller: 'questEasy'
    })

    $urlRouterProvider.otherwise('/') //53f
})