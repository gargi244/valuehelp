/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"value_help/valuehelp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});