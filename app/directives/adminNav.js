'use strict';

angular.module('ngEasy').directive('adminNav', function () {

	return {
		template: '<svg class="bd-chart">' +
		'<path class="line total"></path>' +
		'<path class="line open"></path>' +
		'</svg>',
		restrict: 'E',
		scope: {
			settings: settingsModel
		},
		link: function postLink(scope, element, attrs) {

		}
	};
});