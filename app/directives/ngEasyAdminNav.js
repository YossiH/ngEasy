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


							'<ul ng-repeat="menuGroupItem in settings.topNavMenuGroups" class="nav navbar-top-links {{ settings.topNavMenuGroups.position }}">' +
								'<li ng-switch="menuGroupItem.type" ng-if="menuGroupItem.isVisible" class="dropdown">' +
									'<a ng-switch-when="state" ui-sref="{{ menuGroupItem.state }}" ui-sref-active="active">' +
										'<span class="menu-item-icon fa fa-fw {{ menuGroupItem.iconClass}}"></span>' +
										'<span class="menu-item-text"> {{ menuGroupItem.text }}</span>' +
									'</a>' +
									'<a ng-switch-when="action" ng-click="menuGroupItem.click()">' +
										'<span class="menu-item-icon fa fa-fw {{ menuGroupItem.iconClass}}"></span>' +
										'<span class="menu-item-text"> {{ menuGroupItem.text }}</span>' +
									'</a>' +
									'<a ng-switch-when="href" ng-href="menuGroupItem.href">' +
										'<span class="menu-item-icon fa fa-fw {{ menuGroupItem.iconClass}}"></span>' +
										'<span class="menu-item-text"> {{ menuGroupItem.text }}</span>' +
									'</a>' +
									'<a ng-switch-when="multiple" class="dropdown-toggle">' +
										'<span class="fa fa-fw {{ menuGroupItem.iconClass }}"></span>' +
										'<span> {{ menuGroupItem.text }} </span>' +
										'<span class="fa fa-caret-down"></span>' +
									'</a>' +
									'<ul ng-switch-when="multiple" class="dropdown-menu">' +
										'<li ng-repeat="menuItem in menuGroupItem.menuItems | orderBy: menuGroupItem.weight"' +
											'ng-if="menuItem.isVisible">' +
												'<span ng-switch="menuItem.type">' +
													'<a ng-switch-when="state" ui-sref="{{ menuItem.state }}" ui-sref-active="active">' +
														'<span class="menu-item-icon fa fa-fw {{ menuItem.iconClass}}"></span>' +
														'<span class="menu-item-text"> {{ menuItem.text }}</span>' +
													'</a>' +
													'<a ng-switch-when="action" ng-click="menuItem.click()">' +
														'<span class="menu-item-icon fa fa-fw {{ menuItem.iconClass}}"></span>' +
														'<span class="menu-item-text"> {{ menuItem.text }}</span>' +
													'</a>' +
													'<a ng-switch-when="href" ng-href="menuGroupItemChild.href">' +
														'<span class="menu-item-icon fa fa-fw {{ menuItem.iconClass}}"></span>' +
														'<span class="menu-item-text"> {{ menuItem.text }}</span>' +
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
			console.log(scope.settings);

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





