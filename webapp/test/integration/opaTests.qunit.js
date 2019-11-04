/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"value_help/valuehelp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});