Post = new Mongo.Collection('post')

Meteor.methods({
  addPost : function(content){
    if(!Meteor.userId()){
      throw new Meteor.Error('not-authorized', 'you are not signed in')
    }
    var username = Meteor.user().username;

    Post.insert({content: content, created: new Date(),username : username});
  }
})
