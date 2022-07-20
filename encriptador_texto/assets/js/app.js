import * as func from './funciones.js';

const encriptar = document.querySelector('#btnEncriptar');
const desencriptar = document.querySelector('#btnDesencriptar');
const munheco = document.querySelector('#munheco');
const leyenda = document.querySelector('#leyenda');
const textoCifrado = document.querySelector("#texto_cifrado");
const copy = document.querySelector('#copy');





encriptar.addEventListener('click', (e) => {
    /* It prevents the default action of the event from happening. */
    e.preventDefault();

    let cadena = document.getElementById('texto').value.trim();


    if (func.fieldEmpty(cadena)) {
        func.MessageShow('Debe ingresar un texto', 'warning', false, 'top');
        return false;
    } else if (!func.isCadena(cadena)) {
        func.MessageShow('El texto ingresado no es valido, SOLO MINUSCULAS', 'error', false, 'top');
        return false;
    } else {
        munheco.classList.add("no-visible");
        leyenda.classList.add("no-visible");
        textoCifrado.classList.add("visible");
        
        textoCifrado.value = func.encrypt(cadena);
        copy.classList.add("visible");
    }
});





desencriptar.addEventListener('click', (e) => {
    /* It prevents the default action of the event from happening. */
    e.preventDefault();

    let cadena_cifrada = document.getElementById('texto').value.trim();


    if (func.fieldEmpty(cadena_cifrada)) {
        func.MessageShow('Debe ingresar un texto', 'warning', false, 'top');
        return false;
    } else if (!func.isCadena(cadena_cifrada)) {
        func.MessageShow('El texto ingresado no es valido, SOLO MINUSCULAS', 'error', false, 'top');
        return false;
    } else {
        munheco.classList.add("no-visible");
        leyenda.classList.add("no-visible");
        textoCifrado.classList.add("visible");
        
        textoCifrado.value = func.decrypt(cadena_cifrada);
        copy.classList.add("visible");
    }
});


copy.addEventListener('click', () => {
    func.copyText(textoCifrado);
});