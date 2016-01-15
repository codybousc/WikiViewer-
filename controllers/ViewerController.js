wikiViewer = angular.module("wikiViewer", [])

wikiViewer.controller('ViewerController', ['$scope','$http',
function($scope, $http) {
  $scope.words = "aaaaa yeah "

  $http({
  method: 'GET',
  url: 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json'
}).then(function successCallback(response) {
    $scope.allData = response.data;
  }, function errorCallback(response) {
    console.log(response);
  });


}]);
