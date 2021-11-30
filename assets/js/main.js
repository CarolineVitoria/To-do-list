
const inputText = document.querySelector('#inputText');
const btEnviar = document.querySelector('#btEnviar');
const respFazer = document.querySelector('.respFazer');
const ulFazer = document.querySelector('.ulFazer')
//const respConcluida = document.querySelector('.respConcluida');
function filtro(){
    if(!inputText.value){
        return;
    }
    criarElementos();
}

function criarElementos(){
    const li = document.createElement('li');
    const botao = document.createElement('button');
    juntarElementos(li, botao);
}
function juntarElementos( li, botao){
    ulFazer.appendChild(li);
    li.innerText=inputText.value;
    li.appendChild(botao);
    botao.innerText='bora';
    imprimir(li);
}
function imprimir(li){
    respFazer.appendChild(li);
    limpar();
}
function limpar(){
    inputText.value='';
    inputText.focus();
}
btEnviar.addEventListener('click', filtro);
inputText.addEventListener('keypress', function(e){
    if (e.keyCode===13){
        filtro();
    }
});
