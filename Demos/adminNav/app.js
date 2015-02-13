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
				topNavMenuGroups: {
					position: 'left',
					menuGroup1: {
						type: 'multiple',
						isVisible: true,
						iconClass: 'fa fa-info',
						text: 'Menu Group 1',
						menuItems: {
							itemA: {
								type: 'state',
								state: 'demo',
								iconClass: '',
								isVisible: true,
								isDivider: false,
								text: 'Item A',
								weight: 0
							},
							itemB: {
								type: 'state',
								state: 'demo',
								isVisible: true,
								isDivider: false,
								iconClass: '',
								text: 'Item B',
								weight: 2
							},
							itemC: {
								type: 'state',
								state: 'demo',
								isVisible: true,
								isDivider: false,
								iconClass: '',
								text: 'Item C',
								weight: 1
							}
						}
					}
				}
			},
			sideBarSettings: {
				barState: 'expanded',
				groupStates: 'collapsed'
			}
		}
	}

}]);
