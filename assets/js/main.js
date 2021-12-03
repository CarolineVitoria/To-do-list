
const inputText = document.querySelector('#inputText');
const linkEnviar = document.querySelector('#linkEnviar');
const divFazer = document.querySelector('.divFazer');
const divConcluida = document.querySelector('.divConcluida');
const secConcluida = document.querySelector('.sec-concluida');


function filtro(){
    if(!inputText.value){
        return;
    }
    criarEl(inputText.value);
}
function criarEl(input){
    const link = document.createElement('a');
    link.setAttribute('class', 'fas');
    link.classList.add('fa-times-circle')
    const div = document.createElement('div');
    div.setAttribute('class', 'divTarefa')
    const span = document.createElement('span');    
    span.innerText=input;
    const sLink = document.createElement('a');
    sLink.setAttribute('class', 'fas');
    sLink.classList.add('fa-check-circle') 
    juntarElementos(link, div, span, sLink);
}
function juntarElementos(link, div, span, sLink){
    div.appendChild(sLink);
    div.appendChild(span);
    div.appendChild(link);
    imprimir(div);
}
function imprimir(div){
    divFazer.appendChild(div);
    limpar();
    salvarTarefas();
}
function limpar(){
    inputText.value='';
    inputText.focus();
}
function salvarTarefas() {
    const liTarefas = document.querySelectorAll('.divTarefa');
    const listaDeTarefas = [];
  
    for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('bora', '');
      listaDeTarefas.push(tarefaTexto);
    }
    const textoTarejaJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', textoTarejaJson);
}
function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    for(let tarefa of listaTarefas){
        criarEl(tarefa);
    }
}
function salvarTConcluidas(){
    const liTarefasConcluidas = document.querySelectorAll('.tarefaConcluida');
    const todasLiConcluidas=[];
    for(let tarefaC of liTarefasConcluidas){
        let textoTarefa = tarefaC.innerText;
        todasLiConcluidas.push(textoTarefa);
    }
    const TarefaConcluidaJSON = JSON.stringify(todasLiConcluidas);
    localStorage.setItem('tarefasConcluidas', TarefaConcluidaJSON);
}
function addTarefasConcluidasSalvas(){
    const tarefaConcluida = localStorage.getItem('tarefasConcluidas');
    const listaConcluidas= JSON.parse(tarefaConcluida);
    for(let tarefaC of listaConcluidas){
        const span = document.createElement('span');
        span.innerText=tarefaC;
        divConcluida.appendChild(span);
    }
}
linkEnviar.addEventListener('click', filtro);
inputText.addEventListener('keypress', function(e){
    if (e.keyCode===13){
        filtro();
    }
});
document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('fa-times-circle')){
        el.parentElement.remove();
        salvarTarefas();
    }
});
document.addEventListener('click', function(e){
    const elemento = e.target;
    if(elemento.classList.contains('fa-check-circle')){
            let TConcluida = elemento.nextSibling;
            TConcluida.setAttribute('class', 'tarefaConcluida');
            divConcluida.appendChild(TConcluida);
            elemento.parentElement.remove();
            salvarTarefas();
            salvarTConcluidas();
    }
})
const btFeito = document.querySelector('#btFeito').addEventListener('click', function(){
    secConcluida.style.display='block';
});
const btAfazer = document.querySelector('#btAFazer').addEventListener('click', function(){
    secConcluida.style.display='none';
});
addTarefasSalvas();
addTarefasConcluidasSalvas();
