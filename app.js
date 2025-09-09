//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array que armazena os nomes dos amigos
let amigos = [];

/**
 * Função responsável por adicionar um novo amigo à lista
 */
function adicionarAmigo() {
    // Captura o valor digitado no campo de entrada
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    // Valida se o campo não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Limpa o campo de entrada
    input.value = "";

    // Atualiza a lista exibida na tela
    exibirLista();
}

/**
 * Função responsável por atualizar a lista de amigos na tela
 */
function exibirLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista antes de atualizar
    lista.innerHTML = "";

    // Percorre o array de amigos e cria um <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

/**
 * Função responsável por sortear aleatoriamente um amigo
 */
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado na tela
    resultado.innerHTML = `🎉 O amigo secreto é: <strong>${amigoSorteado}</strong>`;
}
