
const inputText = document.querySelector('#inputText');
const btEnviar = document.querySelector('#btEnviar');
const respFazer = document.querySelector('.respFazer');
//const respConcluida = document.querySelector('.respConcluida');

function criarElementos(){
    const div = document.createElement('div');
    const p = document.createElement('p');
    const botao = document.createElement('button');
    juntarElementos(div, p, botao);
}
function juntarElementos(div, p, botao){
    div.appendChild(p);
    p.innerText=inputText.value;
    p.appendChild(botao);
    botao.innerText='bora';
    imprimir(div);
}
function imprimir(div){
    respFazer.appendChild(div);
}
btEnviar.addEventListener('click', criarElementos);
