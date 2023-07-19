document.addEventListener('DOMContentLoaded', function() {
var img=["agua", "astronomia", "estrella", "fantasia", "playa"];
var imgUsadas=[];
var tablero1;

var buttonInicio= document.getElementById("inicio");
buttonInicio.addEventListener("click", function(){
    tablero();
})

var buttonReinicio = document.getElementById("reinicio");
    buttonReinicio.addEventListener("click", function() {
    // Recargar la página para reiniciar el juego
    location.reload();
    });

function tablero(){
    var imagenes = img.reduce((prev, item) =>  //duplica las imagnes del array
    { prev.push(item); prev.push(item); return prev; }, []);
    tablero1=[];
    while(imagenes.length){
        tablero1.push(imagenes.splice(Math.floor(Math.random() * imagenes.length), 1)[0]);
    }
    var contenedor= document.getElementById("tablero");
    for(let i=0;i<tablero1.length;i++){
        var cartaOriginal= document.createElement("img");
        cartaOriginal.className="carta";
        cartaOriginal.dataset.indexCarta=i;
        contenedor.appendChild(cartaOriginal);
        cartaOriginal.addEventListener("click", mostrarCarta);

    }

}

function mostrarCarta(){
    var indexCarta= parseInt(this.dataset.indexCarta);
    this.className=tablero1[indexCarta];
    imgUsadas.push({cartaOriginal: this, imgIndex: indexCarta});
    setTimeout(comprobarParejas, 2000);

}
function comprobarParejas(){
    if(imgUsadas.length<2){return;}
    if(tablero1[imgUsadas[0].imgIndex]===tablero1[imgUsadas[1].imgIndex]){
        imgUsadas[0].cartaOriginal.removeEventListener("click",mostrarCarta);
        imgUsadas[1].cartaOriginal.removeEventListener("click",mostrarCarta);
    }else{
        imgUsadas[0].cartaOriginal.className="carta";
        imgUsadas[1].cartaOriginal.className="carta";
        }
    
    imgUsadas=[];

}
});