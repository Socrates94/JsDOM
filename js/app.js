// //querySelector
// const heading = document.querySelector('.header__texto h2')
// heading.textContent = 'Modificando con JS el titulo al sitio web';

// const tituloContenidoP = document.querySelector('.contenido-principal h3')
// // tituloContenidoP.textContent = 'Modificanto el titulo con el DOM'

// //querySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a')
// console.log(enlaces)
// enlaces[0].textContent = 'enlace a youtube'
// enlaces[0].href = 'http://youtube.com'

// enlaces[1].textContent = 'enlace al face'
// enlaces[1].href = 'http://facebook.com';

// enlaces[2].textContent = 'enlace coinmarketcap'
// enlaces[2].href = 'http://coinmarketcap.com';

// //getElementById
// const cambio = document.getElementById('cambio')
// console.log(cambio)

// cambio.textContent = 'cambiando titulo con getbyid'

// //Creando html con JS
// const nuevoEnlace = document.createElement('a')

// //agregando href la direccion a la que se va dirigir
// nuevoEnlace.href = 'http://bitso.com'

// //agregando texto al enlace
// nuevoEnlace.textContent = 'vete a bitso'

// //agregar una clase al elemento creado
// nuevoEnlace.classList.add('navegacion__enlace')

// //agregarlo al documento
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);

// // eventos
// console.log(1)

// window.addEventListener('load', function(){ //carga JS y css
//     console.log(2)
// })

// window.onload = function(){
//     console.log(3)
// }

// document.addEventListener('DOMContentLoaded', function(){ //este carga primero el html
//     console.log(4)
// })

// console.log(5)

// window.onscroll = function(){
//     console.log('dando scroll')
// }

//seleccionar elementos y asociar un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e){
//     console.log(e)
//     e.preventDefault()

//     //para validar un formulario
//     console.log('enviando formulario');
// })

//eventos de los inputs

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //validar formulario

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true)
        return; // conrta el flujo del programa
    }

    //envaiar formulario
    mostrarAlerta('Aceptado');
})

function leerTexto(e){
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('p')
    alerta.textContent = mensaje

    if(error){
        alerta.classList.add('error')
    }else{
        alerta.classList.add('aceptado')
    }

    formulario.appendChild(alerta)

    setTimeout(() => {
        alerta.remove()
    }, 2000);

}







