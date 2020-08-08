var image= null;
var image0= null;
var image1= null;
var image2= null;
var image3= null;
var image4= null;
var imgcanvas= document.getElementById("can");
function upload(){
  var fileinput= document.getElementById("imgfile");
  image= new SimpleImage(fileinput);
  image0= new SimpleImage(fileinput);
  image1= new SimpleImage(fileinput);
  image2= new SimpleImage(fileinput);
  image3= new SimpleImage(fileinput);
  image4= new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}
function clearCanvas(){
  var canvascontext =imgcanvas.getContext("2d");              
  canvascontext.clearRect(0,0,imgcanvas.width,imgcanvas.height);  
}
function imageIsLoaded(img){
	if (img != null && img.complete()){
    clearCanvas();
	return true;
  } else {
    alert("Image not loaded!");
	return false;
  }
}
function resetImage(){
  if (imageIsLoaded(image0)){
   image0.drawTo(imgcanvas);
   upload()
  }
}
function greyScale(){
  if (imageIsLoaded(image1)){
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
  if (imageIsLoaded(image2)){
    for(var pixel of image2.values()){
    var avg= (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
       if (avg< 128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
        } else {
          pixel.setRed(255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(2*avg-255);
        }
	  } 
    image2.drawTo(imgcanvas);
  }
}
function rainbow(){
	if (imageIsLoaded(image3)){
		for(var pixel of image3.values()){
			var avg= (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
				if (avg< 128){
						if(pixel.getY()<=1/7*image3.getHeight()){
							pixel.setRed(2*avg);
							pixel.setGreen(0);
							pixel.setBlue(0);
						} else if((pixel.getY()> 1/7*image3.getHeight()) && (pixel.getY()<=2/7*image3.getHeight())){
							pixel.setRed(2*avg);
							pixel.setGreen(0.8*avg);
							pixel.setBlue(0);
						} else if((pixel.getY()> 2/7*image3.getHeight()) && (pixel.getY()<=3/7*image3.getHeight())){
							pixel.setRed(2*avg);
							pixel.setGreen(2*avg);
							pixel.setBlue(0);
						} else if((pixel.getY()> 3/7*image3.getHeight()) && (pixel.getY()<=4/7*image3.getHeight())){
							pixel.setRed(0);
							pixel.setGreen(2*avg);
							pixel.setBlue(0);
						} else if((pixel.getY()> 4/7*image3.getHeight()) && (pixel.getY()<=5/7*image3.getHeight())){
							pixel.setRed(0);
							pixel.setGreen(0);
							pixel.setBlue(2*avg);
						} else if((pixel.getY()> 5/7*image3.getHeight()) && (pixel.getY()<=6/7*image3.getHeight())){
							pixel.setRed(0.8*avg);
							pixel.setGreen(0);
							pixel.setBlue(2*avg);
						} else{
							pixel.setRed(1.6*avg);
							pixel.setGreen(0);
							pixel.setBlue(1.6*avg);
						}
				} else{
						if (pixel.getY()<=1/7*image3.getHeight()){
							pixel.setRed(255);
							pixel.setGreen(2*avg-255);
							pixel.setBlue(2*avg-255);
						} else if ((pixel.getY()>1/7*image3.getHeight()) && (pixel.getY()<=2/7*image3.getHeight())){	
							pixel.setRed(255);
							pixel.setGreen(1.2*avg-51);
							pixel.setBlue(2*avg-255);
						} else if ((pixel.getY()>2/7*image3.getHeight()) && (pixel.getY()<=3/7*image3.getHeight())){
							pixel.setRed(255);
							pixel.setGreen(255);
							pixel.setBlue(2*avg-255);
						} else if ((pixel.getY()>3/7*image3.getHeight()) && (pixel.getY()<=4/7*image3.getHeight())){
							pixel.setRed(2*avg-255);
							pixel.setGreen(255);
							pixel.setBlue(2*avg-255);
						} else if ((pixel.getY()>4/7*image3.getHeight()) && (pixel.getY()<=5/7*image3.getHeight())){
							pixel.setRed(2*avg-255);
							pixel.setGreen(2*avg-255);
							pixel.setBlue(255);
						} else if ((pixel.getY()>5/7*image3.getHeight()) && (pixel.getY()<=6/7*image3.getHeight())){
							pixel.setRed(0.8*avg);
							pixel.setGreen(2*avg-255);
							pixel.setBlue(255);
						} else{
							pixel.setRed(0.4*avg+153);
							pixel.setGreen(2*avg-255);
							pixel.setBlue(1.6*avg);
						}
					}
		}					
			image3.drawTo(imgcanvas); 
	}
}
function blurImage(){
	if (imageIsLoaded(image4)){
		output= new SimpleImage(image4.getWidth(),image4.getHeight());
		var r0= Math.random();
		console.log("r0-->"+r0);
			for(var pixel of image4.values()){
				if (r0<=0.5){
					output.setPixel(pixel.getX(),pixel.getY(),pixel);
				} else{
					var r1= Math.floor((Math.random() * 10) + 1);
					var r2= Math.floor((Math.random() * 10) + 1);
					console.log("r1-->"+r1);
					console.log("r2-->"+r2);
					if (pixel.getX()+ r1<=image4.getWidth()){
						var newX= pixel.getX()+ r1;
					} else{
						var newX= pixel.getX()- r1;
					}
					if (pixel.getY()+ r2<=image4.getHeight()){
						var newY= pixel.getY()+ r2;
					} else{
						var newY= pixel.getY()- r2;
					}
					output.setPixel(pixel.getX(),pixel.getY(),image4.getPixel(newX,newY));
					}
				} output.drawTo(imgcanvas); 
			}
		}

