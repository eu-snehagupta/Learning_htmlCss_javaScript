var element1 = document.getElementById("div1");
   var element2 = document.getElementById("div2");
function changecolor(){ 
   if(element1.className == "helloclass"){
     element1.className = "changetogrey";
     element2.className = "changetowhite";
   }
  else{
    element1.className = "helloclass";
   element2.className = "hieclass";
  }
 }
function changetext(){
  if (element1.innerHTML == "Hello!"){
     element1.innerHTML = "Hej!";
     element2.innerHTML = "Tjena!";
    }
  else {
     element1.innerHTML = "Hello!";
     element2.innerHTML = "Hie!";
  }
}
function dochange1(){
  var txt;
  var choice = confirm('confirmed using JavaScript');
  if (choice == true) {
  txt = "You pressed OK!";
}
else{
  txt = "Are you sure you want to cancel?";
}
  document.getElementById("demo").innerHTML = txt;
}
function dochange2(){
  alert('clicked using JavaScript');
}