'use strict';

angular.module('linkterestApp')
  .controller('MainCtrl', function ($scope, $http, Auth, $modal) {



    $scope.$watch(
      function() {
        return Auth.getCurrentUser()._id;
      },
      function() {

        if (Auth.getCurrentUser()._id) {
          $http.get('/api/images/owner/' + Auth.getCurrentUser()._id).success(function (data) { //TODO: delay Get request until Auth.getCurrentUser() is defined!!
            $scope.bricks = data;
          });
        }
      }
    );

    $scope.url = '';

    $scope.addImage = function (event, url, caption) {
      $http.post('/api/images', {owner: Auth.getCurrentUser()._id, url: url, caption: caption}).success(function (data) {
        $scope.bricks.push(data);
          $scope.modalInstance.dismiss(event);
      });
    };

    $scope.modal = {
      dismissable: true,
      title: 'Add Image',
      buttons: [{
        classes: "btn btn-lg btn-primary",
        text: 'Submit',
        click: $scope.addImage
      }]
    };

    $scope.openImageModal= function(url) {
      $scope.modalInstance = $modal.open({
        templateUrl: 'components/modal/modal.html',
        scope: $scope
      });
    };

    $scope.deleteImage = function(id) {
      $http.delete('/api/images/' + id).success(function(data) {
          $scope.bricks = $scope.bricks.filter(function(el) { return el._id !== id});
      });
    }
});
