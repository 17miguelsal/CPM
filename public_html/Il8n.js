/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function cambioIdioma() {
    var select = document.getElementById("selectorIdioma");
    var selectedOption = select.options[select.selectedIndex].value;

    if (selectedOption === 'en-GB') {
        window.location.href = "Subscription_en.html";
    }
    if (selectedOption === 'es-ES'){
        window.location.href = "Subscripcion_es.html";
    }
}

function muestraDatos(id, id2){
    var dato = document.getElementById(id);
    var paragraph = document.getElementById(id2);

    var number = dato.value;
    if (number) {
        var N = new Number(number);
        /* ReqI13 */
        paragraph.innerHTML = '(' + decimalFormat.format(N) + ')';
    } else
        paragraph.innerHTML = '';
}
function calcular(idDinero, idFecha){
     var dinero = document.getElementById(idDinero);
     var fecha = document.getElementById(idFecha);
     var fechaHoy = new Date();
     
     dinero.innerHTML = monedaFormat.format(162,22);
     fecha.innerHTML = dateShortFormat.format(fechaHoy) +" ///// " + dateLongFormat.format(fechaHoy);
}
