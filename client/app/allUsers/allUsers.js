'use strict';

angular.module('linkterestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/allUsers', {
        templateUrl: 'app/allUsers/allUsers.html',
        controller: 'AllUsersCtrl'
      });
  });
