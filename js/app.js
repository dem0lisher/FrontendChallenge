(function(){
	var app=angular.module('portal', []);

	app.controller('PortalController', function(){
		this.sections = sections;
	});

	var sections = [
		{
			title: "Stories"
		},
		{
			title: "Comments"
		},
		{
			title: "Show"
		},
		{
			title: "Ask"
		},
		{
			title: "Jobs"
		}
	];

})();