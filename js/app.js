//botones cabecera
const btnNoche = document.getElementById('btn-noche');
const btnTxt = document.getElementById('btn-txt');
const btnModalIMG = document.getElementById('btn-IMG');

const contenedor = document.getElementById('contenedor');
const txtModo = document.getElementById('txt-modo'); //txt-modo
const header = document.getElementById('header');

const txtTop = document.getElementById('txt-top'); 
const txtInput = document.getElementById('textoSuperior'); 
const txtButton = document.getElementById('txt-inferior'); 
const txtInputInferior = document.getElementById('textoInferior'); 
const txtInferior = document.getElementById('txt-inferior');

//imagen
const URLInput = document.getElementById('URL');
const boxImagen = document.getElementById('boxImagen');

//modales
const CerrarModalTXT = document.getElementById('cerrarTXT');
const CerrarModalIMG = document.getElementById('cerrarIMG');
const modalTXT = document.getElementById('modal'); 
const modalIMG = document.getElementById('modalImg'); 

//Modo noche/claro
btnNoche.addEventListener('click', function () {

    contenedor.classList.toggle('modoNocheContenedor');
    header.classList.toggle('modoNocheHeader');
    let modo = header.classList.contains('modoNocheHeader') ? 'Modo Claro' : 'Modo Oscuro';
    txtModo.textContent = modo;
});

//abrir modal texto, hacer generica 
btnTxt.addEventListener('click', function () {
    modal.style.display = 'block';
});

//abrir modal imagen, hacer generica 
btnModalIMG.addEventListener('click', function () {
    modalIMG.style.display = 'block';
});

//Cerrar modal
function cerrarModal(modal){
modal.style.display = 'none';
};
CerrarModalIMG.addEventListener('click', ()=>cerrarModal(modalIMG));
CerrarModalTXT.addEventListener('click', ()=>cerrarModal(modalTXT));

//Texto
function actualizarTexto(elemento, itemInput){
    elemento.innerText = itemInput.value;
};
txtInput.addEventListener('input', ()=> actualizarTexto(txtTop,txtInput));
txtInputInferior.addEventListener('input', ()=> actualizarTexto(txtButton,txtInputInferior));


//cargar imagen
URLInput.addEventListener('input', function(){
    let img = document.createElement('img');
    let imagenUrl = URLInput.value;
    console.log(imagenUrl)
    img.src = imagenUrl;
    img.alt = 'Imagen desde URL';
    boxImagen.appendChild(img);
} );