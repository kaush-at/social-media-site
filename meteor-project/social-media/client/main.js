import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import './main.html';

Post = new Mongo.Collection('post')

Template.postList.helpers({
  posts :function() {
    return Post.find({},{sort:{created: -1}});
  },
});

Template.postForm.events({
  'submit form' :function(event) {
    event.preventDefault();
    var content = document.getElementById('content').value;

    //Meteor.call('addPost', content)
    var username = Meteor.user().username;

    Post.insert({content: content, created: new Date(),username : username});
    event.target.reset();
  },
});


Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_likes'],
    github: ['user', 'repo']
  },
  requestOfflineToken: {
    google: true
  },
  // passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  passwordSignupFields: 'USERNAME_ONLY'
});

// Meteor.methods({
//   addPost : function(content){
//     if(!Meteor.userId()){
//       throw new Meteor.Error('not-authorized', 'you are not signed in')
//     }
//     var username = Meteor.user().username;
//
//     Post.insert({content: content, created: new Date(),username : username});
//   }
// })
