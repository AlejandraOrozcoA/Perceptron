//------------------------------- Variables Globales ----------------------------------------------
//Numero de nuestras 
let numMuestras;
//Muestras (cuello, orejas, trompa, color)
let muestras = [];
//Taza de aprendizaje 
let tazaAprendizaje;
//Pesos 
let pesos = [];
//Umbral del perceptron  
const constante = 1;

//------------------------------------------ Funciones --------------------------------------------
//Cambia la imagen por una nueva imagen aleatoria
function CambiarImagen() {
    let imagen = document.getElementById("imagen");
    let numImagen = Math.floor(Math.random() * 101); //Genera un numero aleatorio entre 0 y 100
    imagen.src = "img/animal ("+numImagen+").jpg";  //Cambia la imagen por una nueva 
}

//Recolecta los datos del formulario 
function ObtenerDatos() {
    let cuello;
    let color;
    let orejas;
    let trompa;
    //Recolecta el valor del las muestras  
    let select = document.getElementById('cuello');
    cuello = parseInt(select.value);
    muestras.push(cuello);
    select = document.getElementById('orejas');
    orejas = parseInt(select.value);
    muestras.push(orejas);
    select = document.getElementById('trompa');
    trompa = parseInt(select.value);
    muestras.push(trompa);
    select = document.getElementById('color');
    color = parseInt(select.value);
    muestras.push(color);
    select = document.getElementById('colmillos');
    colmillos = parseInt(select.value);
    muestras.push(colmillos);
    //Calcula el numero de muestras 
    numMuestras = muestras.length;
    //Recolecta la taza de aprendizaje 
    let taza = document.getElementById('tazaAp');
    tazaAprendizaje = parseFloat(taza.value);
}

//Asigna pesos aleatoreamente los pesos a ocupar 
//el valor de los pesos es un numero aleatorio entre 0 y 1 con dos numeros despues del punto decimal
function AsignarPesos() {
    for (let i = 0; i <= numMuestras ; i++) {
        pesos[i] = parseFloat(Math.random().toFixed(2));
    }
}

//Calcula la funcion de salida ŷ
//ŷ es la sumatoria de los productos de los pesos por las muestras 
function CalcularSalida(){
    let y = 0;
    let productos = [];
    let producto = pesos[0]*constante;
    productos.push(producto);
    for (let i = 1; i <= numMuestras; i++) {
        producto = pesos[i]*muestras[i-1];
        productos.push(producto);
    }
    for (let i = 0; i < productos.length; i++) {
        y += productos[i];
    }
    return y;
}

//Se realiza la funcion de activacion para clasificar las imagenes
function  FuncionActivacion() {
    let y = CalcularSalida();
    if (y >= 0) {
        y = 1;
    }else{
        y = -1;
    }
    return y;
}

//Determina el valor esperado
function ValorEsperado() {
    let valorEsperado;
    let contadorJirafa = 0;
    let contadorElefante = 0;
    for (let i = 0; i < muestras.length; i++) {
        if (muestras[i] == -1) {
            contadorElefante++;
        }else{
            contadorJirafa++;
        }
    }
    //Asigna el valor esperado
    if (contadorElefante > contadorJirafa) {
        valorEsperado = -1;
    }else{
        valorEsperado = 1;
    }
    return valorEsperado;
}

function CalcularError() {
    let esperado = ValorEsperado();
    let activacion = FuncionActivacion();
    let error = esperado - activacion;
    if (error != 0) {
        return false;  
    } else {
        if (esperado == -1) {
            alert("Se trata de un elefante");
        } else {
            alert("Se trata de una jirafa");
        }
        return true;
    }
}

function EntrenarPerceptron() {
    let flag = false;
    ObtenerDatos();
    do {
        pesos = [];
        AsignarPesos();
        FuncionActivacion();
        flag = CalcularError(); 
    } while (!flag);

}