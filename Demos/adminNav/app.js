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
					menuGroup0: {
						type: 'spacer',
						width: '50px',
						isVisible: true,
						index: 0
					},
					menuGroup1: {
						type: 'multiple',
						isVisible: true,
						iconClass: 'fa fa-info',
						collapsedState: 'closed',
						index: 1,
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
						index: 2,
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
				sideBarState: 'expanded',
				groupStates: 'collapsed',
				sideBarMenuGroups: {
					menuGroup0: {
						type: 'spacer',
						height: '50px',
						isVisible: true,
						text: '',
						index: 0
					},
					menuGroup1: {
						type: 'multiple',
						isVisible: true,
						iconClass: 'fa fa-info',
						isCollapsed: 'true',
						index: 1,
						text: 'Side Group 1',
						menuItems: {
							itemA: {
								type: 'state',
								state: 'demo',
								iconClass: 'fa fa-info',
								isVisible: true,
								isDivider: false,
								isActive: false,
								text: 'Item A',
								weight: 0
							},
							itemB: {
								type: 'state',
								state: 'demo',
								isVisible: true,
								isDivider: false,
								iconClass: 'fa fa-info',
								isActive: false,
								text: 'Item B',
								weight: 2
							},
							itemC: {
								type: 'state',
								state: 'demo',
								isVisible: true,
								isDivider: false,
								iconClass: 'fa fa-info',
								isActive: false,
								text: 'Item C',
								weight: 1
							}
						}
					},
					menuGroup2: {
						type: 'multiple',
						isVisible: true,
						iconClass: 'fa fa-info',
						isCollapsed: 'true',
						index: 2,
						text: 'Side Group 2',
						menuItems: {
							itemA: {
								type: 'state',
								state: 'demo',
								iconClass: 'fa fa-info',
								isVisible: true,
								isDivider: false,
								isActive: false,
								text: 'Item A',
								weight: 0
							},
							itemB: {
								type: 'state',
								state: 'demo',
								isVisible: true,
								isDivider: false,
								iconClass: 'fa fa-info',
								isActive: false,
								text: 'Item B',
								weight: 2
							},
							itemC: {
								type: 'state',
								state: 'demo',
								isVisible: true,
								isDivider: false,
								iconClass: 'fa fa-info',
								isActive: false,
								text: 'Item C',
								weight: 1
							}
						}
					}

				}
			}
		}
	}

}]);
