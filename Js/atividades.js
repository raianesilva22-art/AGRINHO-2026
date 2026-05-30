// Selecionar elementos
const formulario = document.getElementById('form-atividade');
const listaAtividades = document.getElementById('lista-atividades');

// Carregar atividades salvas ao abrir a página
document.addEventListener('DOMContentLoaded', carregarAtividades);

// Função para cadastrar nova atividade
formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    // Pegar dados do formulário
    const titulo = document.getElementById('titulo-atividade').value;
    const data = document.getElementById('data-atividade').value;
    const tipo = document.getElementById('tipo-atividade').value;
    const descricao = document.getElementById('descricao-atividade').value;

    // Criar objeto da atividade
    const atividade = {
        titulo,
        data,
        tipo,
        descricao
    };

    // Salvar na lista e no armazenamento
    salvarAtividade(atividade);
    adicionarAtividadeNaTela(atividade);

    // Limpar formulário
    formulario.reset();
});

// Salvar no armazenamento do navegador
function salvarAtividade(atividade) {
    let atividades = JSON.parse(localStorage.getItem('atividades')) || [];
    atividades.push(atividade);
    localStorage.setItem('atividades', JSON.stringify(atividades));
}

// Carregar atividades salvas
function carregarAtividades() {
    let atividades = JSON.parse(localStorage.getItem('atividades')) || [];
    
    if (atividades.length > 0) {
        listaAtividades.innerHTML = ''; // Limpar mensagem inicial
        atividades.forEach(atividade => adicionarAtividadeNaTela(atividade));
    }
}

// Adicionar atividade na tela
function adicionarAtividadeNaTela(atividade) {
    const item = document.createElement('div');
    item.className = 'item-atividade';
    item.style.border = '1px solid #2e7d32';
    item.style.borderRadius = '8px';
    item.style.padding = '15px';
    item.style.margin = '10px 0';
    item.style.backgroundColor = '#f1f8e9';

    item.innerHTML = `
        <h4 style="color:#2e7d32; margin:0 0 8px 0;">${atividade.tipo}: ${atividade.titulo}</h4>
        <p><strong>Data:</strong> ${new Date(atividade.data).toLocaleDateString('pt-BR')}</p>
        <p><strong>Detalhes:</strong> ${atividade.descricao || 'Sem observações'}</p>
    `;

    listaAtividades.appendChild(item);
}
