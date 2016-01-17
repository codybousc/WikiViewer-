wikiViewer = angular.module("wikiViewer", [])

wikiViewer.controller('ViewerController', ['$scope','$http',
function($scope, $http) {

  // $scope.setQuery = function(term) {
  //   console.log("making it to setQuery");
  //   $scope.searchTerm = term;
  // }

  $scope.searchTerm = "";

  //Returns List of items associated with search term
  // var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Ford&prop=revisions&rvprop=content&rvlimit=max &format=json&callback=JSON_CALLBACK';
//Image addition attempt

$scope.makeAPICall = function() {
  console.log("making it to function! SearchTerm = ", $scope.searchTerm);
  var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + $scope.searchTerm + '&prop=revisions&rvprop=content&rvlimit=max|&list=allimages| &format=json&callback=JSON_CALLBACK';

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
          if (!description) {
            if(!headline) {break}
            description = "Sorry, but there's no content for this article.";
          }
          $scope.responseDataArray.push({headline: headline, description: description});

          console.log("TEST ARRAR= ", $scope.responseDataArray);
        }

      }).
      error(function(data, status, headers, config) {
        console.log(status, data);
      })

    }

}]);
