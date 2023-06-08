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
/* ReqI12 */
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
/* ReqI12 */
function muestraAprobado(idBloqs, idExpcs, idBool){
    var bloq = document.getElementById(idBloqs);
    var ex = document.getElementById(idExpcs);
    var bool = document.getElementById(idBool);
    
    var b = bloq.value;
    var e = ex.value;
    
    if(b>12){
        /* ReqI13 */
        bool.innerHTML = decimalFormat.format(e+=0.5);
    } else{
        /* ReqI13 */
        bool.innerHTML = decimalFormat.format(e-=0.5);
    }
}
/* ReqI12 */
function calcular(idDinero, idFecha, idAdm, idBloqs, idCFinal){
     var dinero = document.getElementById(idDinero);
     var fecha = document.getElementById(idFecha);
     
     var admin = document.getElementById(idAdm);
     var coste = document.getElementById(idCFinal);
     var bloq = document.getElementById(idBloqs);
     
     var fechaMañana = new Date(Date.now() + 1000 * 60 * 60 * 24 * 1);
     var segundaMatricula = new Number(162.22);
     var gastoAdmin = new Number(3);
     var bloques = bloq.value;
     
     dinero.innerHTML = monedaFormat.format(segundaMatricula);
     admin.innerHTML = monedaFormat.format(gastoAdmin)+ "por cada bloque";
     /* ReqI14 */
     coste.innerHTML = monedaFormat.format(segundaMatricula + gastoAdmin * bloques);
     /* ReqI15, ReqI16 */
     fecha.innerHTML = dateShortFormat.format(fechaMañana) +" ///// " + dateLongFormat.format(fechaMañana);
}
