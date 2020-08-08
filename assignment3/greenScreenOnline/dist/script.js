var fgimg= null;
var bgimg= null;
var fgimgcanvas;
var bgimgcanvas;

function fgupload(){
   var fgfileinput= document.getElementById("fgfile");
  fgimgcanvas= document.getElementById("fgcan");
  fgimg = new SimpleImage(fgfileinput);
  fgimg.drawTo(fgimgcanvas);
}
function bgupload(){
   var bgfileinput= document.getElementById("bgfile");
  bgimgcanvas= document.getElementById("bgcan");
  bgimg = new SimpleImage(bgfileinput);
  bgimg.drawTo(bgimgcanvas);
}
function clearCanvas(){
  var fgcanvascontext =fgimgcanvas.getContext("2d");
  var bgcanvascontext =bgimgcanvas.getContext("2d");
  fgcanvascontext.clearRect(0,0,fgimgcanvas.width,fgimgcanvas.height);  bgcanvascontext.clearRect(0,0,bgimgcanvas.width,bgimgcanvas.height);
}
function greenScreen(){
  var output = new SimpleImage(fgimg.getWidth(),fgimg.getHeight());
  for(var pixel of fgimg.values()){
    var x= pixel.getX();
    var y= pixel.getY();
    if(pixel.getGreen()>pixel.getRed()+pixel.getBlue()){
      var bgpixel= bgimg.getPixel(x,y); 
      output.setPixel(x,y,bgpixel);
    }else{
      output.setPixel(x,y,pixel);
    }
  }
  output.drawTo(fgimgcanvas);
}
function compose(){
  if (fgimg == null || !fgimg.complete()){
    alert("foreground image not loaded!");
  }
  if (bgimg == null || !bgimg.complete()){
    alert("background image not loaded!");
  }else{
    clearCanvas();
    greenScreen();
  }
}