const btnNoche = document.getElementById('btn-noche');
const contenedor = document.getElementById('contenedor');
const txtModo = document.getElementById('txt-modo'); //txt-modo
const header = document.getElementById('header');

btnNoche.addEventListener('click', function () {

    contenedor.classList.toggle('modoNocheContenedor');
    header.classList.toggle('modoNocheHeader');
    let modo = header.classList.contains('modoNocheHeader') ? 'Modo Claro' : 'Modo Oscuro';
    txtModo.textContent = modo;


});

console.log('hola en la consola')
