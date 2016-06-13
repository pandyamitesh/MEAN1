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
(function() {
	app.controller('loginController',  function($scope, $http, $routeParams, $rootScope,$location) {
				// Express Project URL
				var callURL = null;
				var userLoggedIn = false;
				$rootScope.userLoggedIn = false;
				$scope.submitLoginIfo = function() {
					console.log($scope.eppUserName);
					console.log($scope.eppePassword);
					 var callURL = 'http://localhost:3000/api/authenticate';
					        $http({
					        	method: "POST",
					            data: {"name":$scope.eppUserName,"password":$scope.eppePassword},
					            headers: {'Content-Type': 'application/json'},
					            url: callURL
					        }).then(function successCallback(response) {
					        	if(response.data.success===true){
					        		
					        	$rootScope.userLoggedIn = true;
					        	$location.path("/home/");
					        }
					        	else{
					        		$location.path("/home/");
					        	}
					        	
					           
					        }, function errorCallback(response) {
					            // called asynchronously if an error occurs
					            // or server returns response with an error status.
					        	$location.path("/home/");
					        });
					
					
				};

			});
}());