//alert("Hello World...!!!");

// var x = 10;
// var text = "This is a text";
// console.log(x + text);
//
// var player= {
//   name : "super",
//   lives : 10,
//   cordinates :"x,y,z"
// };
//
// console.log(player);
// console.log(player.name)
// console.log(player['lives']);
// var a;
//  a = text.slice(6,9);
// var fly = function(vari){
//   console.log(vari +" you are flying");
//
// }
// fly("x-man");
//
//  player = {
//    name:"pablo",
//    energy : 10,
//    wepons : ["sword", "knife", "bow"],
//    addWepon : function(newWepon){
//      this.wepons.push(newWepon);
//    }
//  };
// player.addWepon("axe");
// player.addWepon = fly("superman");
//
//
//
// console.log(player.wepons);

 //alert(player.wepons[2])
 window.addEventListener('load',function(){
   this.console.log("document loaded");
   var form =document.getElementById('story-form');
   form.addEventListener("submit", function(ev){
     ev.preventDefault();
     var name = document.getElementById("name").value
     document.getElementById("feedbackarea").innerHTML = "hello " + name
     //console.log(event);
   });
 });


var Monster = function(){
  console.log("a new monster is being creating")
  this.energy = Math.random()*100;
};

var mon1=new Monster();
