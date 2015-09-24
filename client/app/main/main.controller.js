'use strict';

angular.module('linkterestApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {

    $http.get('/api/images/owner/' + Auth.getCurrentUser()._id).success(function(data) {
      $scope.bricks = data;
    });

    $scope.url = '';

    $scope.addImage = function(url) {
      console.log(Auth.getCurrentUser()._id);
      $http.post('/api/images', {owner: Auth.getCurrentUser()._id, url: url}).success(function() {
        $http.get('/api/images/owner/' + Auth.getCurrentUser()._id).success(function(data) {
          $scope.bricks = data;
          console.log(data);
        });
      })
    };

    $scope.deleteImage = function(id) {
      $http.delete('/api/images/' + id).success(function(data) {
        $http.get('/api/images/owner/' + Auth.getCurrentUser()._id).success(function(data) {
          $scope.bricks = data;
        });
      });

    }
});
