const formulario = document.getElementById('form-atividade');
const listaAtividades = document.getElementById('lista-atividades');

document.addEventListener('DOMContentLoaded', carregarAtividades);

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo-atividade').value;
    const data = document.getElementById('data-atividade').value;
    const tipo = document.getElementById('tipo-atividade').value;
    const descricao = document.getElementById('descricao-atividade').value;

    const atividade = { titulo, data, tipo, descricao };

    salvarAtividade(atividade);
    adicionarAtividadeNaTela(atividade);

    formulario.reset();
});

function salvarAtividade(atividade) {
    let atividades = JSON.parse(localStorage.getItem('atividades')) || [];
    atividades.push(atividade);
    localStorage.setItem('atividades', JSON.stringify(atividades));
}

function carregarAtividades() {
    let atividades = JSON.parse(localStorage.getItem('atividades')) || [];
    
    if (atividades.length > 0) {
        listaAtividades.innerHTML = '';
        atividades.forEach(atividade => adicionarAtividadeNaTela(atividade));
    }
}

function adicionarAtividadeNaTela(atividade) {
    const item = document.createElement('div');
    item.className = 'item-atividade';

    item.innerHTML = `
        <h4 style="color:#2e7d32; margin:0 0 8px 0;">${atividade.tipo}: ${atividade.titulo}</h4>
        <p><strong>Data:</strong> ${new Date(atividade.data).toLocaleDateString('pt-BR')}</p>
        <p><strong>Detalhes:</strong> ${atividade.descricao || 'Sem observações'}</p>
    `;

    listaAtividades.appendChild(item);
}
