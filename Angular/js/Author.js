/// <reference path="angular.js"
var AuthorApp = angular.module('AuthorApp', []);
AuthorApp.controller('MyController', function ($scope) {
    $scope.authors = [
        {'name': 'Bennett Fonacier'},
        {'name': 'Brenda Fonacier'},
        {'name': 'Alan Fonacier'},
        {'name': 'Roxane Fonacier'},
        {'name': 'Lorna Fonacier'}
    ];
});