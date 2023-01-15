let cuello;
let color;
let orejas;
let trompa;
let tazaAprendizaje;

//Cambia la imagen por una nueva imagen aleatoria
function CambiarImagen() {
    let imagen = document.getElementById("imagen");
    let numImagen = Math.floor(Math.random() * 101); //Genera un numero aleatorio entre 0 y 100
    imagen.src = "img/animal ("+numImagen+").jpg";  //Cambia la imagen por una nueva 
}

//Recolecta los datos del formulario 
function ObtenerDatos() {
    
}

//Perceptron
function AnalizarImagen() {

    
}