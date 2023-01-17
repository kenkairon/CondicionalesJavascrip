
let numero = prompt('ingrese un numero');
if(numero == null){
    document.getElementById('content').innerHTML = `<h4 class="alert alert-danger">Presiono Cancelar Ingrese un dato Por favor<h4/>`;
}else if(numero < 0){
    document.getElementById('content').innerHTML = `<h4 class="alert alert-danger">No se Permiten Números Negativos <h4/>`;
}else if(numero == ""){
    document.getElementById('content').innerHTML = `<h4 class="alert alert-danger">No se Permiten Campos Vacíos<h4/>`;
}else if ( numero < 1 || numero <= 14) {
    document.getElementById('content').innerHTML = `<h4 class="alert alert-success">El Número ${numero} “Tiene Opciones de Ganar”<h4/>`;
}else if (numero == 55 || numero == 70 ) {
    document.getElementById('content').innerHTML = `<h4 class="alert alert-success">El Número ${numero} “Tiene Opciones de Ganar”<h4/>`;
}else if (numero >= 101){
    document.getElementById('content').innerHTML = `<h4 class="alert alert-danger" >El Número ${numero} “No tiene rango ni tiene opciones de Ganar”<h4/>`;
}else{
    document.getElementById('content').innerHTML = `<h4 class="alert alert-danger" >El Número ${numero} No es Favorable para Ganar<h4/>`;
}






