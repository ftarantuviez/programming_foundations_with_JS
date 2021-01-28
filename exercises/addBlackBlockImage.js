function setBlack(pixel) {
    pixel.setBlue(0)
    pixel.setRed(0)
    pixel.setGreen(0)
    return pixel
}

function addBlackBorderImage(image, thickness){
    var width = panda.getWidth()
    var height = panda.getHeight()
    var output = new SimpleImage(width, height)
    
    for(var pixel of image.values()){
        var x = pixel.getX()
        var y = pixel.getY()
        var borderLimitWidth = Math.abs(width - thickness)
        var borderLimitHeight = Math.abs(height - thickness)
        
        if(x>=borderLimitWidth || x<=thickness || 
           y>=borderLimitHeight || y<=thickness) 
           
           output.setPixel(x,y,setBlack(pixel))

        else output.setPixel(x,y,pixel)
    }
    return output
    
}