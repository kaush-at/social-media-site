import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Sales = new Mongo.Collection('sales');


// if(Meteor.isClient){
//   Template.sales.helpers({
//     sales:function(){
//         return Sales.find();
//     }
//
//   });
// }
