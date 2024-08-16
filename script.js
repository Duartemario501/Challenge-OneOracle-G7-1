const textArea =document.querySelector(".texArea");
const mensaje = document.querySelector(".texMensaje");
const img = document.querySelector(".img");
const btnCopiar =document.querySelector(".btnCopiar")


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/
function insertarTexto(elemento, mensaje){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= mensaje;
    return;
}

function btnEncriptar(){
    const textEncriptar = encriptar(textArea.value);
    mensaje.value = textEncriptar;
    textArea.value = "";
    insertarTexto("h3","");
    insertarTexto("h4","");
    img.style.visibility ="hidden";
    btnCopiar.style.visibility = "visible";

    
}
function btnDesencriptar(){
    const textEncriptar = desencriptar(textArea.value);
    mensaje.value = textEncriptar;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    insertarTexto("h3","");
    insertarTexto("h4","");
    img.style.visibility ="hidden";
    btnCopiar.style.visibility = "visible";

}
function copiar() {
    mensaje.select();
    // Intenta copiar el contenido al portapapeles
    try {
        // Ejecuta el comando de copiar
        document.execCommand('copy');
        
        alert('Texto copiado al portapapeles!');
        location.reload();
    } catch (err) {
        alert('Error al copiar el texto.');
    }
    
}

function encriptar(stringEncriptar){
    let matrizDatos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for (let i = 0; i < matrizDatos.length; i++) {
        if (stringEncriptar.includes(matrizDatos[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(matrizDatos[i][0],matrizDatos[i][1]);
        }
    }
    return stringEncriptar;
}
function desencriptar(stringDesencriptar){
    let matrizDatos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for (let i = 0; i < matrizDatos.length; i++) {
        if (stringDesencriptar.includes(matrizDatos[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizDatos[i][1],matrizDatos[i][0]);
        }
    }
    return stringDesencriptar;
}


