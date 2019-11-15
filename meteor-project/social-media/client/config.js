// Accounts.ui.config({
//   passwordSignupFields: 'USERNAME_ONLY'
// });
Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_likes'],
    github: ['user', 'repo']
  },
  requestOfflineToken: {
    google: true
  },
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Meteor.methods({
  addPost : function(content){
    if(!Meteor.userId()){
      throw new Meteor.Error('not-authorized', 'you are not signed in')
    }
    var username = Meteor.user().username;

    Post.insert({content: content, created: new Date(),username : username});
  },
  follow: function(post){
    console.log(post);
  }
})
