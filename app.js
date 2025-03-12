let amigosInseridos = [];
let lista = document.getElementById('listaAmigos');

//  adicionar amigos
function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert("erro! Você não pode deixar o espaço em branco !");
        return;
    } else {
        amigosInseridos.push(nome);
        limparCampo();
    }
    atualizarLista();
    console.log('Nome capturado: ', nome);
    return nome;
    
}
// limpar o campo
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

//  atualizar a lista
function atualizarLista() {
    lista.innerHTML = ''; // Limpar a lista existente

    amigosInseridos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// sortear um amigo secreto
function sortearAmigo() {
    if (amigosInseridos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
        return;
    }

    let amigoSorteado = amigosInseridos[Math.floor(Math.random() * amigosInseridos.length)];
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}

//  limpar a lista e recomeçar o sorteio
function limparLista() {
    amigosInseridos = [];
    atualizarLista();
    resultado.innerHTML = '';
}
