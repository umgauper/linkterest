'use strict';

angular.module('linkterestApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {

    $scope.url = '';

    $scope.addImage = function(url) {
      console.log(Auth.getCurrentUser()._id);
      $http.post('/api/images', {owner: Auth.getCurrentUser()._id, url: url}).success(function() {
        $http.get('/api/images/owner/' + Auth.getCurrentUser()._id).success(function(data) {
          $scope.myImages = data;
        });
      })
    }

});
