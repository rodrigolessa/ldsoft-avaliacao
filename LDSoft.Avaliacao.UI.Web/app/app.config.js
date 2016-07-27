angular.module('ldsoft.avaliacao')
    .config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/'
            });
        }
    ]);