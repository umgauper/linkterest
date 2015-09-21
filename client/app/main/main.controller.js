'use strict';

angular.module('linkterestApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {

    $http.get('/api/images/owner/' + Auth.getCurrentUser()._id).success(function(data) {
      $scope.bricks = data;

      //console.log(data);
    });

    //$scope.bricks = [{src: 'http://lorempixel.com/g/280/275/?3729'},
    //                 {src: 'http://lorempixel.com/g/280/320/?6389'},
    //                 {src: 'http://lorempixel.com/g/280/320/?6359'},
    //                 {src: 'http://lorempixel.com/g/280/320/?6349'}
    //];
    //TODO: Investigate 'Error: An invalid or illegal string was specified' angular-masonry js.
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
          console.log(data);
        });
      });

    }
});
