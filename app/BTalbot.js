angular.module('BTalbot', [
    'ui.router',
    'ngAnimate'
]).config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider
        .otherwise('/about');

    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        })
        .state('education', {
            url: '/education',
            templateUrl: 'views/education.html'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'views/projects.html',
            controller: function ($state){
                $state.go('projects.huffmansqueeze')
            }
        })
        .state('projects.huffmansqueeze', {
            url: '/projects/huffmansqueeze',
            templateUrl: 'views/projects/huffmans.html'
        })
        .state('projects.flydragonfly', {
            url: '/projects/flydragonfly',
            templateUrl: 'views/projects/flydragonfly.html'
        });
});