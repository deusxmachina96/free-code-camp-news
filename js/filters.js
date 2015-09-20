(function filters() {
	var app = angular.module("filters", []);

	app.filter("pluralize", function(){
		return function(input) {
			if(input == 1)
				return input + " upvote"
			else
				return input + " upvotes";
		}
	});
})();