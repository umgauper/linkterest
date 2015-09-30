'use strict';

angular.module('linkterestApp')
  .controller('AllUsersCtrl', function ($scope, $http, Auth) {
    $http.get('/api/users').success(function(data) {
      $scope.allUsers = data;
    });

    $scope.currentUser = Auth.getCurrentUser().name;

    $scope.loadImages = function(_id) {
      $http.get('/api/images/owner/' + _id).success(function (data) {
        $scope.bricks = data;
      });
    }
  });
