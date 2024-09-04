
function establecerDireccion(keyCode){
    arriba=false;
    abajo=false;
    derecha=false;
    izquierda=false;

    // console.log(direccionViborita());

    if (direccionViborita() == "abajo") {
        if (keyCode == 68 || keyCode == 39){
            derecha=true;
            return "derecha"
        }
        else if (keyCode == 65 || keyCode == 37){
            izquierda=true;
            return "izquierda"   
        }
        else if (keyCode == 87 || keyCode == 38){
            return "abajo"
        }
        else if (keyCode == 83 || keyCode == 40){
            return "abajo"
        }
    }
    if (direccionViborita() == "arriba") {
        if (keyCode == 68 || keyCode == 39){
            derecha=true;
            return "derecha"
        }
        else if (keyCode == 65 || keyCode == 37){
            izquierda=true;
            return "izquierda"   
        }
        else if (keyCode == 83 || keyCode == 40){
            return "arriba"
        }
        else if (keyCode == 87 || keyCode == 38){
            return "arriba"
        }
    }

    if (direccionViborita() == "derecha"){
        if (keyCode == 87 || keyCode == 38){
            arriba=true;
            return "arriba"
        }
        else if (keyCode == 83 || keyCode == 40){
            abajo=true;
            return "abajo"
        }
        else if (keyCode == 68 || keyCode == 39){
            derecha=true;
            return "derecha"
        }
        else if (keyCode == 65 || keyCode == 37){
            izquierda=true;
            return "derecha"
        }
    }

    if (direccionViborita() == "izquierda"){
        if (keyCode == 87 || keyCode == 38){
            arriba=true;
            return "arriba"
        }
        else if (keyCode == 83 || keyCode == 40){
            abajo=true;
            return "abajo"
        }
        else if (keyCode == 65 || keyCode == 37){
            izquierda=true;
            return "izquierda"   
        }
        else if (keyCode == 68 || keyCode == 39){
            derecha=true;
            return "izquierda"
        }
    }
}

// que retorne true cuando la viborita pueda comer la manzana y false en caso contrario.
function viboritaPuedeComerManzana(){
    if (posicionEnXDeLaViborita() == posicionEnXDeLaManzana()) {
        if (posicionEnYDeLaViborita() == posicionEnYDeLaManzana()) {
            return true;   
        }
        
    }
    else{
        return false;
    }


}


// Nos está faltando encargarnos del puntaje del juego.

// Implementá el procedimiento aumentarPuntaje() que cumpla con los siguientes requisitos:

// La variable global puntaje debe aumentarse en 1.
// Cada 2 puntos se debe aumentar la variable global nivel.
// Si se aumenta de nivel se deben aumentar la velocidad del juego, para eso debés aumentar en 2 la variable fps.
var cont = 2;
function aumentarPuntaje(){
    puntaje++;    
    if (puntaje == cont) {
        nivel++;
        fps+=2;
        cont += 2;
        
    }
}

// Ahora necesitamos contar con una función llamada perdio() que retorne true si el jugador perdió o false en caso contrario.

// Cualquiera de estas condiciones hacen que el jugador pierda:

// La viborita se fue de los límites de la pantalla.
// La viborita chocó contra si misma (se enredó).

function perdio(){
    if (posicionEnXDeLaViborita() == anchoDeLaVentana()) {
        alert("perdio")
        return true;
    }
    else if (posicionEnYDeLaViborita() == altoDeLaVentana()) {
        alert("perdio")
        return true;
    }
    if (posicionEnXDeLaViborita() == anchoDeLaVentana()-anchoDeLaVentana()-1) {
        alert("perdio")
        return true;
    }
    else if (posicionEnYDeLaViborita() == altoDeLaVentana()-altoDeLaVentana()-1) {
        alert("perdio")
        return true;
    }
    else{
        return false;
    }
    
}



// posicionEnXDeLaViborita(): función que retorna la posición de la cabeza de la viborita en el eje X.
// posicionEnYDeLaViborita(): función que retorna la posición de la cabeza de la viborita en el eje Y.
// posicionEnXDeLaManzana(): función que retorna la posición de la manzana en el eje X.
// posicionEnYDeLaManzana(): función que retorna la posición de la manzana en el eje Y.




// anchoDeLaVentana(): función que retorna el ancho de la ventana del juego.
// altoDeLaVentana(): función que retorna el alto de la ventana del juego.




