var canvas1= document.getElementById("div1");
var element2= document.getElementById("div2");
function dolime() {
  canvas1.style.backgroundColor= "lime";
  var context = canvas1.getContext("2d");
  
  context.fillStyle = "yellow";
  context.fillRect(10,10,60,60);
  
  context.fillStyle = "black";
  context.font = "20px Arial";
  context.fillText("Hi", 15,45);
  }