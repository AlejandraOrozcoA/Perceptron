//----------------------------------Validaciones --------------------------
function LimpiarCampos() {
    let select = document.getElementById('cuello');
    select.value = '0';
    select = document.getElementById('orejas');
    select.value = '0';
    select = document.getElementById('trompa');
    select.value = '0';
    select = document.getElementById('color');
    select.value = '0';
    select = document.getElementById('colmillos');
    select.value = '0';

    let taza = document.getElementById('tazaAp');
    taza.value='0';

    muestras = [];
    pesos = [];
    taza = 0;
}

function validar() {
    for (let i = 0; i < muestras.length; i++) {
        if(muestras[i]==0){
            alert("Llena todos los datos");
            muestras = [];
            return false;
        }
    }
    return true;
}