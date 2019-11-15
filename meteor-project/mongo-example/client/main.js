import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import './main.html';


Sales = new Mongo.Collection('sales');

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    var num = Sales.find().count();

    if(num === 0) {
      var qty, prodIndex;
      var productOptions = ['red', 'green', 'orange', 'purple', 'blue', 'white'];
      for(var i = 0; i < 400; i++) {

        qty = Math.ceil(1 + Math.random() * 20);
        prodIndex = Math.floor(Math.random() * productOptions.length);

        Sales.insert({
          qty: qty,
          total: 100 * qty,
          time: new Date(),
          products: productOptions.slice(0, prodIndex)
        });
      }
    }
  });
}

// if(Meteor.isClient){
//   Template.sales.helpers({
//     sales: function(){
//         return Sales.find();
//     }
//
//   });
// }
Template.salesTemplate.helpers({
  sales: function(){
      return Sales.find(
        {
          total : {$gt:1000},
          qty : {$lt:15}
        },
        {
          sort :{qty:1},
          limit:10
          // fields :{qty:0} => this makes quantity field data not to show
          //skip : 7 => skip first 7 result
        }
    );
  },
});
