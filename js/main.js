const datos = { nombre: '', email: '', telephone: '', mensaje: '' };


// const botonEnviar = document.querySelectorAll("div input")
const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const telefono = document.getElementById('telephone')
const mensaje = document.getElementById('mensaje')
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit', enviando);
// botonEnviar[3].addEventListener('click', previniendo)

function leerTexto(e) {
    console.log(e.target.value);
    datos[e.target.id] = e.target.value
    console.log(datos);
}

function enviando(evento) {
    localStorage.setItem('Datos', JSON.stringify(datos));
    let resultado = JSON.parse(localStorage.getItem('Datos'))
    evento.preventDefault();
    alert('El Mensaje ha sidio Recibido  ' + resultado.nombre)
}
//const { nombre, email, telephone, mensaje } = datos



//console.log(nombre);
//console.log(email);
//console.log(telephone);
//console.log(mensaje);



// var button = document.getElementsByClassName('boton')
// button[0].addEventListener('click', moverPagina)
// console.log(button);

// function moverPagina(params) {

// }