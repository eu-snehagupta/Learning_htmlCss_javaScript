var img;
function upload(){
   var fileinput= document.getElementById("upload");
  img = new SimpleImage(fileinput);
  var imgcanvas1= document.getElementById("canva1");
  img.drawTo(imgcanvas1);
}
function makeGrey(){
  for(var pixel of img.values()){
    var avg= (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var imgcanvas2= document.getElementById("canva2");
  img.drawTo(imgcanvas2);
}