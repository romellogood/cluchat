Messages = new Meteor.Collection('messages');

Messages.allow({
	insert: function () {
    return Meteor.userId() != null;
	},
});