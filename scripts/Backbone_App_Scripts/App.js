var App = App || {};
$(function() {
	var AppView = Backbone.View.extend({

		el: "main",

		eventTable: $("#events-table-body"),

		events: {
			"click #add-event-btn": "addEvent"
		},

		rowColor: "tr-odd",

		initialize: function() {
			this.newDateInput = this.$("#new-date");
			this.newNameInput = this.$("#new-name");
			this.newDescInput = this.$("#new-desc");
			this.newCharityInput = this.$("#new-charity");
			this.newGoalInput = this.$("#new-goal");
			this.emailInput = this.$("#admin-email");
			this.passwordInput = this.$("#admin-password");

			this.listenTo(AllEvents, 'add', this.addOne);
			this.listenTo(AllEvents, 'reset', this.addAll);

			AllEvents.fetch()
			this.render();
		},

		addOne: function(newEvent) {
      		var view = new GlobalEventView({model: newEvent});
      		view.$el.addClass(this.rowColor);
      		if (this.rowColor == "tr-odd") {
      			this.rowColor = "tr-even";
      		} else {
      			this.rowColor = "tr-odd";
      		}
      		this.eventTable.append(view.render().el);
    	},

    	addAll: function() {
    		AllEvents.each(this.addOne, this);
    	},

    	addEvent: function() {
    		var newDate = this.newDateInput.val();
			var newName = this.newNameInput.val();
			var newDescription = this.newDescInput.val();
			var newCharity = this.newCharityInput.val();
			var newGoal = this.newGoalInput.val();

    		if (!(newDate && newName && newCharity && newGoal)) return;

    		AllEvents.create({
      			id: null,
		    	name: newName,
		    	date: newDate,
		    	description: newDescription,
		    	charity: newCharity,
		    	goal: newGoal,
		    	fundsRaised: 0, 
		    	donors: 0,
		    	over: false
      		});

      		this.newNameInput.val('');
      		this.newDateInput.val('');
      		this.newDescInput.val('');
      		this.newCharityInput.val('');
      		this.newGoalInput.val('');
    	}
	});

	App = new AppView;

	// a function to aid to getting a cookie's value.
	function getCookie(cname) {
	    var name = cname + "=";
	    var decodedCookie = decodeURIComponent(document.cookie);
	    var ca = decodedCookie.split(';');
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}
});