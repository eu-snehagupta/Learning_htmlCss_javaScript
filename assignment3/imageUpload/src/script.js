function upload(){
  var imgcanvas= document.getElementById("canva");
  var fileinput= document.getElementById("upload");
  var image= new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
  // console.log("printing!")
}