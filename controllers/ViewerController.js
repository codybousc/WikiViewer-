wikiViewer = angular.module("wikiViewer", [])

wikiViewer.controller('ViewerController', ['$scope','$http',
function($scope, $http) {

  //Returning Some Type of Response
  // var url = 'https://en.wikipedia.org/w/api.php?action=query&titles=Ford&prop=revisions&rvprop=content&rvlimit=max &format=json&callback=JSON_CALLBACK';
  //Returns List of items associated with search term
  
  var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Ford&prop=revisions&rvprop=content&rvlimit=max &format=json&callback=JSON_CALLBACK';

  $http.jsonp(url).
      success(function(data, status) {
        $scope.results = [];
        $scope.data = data;
        $scope.results = data;
        console.log($scope.data)
        console.log("results", $scope.results);

      }).
      error(function(data, status, headers, config) {
        console.log(status, data);
      })

}]);
