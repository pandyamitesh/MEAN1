(function() {
	app.controller('homeController', function($scope, $http, $routeParams,$rootScope, $location) {
				console.log('homeController');
				if($rootScope.userLoggedIn!==undefined)
					{
					$scope.userLoggedIn=$rootScope.userLoggedIn;
					}
				else
					{
						$location.path("/welcome/");
					}
				
				console.log($scope);	

			}); 
}());