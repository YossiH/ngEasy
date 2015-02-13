'use strict';



var app = angular.module('ngEasyNavAdminDemo', ['ngEasy', 'ui.router']);





app.config(['$stateProvider', '$urlRouterProvider',
			function ($stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise('/ngEasy/Demos/adminNav/');
				$stateProvider
					.state('demo', {
						url: '/ngEasy/Demos/adminNav/'
					})
			}
]);


app.controller('ngEasyNavAdminDemoMainController', ['$scope', function($scope) {

	$scope.navAdminSettings = {
		navSettings: {
			topNavSettings: {
				ngEasyTopNavRouteProvider: 'uiRouter',
				topNavBrand: {
					brandText: 'ngEasy TopNav Demo',
					state: 'demo'
				},
				topNavMenu: {
					position: 'right'

				}

			},
			sideBarSettings: {
				barState: 'expanded',
				groupStates: 'collapsed'
			}
		}
	}

}]);
