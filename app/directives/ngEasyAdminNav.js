'use strict';

var ngEasyModule = angular.module('ngEasy');

ngEasyModule

.directive('ngEasyTopNav', function ()  {

	return {
		template:   '<nav id="topNavRoot" class="navbar navbar-default navbar-static-top ngEasyTopNav" role="navigation">' +
						'<div class="navbar-header">' +
							'<button type="button" class="navbar-toggle" ng-click="isSideBarCollapsed = !isSideBarCollapsed">' +
								'<span class="sr-only">Toggle SideBar</span>' +
								'<span class="icon-bar"></span>' +
								'<span class="icon-bar"></span>' +
								'<span class="icon-bar"></span>' +
							'</button>' +
							'<span ng-switch="settings.ngEasyTopNavRouteProvider">' +
								'<a ng-switch-when="uiRouter" class="navbar-brand" ui-sref="{{ settings.topNavBrand.state }}">' +
									'<img ng-if="settings.topNavBrand.imageSource" ng-src="{{settings.topNavBrand.imageSource}}">' +
									'<span ng-if="settings.topNavBrand.brandText">{{ settings.topNavBrand.brandText }}</span>' +
								'</a>' +
								'<a ng-switch-when="ngRouter" class="navbar-brand" ng-href="{{ settings.topNavBrand.topNavBrand.href }}">' +
									'<img ng-if="settings.topNavBrand.imageSource" ng-src="{{topNavBrand.imageSource}}">' +
									'<span ng-if="settings.topNavBrand.brandText">{{ settings.topNavBrand.brandText }}</span>' +
								'</a>' +
							'</span>' +
						'</div>' +

						'<ul class="nav navbar-top-links {{ settings.topNavMenu.position }}">' +
							'<li ng-switch="topNavMenuItem.type" ng-repeat="topNavMenuItem in topNavMenu | orderBy:\'weight\'" ng-if="item._isVisible()" class="dropdown">' +
								'<a ng-switch-when="state" ui-sref="{{ topNavMenuItem.state }}" ui-sref-active="active">' +
									'<span class="menu-item-icon fa fa-fw {{ topNavMenuItem.iconClass}}"></span>' +
									'<span class="menu-item-text"> {{ topNavMenuItem.text }}</span>' +
								'</a>' +
								'<a ng-switch-when="action" ng-click="topNavMenuItem.click()">' +
									'<span class="menu-item-icon fa fa-fw {{ topNavMenuItem.iconClass}}"></span>' +
									'<span class="menu-item-text"> {{ topNavMenuItem.text }}</span>' +
								'</a>' +
								'<a ng-switch-when="href" ng-href="topNavMenuItem.href">' +
									'<span class="menu-item-icon fa fa-fw {{ topNavMenuItem.iconClass}}"></span>' +
									'<span class="menu-item-text"> {{ topNavMenuItem.text }}</span>' +
								'</a>' +
								'<a ng-switch-when="children" class="dropdown-toggle">' +
									'<span class="fa fa-fw {{ topNavMenuItem.iconClass }}"></span>' +
									'<span> {{ topNavMenuItem.itemText }} </span>' +
									'<span class="fa fa-caret-down"></span>' +
								'</a>' +
								'<ul ng-switch-when="children" class="dropdown-menu">' +
									'<li ng-repeat="topNavMenuChildItem in topNavMenuItem.children | orderBy:\'weight\'"' +
										'ng-class="{\'divider\': item.isDivider }"' +
										'ng-if="topNavMenuChildItem.isVisible">' +
											'<span ng-switch="topNavMenuChildItem.type">' +
												'<a ng-switch-when="state" ui-sref="{{ topNavMenuChildItem.state }}" ui-sref-active="active">' +
													'<span class="menu-item-icon fa fa-fw {{ topNavMenuChildItem.iconClass}}"></span>' +
													'<span class="menu-item-text"> {{ topNavMenuChildItem.text }}</span>' +
												'</a>' +
												'<a ng-switch-when="action" ng-click="topNavMenuChildItem.click()">' +
													'<span class="menu-item-icon fa fa-fw {{ topNavMenuChildItem.iconClass}}"></span>' +
													'<span class="menu-item-text"> {{ topNavMenuChildItem.text }}</span>' +
												'</a>' +
												'<a ng-switch-when="href" ng-href="topNavMenuChildItem.href">' +
													'<span class="menu-item-icon fa fa-fw {{ topNavMenuChildItem.iconClass}}"></span>' +
													'<span class="menu-item-text"> {{ topNavMenuChildItem.text }}</span>' +
												'</a>' +
											'</span>' +
									'</li>' +
								'</ul>' +
							'</li>' +
						'</ul>' +
					'</nav>',
		restrict: 'E',
		require: '^ngEasyAdminNav',
		scope: {
		},
		link: function postLink(scope, element, attrs, ngEasyAdminNavController) {

			scope.settings = ngEasyAdminNavController.getTopNavSettings();

		}
	};


})




.directive('ngEasyAdminNav', ['$compile', function ($compile) {

	return {
		template: '',
		restrict: 'E',
		scope: {
			settings: '=',
			data: '@',
			onSidebarGroupClick: '&',
			onBeforeSidebarGroupExpand: '&',
			onAfterSidebarGroupExpand: '&',
			onSideBarNavItemClick: '&',
			onBeforeSideBarNavItemNavigate: '&',
			onAfterSideBarNavItemNavigate: '&'
		},
		controller: ['$scope', function($scope) {
			$scope.topNavSettings = $scope.settings.navSettings.topNavSettings;

			this.getTopNavSettings = function() {
				return $scope.topNavSettings;
			}
		}],


		link: function postLink(scope, element, attrs) {




			//setup, append, and compile topNav
			var topNavElement = angular.element('<ng-easy-top-nav></ng-easy-top-nav>');
			element.append(topNavElement);
			$compile(topNavElement)(scope);





		}
	};
}]);





