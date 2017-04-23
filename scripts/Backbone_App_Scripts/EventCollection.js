var AllEvents = AllEvents || {};

$(function() {
	/***************
	Event Collection
	****************/
	var EventsCollection = Backbone.Collection.extend({

		model: GlobalCharityEvent,

		url: "/event",

		comparator: function(m) {
			var date = new Date(-m.get('date'));
        	return date.getTime();
    	}
	});

	// Create global collection of **EventsCollection**.
	AllEvents = new EventsCollection;
});