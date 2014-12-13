Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('messages'); }
});

Router.route('/', {name: 'chatroom'});

Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params

  if (!Meteor.user()) {
    // if the user is not logged in, render the Login template
    this.render('welcome');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    //from running
    this.next();
  }
});