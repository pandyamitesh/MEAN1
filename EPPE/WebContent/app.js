var app = angular.module('eppeApp', [ "ngRoute" ]);
app.config(function($routeProvider) {
	$routeProvider.when("/welcome", {
		templateUrl : "welcome.html"
	}).when("/home", {
		templateUrl : "home/home.html",
		controller : "homeController"
	}).when("/login", {
		templateUrl : "login/login.html",
		controller : "loginController"
	}).otherwise({
		redirectTo : "/welcome"
	});
});

app.run(function($log) { 
	  $log.info('Bootstraping Application');
	});
