Template.input.events = {
  'keydown input#message' : function (event) {
    if(event.which == 13) { // 13 is the enter key event
      var name = Meteor.user().profile.name;
      name = name.split(' ').slice(0, -1).join(' ');
      var message = document.getElementById('message');

      if(message.value != '') {
        Messages.insert({
          name: name,
          message: message.value,
          time: Date.now(),
          userId: Meteor.user()._id,
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
}