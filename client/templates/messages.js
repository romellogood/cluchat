Template.messages.helpers({
	messages: function() {
		return Messages.find({}, { sort: { time: -1}});
	},
	ownPost: function() {
		return this.userId === Meteor.userId();
	},
});