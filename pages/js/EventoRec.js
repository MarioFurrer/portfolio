function cambiarcolor(){
    function numeroaleatorio(superior, inferior){
        var numposibilidades = (superior + 1) - inferior;
        var aleat = Math.random() * numposibilidades;
        aleat = Math.floor(aleat);
        aleat = (inferior + aleat);
        return aleat
    }
     
    function coloraleatorio(){
        coloraleat="#"
        hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
        var inferior = 0;
        var superior = hexadecimal.length-1;
        for (i=0;i<6;i++){
           coloraleat += hexadecimal[numeroaleatorio(superior, inferior)];
        }
        return coloraleat
    }
    
    colorin = coloraleatorio()
    
    rojo = colorin.substring(1,3)
    verde = colorin.substring(3,5)
    azul = colorin.substring(5,7)
       
    introjo = parseInt(rojo,16)
    intverde = parseInt(verde,16)
    intazul = parseInt(azul,16)
       
    document.bgColor=colorin
    
    document.write('<body bgcolor="' + colorin + '">')
}

setInterval(cambiarcolor, 500);
