var GlobalCharityEvent = GlobalCharityEvent || {};

$(function() {
	/**********
	Event Model
	***********/
	var CharityEvent = Backbone.Model.extend({
		defaults: {
			id: null,
		    name: '',
		    date: '',
		    url: "http://127.0.0.1:5000/event",
		    description: '',
		    charity: '',
		    goal: 0.00,
		    fundsRaised: 0.00, 
		    donors: 0,
		    over: false,
		    accessCode: "DesktopApp"
		}
	});

	GlobalCharityEvent = CharityEvent;
});