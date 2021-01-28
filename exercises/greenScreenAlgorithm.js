function greenScreenAlgorithm(fgImage, bgImage){
    var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight())
    
    for(var pixel of fgImage.values()){
        var x = pixel.getX()
        var y = pixel.getY()
        if(pixel.getGreen()> pixel.getRed() + pixel.getBlue()){
            var newPixel = bgImage.getPixel(x,y)
            output.setPixel(x,y,newPixel)
            } else {
                output.setPixel(x,y,pixel)
            }
        }
    return output
}