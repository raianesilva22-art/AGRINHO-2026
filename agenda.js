// PEGA OS ELEMENTOS DA PÁGINA
const formulario = document.getElementById('formularioContato');
const listaContatos = document.getElementById('listaContatos');

// PEGA OS CONTATOS SALVOS NO CELULAR/COMPUTADOR OU COMEÇA VAZIO
let contatos = JSON.parse(localStorage.getItem('meusContatos')) || [];

// MOSTRA OS CONTATOS ASSIM QUE A PÁGINA ABRIR
mostrarContatos();

// QUANDO CLICAR NO BOTÃO DE SALVAR
formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Não deixa a página recarregar

    // PEGA O QUE FOI DIGITADO NOS CAMPOS
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();

    // CRIA UM NOVO CONTATO
    const novoContato = { nome, telefone, email };

    // ADICIONA NA LISTA
    contatos.push(novoContato);

    // SALVA TUDO NO CELULAR/COMPUTADOR (NÃO APAGA SE FECHAR)
    localStorage.setItem('meusContatos', JSON.stringify(contatos));

    // LIMPA OS CAMPOS PARA DIGITAR OUTRO
    formulario.reset();

    // ATUALIZA A TELA COM O NOVO CONTATO
    mostrarContatos();
});

// FUNÇÃO PARA MOSTRAR TODOS OS CONTATOS NA TELA
function mostrarContatos() {
    // LIMPA A LISTA ANTES DE DESENHAR TUDO DE NOVO
    listaContatos.innerHTML = '';

    // SE NÃO TIVER NENHUM CONTATO SALVO
    if (contatos.length === 0) {
        listaContatos.innerHTML = '<p class="vazio">Nenhum contato cadastrado ainda.</p>';
        return;
    }

    // PASSA POR CADA CONTATO E COLOCA NA TELA
    contatos.forEach((contato, posicao) => {
        const item = document.createElement('div');
        item.className = 'item-contato';
        item.innerHTML = `
            <h3>${contato.nome}</h3>
            <p>📞 ${contato.telefone}</p>
            <p>✉️ ${contato.email || 'Não informado'}</p>
            <button onclick="apagarContato(${posicao})" style="background:#e74c3c; color:white; border:none; padding:6px 12px; border-radius:4px; margin-top:8px; cursor:pointer;">Excluir</button>
        `;
        listaContatos.appendChild(item);
    });
}

// FUNÇÃO PARA APAGAR UM CONTATO
function apagarContato(posicao) {
    contatos.splice(posicao, 1); // TIRA DA LISTA
    localStorage.setItem('meusContatos', JSON.stringify(contatos)); // ATUALIZA O SALVAMENTO
    mostrarContatos(); // ATUALIZA A TELA
}
