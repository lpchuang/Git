(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var todoApp = angular.module('todoApp',['ngRoute','todoApp.controller','todoApp.directives']);

		todoApp.config(['$routeProvider',function($routeProvider){
			$routeProvider.when('/',{
				templateUrl:'todo.html',
				controller:'MainController'

			}).when('/:status',{
				templateUrl:'todo.html',
				controller:'MainController'

			}).otherwise({
            	redirectTo:'/'
        })
		}])

})(window);
