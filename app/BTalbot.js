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
        .state('work', {
            url: '/work',
            templateUrl: 'views/work.html'
        })
        .state('education', {
            url: '/education',
            templateUrl: 'views/education.html'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'views/projects.html',
            controller: function ($state){
                $state.go('projects.bbngame')
            }
        })
        .state('projects.bbngame', {
            url: '/bbngame',
            templateUrl: 'views/projects/bbngame.html'
        })
        .state('projects.pulsar', {
            url: '/pulsar',
            templateUrl: 'views/projects/pulsar.html'
        })
        .state('projects.cudasqueeze', {
            url: '/cudasqueeze',
            templateUrl: 'views/projects/cudasqueeze.html'
        })
        .state('projects.exceleditor', {
            url: '/exceleditor',
            templateUrl: 'views/projects/exceleditor.html'
        })
        .state('projects.flydragonfly', {
            url: '/flydragonfly',
            templateUrl: 'views/projects/flydragonfly.html'
        })
        .state('projects.heightmapanalyzer', {
            url: '/heightmapanalyzer',
            templateUrl: 'views/projects/heightmapanalyzer.html'
        })
        .state('sporting', {
            url: '/sproting',
            templateUrl: 'views/sporting.html'
        });
});