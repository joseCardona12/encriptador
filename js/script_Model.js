export class encriptar{
    constructor(){

    }

     //Función para mostrar el modal

     mostrarModal(modal,txtModal){

        const modalMostrar = modal;

        modalMostrar.classList.add('modal__show');
        txtModal.innerHTML = "Debes ingresar un texto";

    }

    //Función para cerrar el modal

    closeModal(modal){

        const modalClose = modal;
        modal.classList.remove('modal__show');

    }

    /*  a -ai
        e - enter
        i - imes
        o - ober
        u - ufer
    */


    //Función para encriptar el texto
    encriptartexto(input){

        const texto = input.value;
        let script = '';

        //Ciclo para recorrer el tamano de el texto ingresado

        for(let i = 0; i < texto.length; i++){
            
            if(texto[i] === 'a'){
                script += 'ai';
            }else if(texto[i] === 'e'){
                script += 'enter';
            }else if(texto[i] === 'i'){
                script += 'imes';
            }else if(texto[i] === 'o'){
                script += 'ober';
            }else if(texto[i] === 'u'){
                script += 'ufer';
            }else{
                script += texto[i];
            }
        }

        return script;

    }

    //Función para mostrar el texto en el textarea
    mostrarTexto(input,mostrar){

        let mostrarTexto = this.encriptartexto(input);
        mostrar.value = mostrarTexto;

    }

    //Función para validar el texto 

    validarTexto(input,mostrar, modal,txtModal){

        let textoIngresado = input.value;

        if(textoIngresado === ''){
            this.mostrarModal(modal,txtModal);
        }else{
            this.mostrarTexto(input,mostrar);
            
        }

    }

    //Función para desencriptar
    desencriptarTexto(input){

        const textoIngresado = input;
        const desencriptarTexto = textoIngresado.replace(/i|nter|mes|ber|fer\n/g,"");

        return desencriptarTexto;

    }

    //Función para mostrar el texto desencriptado

    mostrarDesencriptar(mostrar){

        let textoIngresado = this.desencriptarTexto(mostrar.value);
        mostrar.value = textoIngresado;

    }

    //Función para seleccionar el texto ingresado

    seleccionarText(mostrar){
        let seleccionarTexto = mostrar.select();
        navigator.clipboard.writeText(mostrar.value);

    }

    //Función para cambiar el title de la página
    changeTitle(){
        document.title = "😉¡No te vayas!.";
    }

    //Función para volver al estado inicial del title
    statusInitialTitle(titlePage){
        document.title = titlePage;
    }
   
}