import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Meteor.startup(() => {
  // code to run on server at startup
});


export const Post = new Mongo.Collection('post')
Meteor.methods({
  addPost : function(content){
    if(!Meteor.userId()){
      throw new Meteor.Error('not-authorized', 'you are not signed in')
    }
    var username = Meteor.user().username;

    Post.insert({content: content, created: new Date(),username : username});
  }
})
