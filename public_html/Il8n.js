/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function cambioIdioma(){
    var select = document.getElementById("selectorIdioma");
  var selectedOption = select.options[select.selectedIndex].value;

  window.location.href = selectedOption;

}
