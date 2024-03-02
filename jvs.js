const encript = document.getElementById("button1");
const desencript = document.getElementById("button2");
const input1 = document.getElementById("inputText");
const resultadoArea = document.getElementById("result");
const buttoncopiar = document.getElementById("copi");
const divresult = document.querySelector(".resultados");
const imagenright = document.querySelector(".imagen-right");
const textosright = document.querySelector(".textos-right");

encript.addEventListener('click', async () => {
    imagenright.style.display ='none';
    textosright.style.display ='none';
    divresult.style.display ='flex';
    var encriptado = input1.value.replace(/a/g,"ai")
    .replace(/e/g,"enter")
    .replace(/i/g,"imes")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat");

    resultadoArea.value = encriptado;
})

buttoncopiar.addEventListener('click', async () => {
    resultadoArea.select();
    document.execCommand('copy');
    resultadoArea.value = ""
})

desencript.addEventListener('click', async () => {
    var desencriptado = input1.value.replace(/ai/g,"a")
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");

    
    resultadoArea.value = desencriptado;
})
