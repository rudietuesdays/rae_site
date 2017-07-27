var app = angular.module('app', ['ngRoute', 'ngCookies', 'pdf']);
app.config(function ($routeProvider) {
	$routeProvider
	.when('/', { templateUrl: 'partials/welcome.html'})
  .when('/rae_resume', { templateUrl: 'partials/resume.html'})
	.otherwise({
    redirectTo: '/'
  });
// Routes to load your new and edit pages with new and edit controllers attached to them!
});
