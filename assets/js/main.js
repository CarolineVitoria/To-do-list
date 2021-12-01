
const inputText = document.querySelector('#inputText');
const btEnviar = document.querySelector('#btEnviar');
const respFazer = document.querySelector('.respFazer');
const ulFazer = document.querySelector('.ulFazer')
//const respConcluida = document.querySelector('.respConcluida');
function filtro(){
    if(!inputText.value){
        return;
    }
    criaLi(inputText.value);
}
function criaLi(input){
    const li = document.createElement('li');
    li.innerText=input;
    juntarElementos(li);
}
function juntarElementos( li){
    const botao = document.createElement('button');
    ulFazer.appendChild(li);
    li.appendChild(botao);
    botao.innerText='bora';
    botao.setAttribute('class', 'apagar');
    imprimir(li);
}
function imprimir(li){
    respFazer.appendChild(li);
    limpar();
    salvarTarefas();
}
function limpar(){
    inputText.value='';
    inputText.focus();
    
}
function salvarTarefas() {
    const liTarefas = document.querySelectorAll('li');
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
        criaLi(tarefa);
    }
}
btEnviar.addEventListener('click', filtro);
inputText.addEventListener('keypress', function(e){
    if (e.keyCode===13){
        filtro();
    }
});
document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});
addTarefasSalvas();
