wikiViewer = angular.module("wikiViewer", [])

wikiViewer.controller('ViewerController', ['$scope','$http',
function($scope, $http) {

  $scope.searchTerm = "";

  $scope.clearSearchField = function() {
    $scope.searchTerm = " ";
  }

$scope.makeAPICall = function() {
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + $scope.searchTerm + '&prop=revisions&rvprop=content&rvlimit=max|&list=allimages| &format=json&callback=JSON_CALLBACK';
    var imageURL = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + $scope.searchTerm + '&list=search&format=json&limit=17callback=JSON_CALLBACK';

  console.log("URL = ", url);

  $http.jsonp(url).
      success(function(data, status) {
        $scope.data = data;
        $scope.headlines = data[1];
        $scope.descriptions = data[2];
        $scope.links = data[3];
        $scope.responseData = {};
        $scope.responseDataArray = [];
        console.log("DATA = ", $scope.data)

        for (var i = 0; i < 10; i++) {
          var headline = $scope.headlines[i];
          var description = $scope.descriptions[i];
          var links = $scope.links[i];
          if (!description) {
            if(!headline) {break}
            description = "Sorry, but there's no content for this article.";
          }
          $scope.responseDataArray.push({headline: headline, description: description, links: links});
        }
      }).
      error(function(data, status, headers, config) {
        console.log(status, data);
      })
    }

}]);
