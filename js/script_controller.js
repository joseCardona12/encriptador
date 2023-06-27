import { encriptar} from "./script_Model.js";

const inputIngresar      = document.getElementById('input');
const mostrarInformacion = document.getElementById('mostrar');
const btndesencriptar    = document.getElementById('desencriptar');
const btnEncriptar       = document.getElementById('encriptar');
const btnCopiar          = document.getElementById('copiarBtn');

//capturar el modal
const modal              = document.getElementById('modal');
const txtModal           = document.getElementById('modal__text');
const closeModal         = document.getElementById('closeModal');

//Intanciar la clase encriptar del modelo 
const encriptador = new encriptar;

//Obtener el title de la página
let titlePage = document.title;

//Escuchar el evento click del botón encriptar
btnEncriptar.addEventListener('click', ()=>{
    encriptador.validarTexto(inputIngresar, mostrarInformacion, modal,txtModal);
})

//Escuchar el evento click del botón desencriptar
btndesencriptar.addEventListener('click', ()=>{
    encriptador.mostrarDesencriptar(mostrarInformacion);
})

//Escuchar el evento click del botón copiar
btnCopiar.addEventListener('click', ()=>{
    encriptador.seleccionarText(mostrarInformacion);
})

//Escuchar el evento click del modal para cerralo
closeModal.addEventListener('click', ()=>{
    encriptador.closeModal(modal);
})

//Escuchar el evento blur de la página
window.addEventListener('blur', ()=>{
    encriptador.changeTitle();
})

//Escuchar el evento focus de la página
window.addEventListener('focus', ()=>{
    encriptador.statusInitialTitle(titlePage);
})




