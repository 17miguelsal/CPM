/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


/*function validName(name) {
 var nameInput = document.getElementById(name);
 if(nameInput.validity.patternMismatch) {
 nameInput.setCustomValidity("El nombre es demsiado corto");
 nameInput.style.borderColor="green";
 }
 }*/


function validarNombre(idFormulario, idInput) {
    var input = document.getElementById(idFormulario).elements[idInput];
    var sugerencia = "\nEJ: Juan Bermudez";
    if (input.validity.patternMismatch) {
        input.style.backgroundColor = "red";
        document.getElementById("alerta").innerHTML = "El nombre y apellidos introducidos no son válidos" + sugerencia;//ReqF20
        document.getElementById("alerta").innerHTML = document.getELementById("alerta").value + "\nEJ: Juan Bermudez";
    } else if (input.value === '') {
        input.style.backgroundColor = "white";
        document.getElementById("alerta").innerHTML = "";
    } else {
        input.style.backgroundColor = "green";
        document.getElementById("alerta").innerHTML = "";
    }
}//^ReqF18, ReqF19^


var inputs = document.querySelectorAll('input, select');

function cambiarColorFondo(evento) {
    evento.target.style.backgroundColor = 'yellow';
}

function restaurarColorFondo(evento) {
    evento.target.style.backgroundColor = 'white';
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', cambiarColorFondo);
    inputs[i].addEventListener('blur', restaurarColorFondo);
}//ReqF22

function alerta() {
    var v1 = parseFloat(document.getElementById('valor1').value);
    var v2 = parseFloat(document.getElementById('valor2').value);
    var v3 = parseFloat(document.getElementById('valor3').value);
    var sum = v1 + v2 + v3;
    alert("La suma de tus parámetros es: " + sum);
}//ReqF21, ReqF27, ReqJ28


function cambiarPagina(event) {
  if (event.altKey && event.key === 'p') {
    window.location.href = 'Principal.html';
  }
}// ReqF23, ReqJ24

function cambiarFondo(elemento) {
    elemento.style.backgroundColor = 'blue';
  }//ReqF25, ReqJ26
