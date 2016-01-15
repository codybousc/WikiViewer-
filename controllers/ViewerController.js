wikiViewer = angular.module("wikiViewer", [])

wikiViewer.controller('ViewerController', ['$scope','$http',
function($scope, $http) {
  $scope.words = "aaaaa yeah "

  var url = 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content &format=json&callback=JSON_CALLBACK';

  $http.jsonp(url).
      success(function(data, status) {
        $scope.data = data;
        console.log( status, $scope.data)
      }).
      error(function(data, status, headers, config) {
        console.log(status, data);
      })

}]);
