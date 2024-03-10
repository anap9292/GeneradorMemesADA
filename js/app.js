const btnNoche = document.getElementById('btn-noche');
const btnTxt = document.getElementById('btn-txt');
const btnCerrar = document.getElementById('cerrar');//cerrar
const contenedor = document.getElementById('contenedor');
const txtModo = document.getElementById('txt-modo'); //txt-modo
const header = document.getElementById('header');
//const txtTop = document.getElementById('txt-top'); 
const txtInferior = document.getElementById('txt-inferior');
const modal = document.getElementById('modal');


btnNoche.addEventListener('click', function () {

    contenedor.classList.toggle('modoNocheContenedor');
    header.classList.toggle('modoNocheHeader');
    let modo = header.classList.contains('modoNocheHeader') ? 'Modo Claro' : 'Modo Oscuro';
    txtModo.textContent = modo;


});

btnTxt.addEventListener('click', function () {
    modal.style.display = 'block';
});

btnCerrar.addEventListener('click', function () {
    modal.style.display = 'none';
});

console.log('hola en la consola')
