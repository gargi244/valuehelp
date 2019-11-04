sap.ui.define([
			"sap/ui/core/mvc/Controller"
		], function (Controller) {
			"use strict";
			return Controller.extend("value_help.valuehelp.controller.View1", {
					onValueHelp: function (oEvent) {
						var id = oEvent.getParameters().id.split("--")[2];
						var oDialog = new sap.ui.xmlfragment("value_help.valuehelp.fragment.selectdialog", this);
						this.getView().addDependent(oDialog);
						if (id == "input") {
							oDialog.bindAggregation("items", {
								path: "country>/country",
								template: new sap.m.StandardListItem({
									title: "{country>countryname}"
								})
							});
						}
						if (id == "input1") {
							oDialog.bindAggregation("items", {
								path: "city>/city",
								template: new sap.m.StandardListItem({
									title: "{city>cityname}"
								})
							});
						}
						oDialog.open();
					},
					_handleValueHelpClose: function (evt) {
						var id = evt.getParameters().id.split("--")[2];
						var oSelectedItem = evt.getParameter("selectedItem");
						if (oSelectedItem) {
							if (id == "input") {
								var productInput = this.byId("input");
								productInput.setValue(oSelectedItem.getTitle());
							}
							else {
								var productInput = this.byId("input1");
								productInput.setValue(oSelectedItem.getTitle());
							}
							evt.getSource().getBinding("items").filter([]);
						}
					}
				}
			);
		});