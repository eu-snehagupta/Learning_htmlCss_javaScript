var image= null;
var image0= null;
var image1= null;
var image2= null;
var imgcanvas= document.getElementById("can");
function upload(){
  var fileinput= document.getElementById("imgfile");
  image= new SimpleImage(fileinput);
  image0= new SimpleImage(fileinput);
  image1= new SimpleImage(fileinput);
  image2= new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}
function clearCanvas(){
  var canvascontext =imgcanvas.getContext("2d");              
  canvascontext.clearRect(0,0,imgcanvas.width,imgcanvas.height);  
}
function resetImage(){
  if (image0 == null || !image0.complete()){
    alert("Image not loaded!");
  }else{
   clearCanvas();
   image0.drawTo(imgcanvas);
  }
}
function greyScale(){
  if (image1 == null || !image1.complete()){
    alert("Image not loaded!");
  }else {
    clearCanvas();
	// var img1= image;
    for(var pixel of image1.values()){
      var avg= (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
  } 
  image1.drawTo(imgcanvas);
  }
}
function redFilter(){
  if (image2 == null || !image2.complete()){
    alert("Image not loaded!");
  }else 
  {
    clearCanvas();
	// var img2= image;
    for(var pixel of image2.values()){
    pixel.setRed(255)} 
    image2.drawTo(imgcanvas);
  }
}
