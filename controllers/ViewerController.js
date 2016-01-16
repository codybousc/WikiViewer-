wikiViewer = angular.module("wikiViewer", [])

wikiViewer.controller('ViewerController', ['$scope','$http',
function($scope, $http) {

  //Returning Some Type of Response
  // var url = 'https://en.wikipedia.org/w/api.php?action=query&titles=Ford&prop=revisions&rvprop=content&rvlimit=max &format=json&callback=JSON_CALLBACK';
  //Returns List of items associated with search term

  var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Ford&prop=revisions&rvprop=content&rvlimit=max &format=json&callback=JSON_CALLBACK';

  $http.jsonp(url).
      success(function(data, status) {

        $scope.data = data;
        $scope.headlines = data[1];
        $scope.descriptions = data[2];
        $scope.links = data[3];
        $scope.responseData = {};
        $scope.responseDataArray = [];

        for (var i = 0; i < 10; i++) {
          var headline = $scope.headlines[i];
          var description = $scope.descriptions[i];
          $scope.responseDataArray.push({headline: headline, description: description});
          console.log("TEST ARRAR= ", $scope.responseDataArray);
        }

      }).
      error(function(data, status, headers, config) {
        console.log(status, data);
      })

}]);
