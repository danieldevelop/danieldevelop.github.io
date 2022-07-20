const regexText = new RegExp(/^[a-zñ ]+$/gm);

/**
 * It's a function that takes in a message, icon, button, and position and displays
 * a toast message with the given parameters.
 * @param message - The message you want to display
 * @param icon - success, error, warning, info, question
 * @param button - true/false
 * @param position - 'top-end'
 */
export const MessageShow = (message, icon, button, position) => {
    const Toast = Swal.mixin({

        showCancelButton: button,
        showConfirmButton: button,
        position: `${position}`,
        timer: 3000,
        toast: true
    })
    
    Toast.fire({
        icon: `${icon}`,
        title: `${message}`
    });
}


export const fieldEmpty = (field) => (field == "") ? true : false;

export const isCadena = (cadena) => (cadena.match(regexText)) ? true : false; 


/**
 * It replaces all the vowels in a string with a different string.
 * @param texto - The text to be encrypted.
 * @returns the value of the variable palabras.
 */
export const encrypt = (texto) => {
    let palabra = ""; 
    
    palabra = texto.replaceAll(/e/gm, "enter")
        .replaceAll(/i/gm, "imes")
        .replaceAll(/a/gm, "ai")
        .replaceAll(/o/gm, "ober")
        .replaceAll(/u/gm, "ufat");

    return palabra;
}

export const decrypt = (texto) => {
    let palabra = "";

    palabra = texto.replaceAll(/enter/gm, "e")
        .replaceAll(/imes/gm, "i")
        .replaceAll(/ai/gm, "a")
        .replaceAll(/ober/gm, "o")
        .replaceAll(/ufat/gm, "u");

    return palabra;
}


/**
 * It copies the text from a textarea to the clipboard.
 * @param texto_cifrado - The text to be encrypted.
 */
export const copyText = (texto_cifrado) => {
    texto_cifrado.select();

    if (document.execCommand('copy')) {
        MessageShow("Texto copiado", "success", false, "top-end");
    } else {
        MessageShow("Error al copiar el texto", "error", false, "top-end");
    }
}