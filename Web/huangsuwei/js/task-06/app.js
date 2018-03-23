myApp = angular.module('myApp',["ui.router"]);
myApp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("","login");
    $stateProvider
        .state("login",{
            url:"/login",
            templateUrl:"tpls/login.html",
            controller:"login"
        })
        .state("list",{
            url:"/list",
            templateUrl:"tpls/list.html",
            controller:"list"
        })
        .state("list.welcome",{
            url:"/welcome",
            templateUrl:"tpls/welcome.html"
        })
        .state("list.option1",{
            url:"/option1?page",
            templateUrl:"tpls/option1.html",
            controller:"option1"
        })

});












