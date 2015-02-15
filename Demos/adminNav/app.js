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
					position: 'navbar-right',
					menuGroup1: {
						type: 'multiple',
						isVisible: true,
						iconClass: 'fa fa-info',
						collapsedState: 'closed',
						index: 0,
						text: 'Menu Group 1',
						menuItems: {
							itemA: {
								type: 'state',
								state: 'demo',
								iconClass: 'fa fa-info',
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
								iconClass: 'fa fa-info',
								text: 'Item B',
								weight: 2
							},
							itemC: {
								type: 'state',
								state: 'demo',
								isVisible: true,
								isDivider: false,
								iconClass: 'fa fa-info',
								text: 'Item C',
								weight: 1
							}
						}
					},
					menuGroup2: {
						type: 'multiple',
						isVisible: true,
						iconClass: 'fa fa-info',
						collapsedState: 'closed',
						index: 1,
						text: 'Menu Group 2',
						menuItems: {
							itemA: {
								type: 'state',
								state: 'demo',
								iconClass: 'fa fa-info',
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
								iconClass: 'fa fa-info',
								text: 'Item B',
								weight: 2
							},
							itemC: {
								type: 'state',
								state: 'demo',
								isVisible: true,
								isDivider: false,
								iconClass: 'fa fa-info',
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
