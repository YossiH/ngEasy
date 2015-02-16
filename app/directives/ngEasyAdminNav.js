'use strict';

var ngEasyModule = angular.module('ngEasy');

ngEasyModule

.directive('ngEasyTopNav', function ()  {

	return {
		template:   '<nav id="topNavRoot" class="navbar navbar-default navbar-fixed-top ngEasyTopNav" role="navigation">' +
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
							'<li ng-switch="menuGroupItem.type" ng-if="menuGroupItem.isVisible" ng-click="toggleTopNavMenu(menuGroupItem.index);" class="dropdown {{menuGroupItem.collapsedState}}">' +
								'<a ng-switch-when="state" ui-sref="{{ menuGroupItem.state }}" ui-sref-active="active">' +
									'<span class="menu-item-icon fa fa-fw {{ menuGroupItem.iconClass}}"></span>' +
									'<span class="menu-item-text"> {{ menuGroupItem.text }}</span>' +
								'</a>' +
								'<ul ng-switch-when="spacer" style="cursor:default" class="nav navbar-top-links navbar-right">' +
									'<li style="width: {{ menuGroupItem.width }}"></li>' +
								'</ul>' +
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
						'</ul>',
		restrict: 'E',
		require: '^ngEasyAdminNav',
		scope: {
		},
		link: function postLink(scope, element, attrs, ngEasyAdminNavController) {

			scope.settings = ngEasyAdminNavController.getTopNavSettings();
			console.log(scope.settings);

			scope.toggleTopNavMenu = function(idx) {
				angular.forEach(scope.settings.topNavMenuGroups,  function(value, key) {
					if(angular.isObject(value)) {
						if (value.index === idx) {
							value.collapsedState = value.collapsedState === 'open' ? 'closed' : 'open';
						} else {
							value.collapsedState = 'closed';
						}
					}
				} );

			}

		}
	};


})

.directive('ngEasySideNav', function ()  {

		return {
			template:   '<div collapse="{{settings.sideBarState}}">' +
							'<div class="navbar-default sidebar" role="navigation">' +
								'<div class="sidebar-nav navbar-collapse">' +
									'<ul ng-repeat="menuGroupItem in settings.sideBarMenuGroups" class="nav">' +
										'<li ng-switch="menuGroupItem.type" ng-if="menuGroupItem.isVisible" ng-class="menuGroupItem.isCollapsed ? \'\' : \'open\'" ng-click="toggleSideBarMenu(menuGroupItem.index)">' +
											'<a ng-switch-when="state" ui-sref="{{menuGroupItem.state}}" ui-sref-active="active">' +
												'<span class="menu-item-icon fa fa-fw {{ menuGroupItem.iconClass }}"></span>' +
												'<span class="menu-item-text"> {{ menuGroupItem.text }}</span>' +											'</a>' +
											'</a>' +

											'<a ng-switch-when="multiple">' +
												'<span class="fa fa-fw {{ menuGroupItem.iconClass }}"></span>' +
												'<span> {{ menuGroupItem.text }} </span>' +
												'<span class="navbar-right sidebar-arrow fa fa-fw"' +
												'ng-class="menuGroupItem.isCollapsed ? \'fa-chevron-left\' : \'fa-chevron-down\'"></span>' +
											'</a>' +
											'<ul ng-switch-when="multiple" class="nav" ng-class="menuGroupItem.isCollapsed ? \'hidden\' : \'\'">' +
												'<li ng-repeat="menuItem in menuGroupItem.menuItems | orderBy: menuGroupItem.weight" ng-if="menuItem.isVisible">' +
													'<span ng-switch="menuItem.type">' +
														'<a ng-switch-when="state" ui-sref="{{ menuItem.state }}" ui-sref-active="inactive">' +
															'<span class="menu-item-icon fa fa-fw {{ menuItem.iconClass }}"></span>' +
															'<span class="menu-item-text"> {{ menuItem.text }}</span>' +
														'</a>' +
														'<a ng-switch-when="action" ng-click="menuItem.click()">' +
															'<span class="menu-item-icon fa fa-fw {{ menuItem.iconClass}}"></span>' +
															'<span class="menu-item-text"> {{ menuItem.text }}</span>' +
														'</a>' +
														'<a ng-switch-when="href" ng-href="menuGroupItemChild.href">' +
															'<span class="menu-item-icon fa fa-fw {{ menuItem.iconClass }}"></span>' +
															'<span class="menu-item-text"> {{ menuItem.text }}</span>' +
														'</a>' +
													'</span>' +
												'</li>' +
											'</ul>' +
										'</li>' +
									'</ul>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</nav>',

		restrict: 'E',
			require: '^ngEasyAdminNav',
			scope: {
			},
			link: function postLink(scope, element, attrs, ngEasyAdminNavController) {

				scope.settings = ngEasyAdminNavController.getSideNavSettings();
				console.log(scope.settings);


				scope.toggleSideBarMenu = function(idx) {
					angular.forEach(scope.settings.sideBarMenuGroups,  function(value, key) {
						if(angular.isObject(value)) {
							if (value.index === idx) {
								value.isCollapsed = value.isCollapsed === false ? true : false;
							} else {
								value.isCollapsed = true;
							}
						}
					} );

				}

			}
		};


	})


	.directive('ngEasyAppArea', function ()  {

		return {
			template:   '<div id="ng-easy-app-area">' +
						'<div class="row">' +
						'<div class="col-lg-12">' +

							'<tabset justified="true">' +
							'<tab heading="Justified">' +
			'' +
			'</tab>' +
							'<tab heading="SJ">Short Labeled Justified content</tab>' +
							'<tab heading="Long Justified">Long Labeled Justified content</tab>' +
							'</tabset>' +

						'</div>' +
						'</div>' +
						'</div>',

			restrict: 'E',
			require: '^ngEasyAdminNav',
			scope: {
			},
			link: function postLink(scope, element, attrs, ngEasyAdminNavController) {



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
			$scope.sideBarSettings = $scope.settings.navSettings.sideBarSettings;

			this.getTopNavSettings = function() {
				return $scope.topNavSettings;
			};

			this.getSideNavSettings = function() {
				return $scope.sideBarSettings;
			};


		}],


		link: function postLink(scope, element, attrs) {




			//setup, append, and compile topNav
			var topNavElement = angular.element('<ng-easy-top-nav></ng-easy-top-nav>');
			element.append(topNavElement);
			$compile(topNavElement)(scope);
			var sideNavElement = angular.element('<ng-easy-side-nav></ng-easy-side-nav>');
			element.append(sideNavElement);
			$compile(sideNavElement)(scope);
			var appArea = angular.element('<ng-easy-app-area></ng-easy-app-area>');
			element.append(appArea);
			$compile(appArea)(scope);


		}
	};
}]);





