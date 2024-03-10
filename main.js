const form = document.getElementById('form-tarefas');
const tarefas = [];

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    adicionarTarefa();
});

document.getElementById('nome-tarefa').addEventListener('input', function() {
    removerAlerta();
});

function adicionarTarefa() {
    const inputNomeTarefa = document.getElementById('nome-tarefa').value.trim();
    
    if (inputNomeTarefa !== '') {
        if (tarefas.includes(inputNomeTarefa)) {
            exibirAlerta(`A tarefa "${inputNomeTarefa}" já foi inserida`);
        } else {
            tarefas.push(inputNomeTarefa);
            atualizarLista();
        }
        
        document.getElementById('nome-tarefa').value = '';
    }
}

function exibirAlerta(mensagem) {
    const alerta = document.createElement('div');
    alerta.textContent = mensagem;
    alerta.classList.add('alerta');

    // Adicionando o alerta no topo da página
    document.body.insertBefore(alerta, document.body.firstChild);

    setTimeout(function() {
        alerta.remove();
    }, 3000);
}

function removerAlerta() {
    const alerta = document.querySelector('.alerta');
    if (alerta) {
        alerta.remove();
    }
}


    function atualizarLista() {
        const listaTarefas = document.getElementById('lista-tarefas');
        listaTarefas.innerHTML = '';
    
        const listaOrdenada = document.createElement('ol'); // Criar uma lista ordenada
    
        tarefas.forEach(function(tarefa) {
            const novoItem = document.createElement('li'); // Criar um novo elemento <li>
            novoItem.textContent = tarefa;
            novoItem.addEventListener('click', function() {
                // Adicionar/remover o efeito de linha em cima do texto ao clicar no item da lista
                novoItem.classList.toggle('completo');
            });
            listaOrdenada.appendChild(novoItem); // Adicionar o <li> à lista ordenada
        });
    
        listaTarefas.appendChild(listaOrdenada); // Adicionar a lista ordenada à div lista-tarefas
    }

