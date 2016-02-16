var AuthorApp = angular.module('AuthorApp', []);
AuthorApp.controller('MyController', function ($scope) {
    $scope.authors=[
        {'name': 'Lorna'},
        {'name': 'Bennett'},
        {'name': 'Alan'},
        {'name': 'Roxane'},
        {'name': 'Eman'}
    ];
});