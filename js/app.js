'use strict';


angular.module('arachne',
	['ui.bootstrap',
	'ngRoute',
	'ngSanitize',
	'ngResource',
	'arachne.filters',
	'arachne.services',
	'arachne.directives',
	'arachne.controllers',
	'leaflet-directive',
	]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/', {templateUrl: 'partials/startSite.html'})
		.when('/entity/:id?', {templateUrl: 'partials/entity.html'})
		.when('/search/:params?', {templateUrl: 'partials/search.html'});

}]);