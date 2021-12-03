
const inputText = document.querySelector('#inputText');
const linkEnviar = document.querySelector('#linkEnviar');
const divFazer = document.querySelector('.divFazer');
const divConcluida = document.querySelector('.divConcluida');
function filtro(){
    if(!inputText.value){
        return;
    }
    criarEl(inputText.value);
}
function criarEl(input){
    const link = document.createElement('a');
    link.setAttribute('class', 'fas');
    link.classList.add('fa-trash')
    const div = document.createElement('div');
    div.setAttribute('class', 'divTarefa')
    const li = document.createElement('li');    
    li.innerText=input;
    const check = document.createElement('input');
    check.type = 'checkbox';   
    check.setAttribute('class', 'box');
    juntarElementos(link, div, li, check);
}
function juntarElementos(link, div, li, check){
    div.appendChild(check);
    div.appendChild(li);
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
        const li = document.createElement('li');
        li.innerText=tarefaC;
        divConcluida.appendChild(li);
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
    if(el.classList.contains('fa-trash')){
        el.parentElement.remove();
        salvarTarefas();
    }
});
document.addEventListener('click', function(e){
    const elemento = e.target;
    if(elemento.classList.contains('box')){
        if(elemento.checked){
            let TConcluida = elemento.nextSibling;
            TConcluida.setAttribute('class', 'tarefaConcluida');
            divConcluida.appendChild(TConcluida);
            elemento.parentElement.remove();
            salvarTarefas();
            salvarTConcluidas();
        }
    }
})
addTarefasSalvas();
addTarefasConcluidasSalvas();
