PartKeeprMobile.ServerEditor = Ext.extend(Ext.form.FormPanel, {
	initComponent: function () {
		this.items = [
				{
				    xtype: 'textfield',
				    name : 'name',
				    label: i18n('Name')
				},
				new Ext.form.Url({
					name: 'server',
					label: i18n("Server URL")
				}),
				new Ext.form.Select({
					label: i18n("Protocol"),
					options: [{
						text: 'http',
						value: 'http'
					}, {
						text: 'https',
						value: 'https'
					}]
				}),
				new Ext.Button({
					scope: this,
					handler: function () {
							this.fireEvent("serverSave", this);
					},
					text: 'Save',
					ui: 'confirm',
					style: 'margin-top: 1.5em'
				})
		              ];
				
		PartKeeprMobile.ServerEditor.superclass.initComponent.call(this);
	}
});