var GlobalEventView = GlobalEventView || {};

$(function() {
	/*********
	Event View
	**********/
	var EventView = Backbone.View.extend({
		
		tagName: "tr",

		template: _.template($("#event-template").html()),

		events: {
			"dblclick .date"		: "editDate",
			"dblclick .name"		: "editName",
			"dblclick .charity"		: "editCharity",
			"dblclick .goal"		: "editGoal",
			"dblclick .fundsRaised"	: "editFundsRaised",
			"dblclick .donors"		: "editDonors",

			"keypress .date-edit"		: "updateOnEnter",
			"keypress .name-edit"		: "updateOnEnter",
			"keypress .charity-edit"	: "updateOnEnter",
			"keypress .goal-edit"		: "updateOnEnter",
			"keypress .fundsRaised-edit": "updateOnEnter",
			"keypress .donors-edit"		: "updateOnEnter",

			"blur .date-edit"		: "closeDate",
			"blur .name-edit"		: "closeName",
			"blur .charity-edit"	: "closeCharity",
			"blur .goal-edit"		: "closeEdit",
			"blur .fundsRaised-edit": "closeFundsRaised",
			"blur .donors-edit"		: "closeDonors",

			"click .delete"			: "deleteEvent"
		},

		initialize: function() {
      		this.listenTo(this.model, 'change', this.render);
      		this.listenTo(this.model, 'destroy', this.remove);
    	},

    	render: function() {
    		this.$el.html(this.template(this.model.toJSON()));
    		this.dateInput = this.$('.date-edit');
    		this.nameInput = this.$('.name-edit');
    		this.charityInput = this.$('.charity-edit');
    		this.goalInput = this.$('.goal-edit');
    		this.fundsRaisedInput = this.$('.fundsRaised-edit');
    		this.donorsInput = this.$('.donors-edit');
    		return this;
    	},

    	editDate: function() {
    		this.$el.addClass("editing-date");
    		this.dateInput.focus();
    	},

    	editName: function() {
    		this.$el.addClass("editing-name");
    		this.nameInput.focus();
    	},

    	editCharity: function() {
    		this.$el.addClass("editing-charity");
    		this.charityInput.focus();
    	},

    	editGoal: function() {
    		this.$el.addClass("editing-goal");
    		this.goalInput.focus();
    	},

    	editFundsRaised: function() {
    		this.$el.addClass("editing-fundsRaised");
    		this.fundsRaisedInput.focus();
    	},

    	editDonors: function() {
    		this.$el.addClass("editing-donors");
    		this.donorsInput.focus();
    	},

    	closeDate: function() {
    		var value = this.dateInput.val();
      		if (value) {
      			var d = new Date(value)
      			var isoDate = d.toISOString().split("T");
        		this.model.save({date: isoDate[0]});
        		this.$el.removeClass("editing-date");
      		}
    	},

    	closeName: function() {
    		var value = this.nameInput.val();
      		if (value) {
        		this.model.save({name: value});
        		this.$el.removeClass("editing-name");
      		}
    	},

    	closeCharity: function() {
    		var value = this.charityInput.val();
      		if (value) {
        		this.model.save({charity: value});
        		this.$el.removeClass("editing-charity");
        	}
    	},

    	closeGoal: function() {
    		var value = this.goalInput.val();
      		if (value) {
        		this.model.save({goal: value});
        		this.$el.removeClass("editing-goal");
      		}
    	},

    	closeFundsRaised: function() {
    		var value = this.fundsRaisedInput.val();
      		if (value) {
        		this.model.save({fundsRaised: value});
        		this.$el.removeClass("editing-fundsRaised");
      		}
    	},

    	closeDonors: function() {
    		var value = this.donorsInput.val();
      		if (value) {
        		this.model.save({donors: value});
        		this.$el.removeClass("editing-donors");
      		}
    	},

    	updateOnEnter: function(e) {
      		if (e.keyCode == 13) {
      			this.closeDate();
      			this.closeName();
      			this.closeCharity();
      			this.closeGoal();
      			this.closeFundsRaised();
      			this.closeDonors();
      		}
    	},

    	deleteEvent: function() {
    		this.model.destroy();
    	}
	});

	GlobalEventView = EventView;

});