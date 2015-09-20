(function complete(){

	var app = angular.module("fccNewsApp", []);

	app.controller("NewsListCtrl", ["$scope", "$http", function($scope, $http){
		$scope.newsArray = [];
		$http.get("http://www.freecodecamp.com/news/hot")
			.then(function(response) {
				// Called on a successful response
				console.log(response.data);
				$scope.newsArray = response.data;

			}, function(response) {
				// Called when a server returns an error

			});

	}]);
})();