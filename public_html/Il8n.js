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
