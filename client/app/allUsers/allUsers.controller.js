'use strict';

angular.module('linkterestApp')
  .controller('AllUsersCtrl', function ($scope, $http, Auth) {

    $scope.currentUser = Auth.getCurrentUser().name;

    $http.get('/api/users').success(function(data) {
      $scope.allUsers = data;
    });

    $scope.loadImages = function(_id) {
      $http.get('/api/images/owner/' + _id).success(function (data) {
        $scope.bricks = data;
      });
    };

    $scope.setActive = function(name) {
      $scope.active = name;
    };

  });
