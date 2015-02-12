'use strict';

/* We need to tell jshint what variables are being exported */
/* global ngEasy: true,
 adminNav: true
 */

////////////////////////////////////

/**
 * @ngdoc module
 * @name ngEasy
 * @module ngEasy
 * @description
 *
 * # ngEasy (core module)
 * The ngEasy module defines namespaces, and ties together all ngEasy library components.
 * The module also contains any helper/common code to all components. The table below
 * lists a high level breakdown of each of the services/factories, filters, directives and testing
 * components available within this core module.
 *
 * <div doc-module-components="ng"></div>
 */

// Globals go here
// Add one line description for each global
// var GLOBAL_VAR = 'value';

/**
 * @ngdoc function
 * @name ngEasy.sampleFunction
 * @module ngEasy
 * @kind function
 *
 * @description describe function.
 * @param {type} type parameter description.
 * @returns {type} return value description.
 */
//var exampleFunction = function(parameter...) {return function code; return 'someValue';};


var
	msie,             // holds major version number for IE, or NaN if UA is not IE.
	jqLite,           // delay binding since jQuery could be loaded after us.
	jQuery,           // delay binding
	slice             = [].slice,
	splice            = [].splice,
	push              = [].push,
	toString          = Object.prototype.toString,
	ngMinErr          = minErr('ng'),

	/** @name angular */
	ngEasy           = window.ngEasy || (window.ngEasy = {}),
	ngEasyModule;

