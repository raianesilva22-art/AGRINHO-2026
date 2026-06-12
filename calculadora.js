// PEGA A TELA ONDE APARECEM OS NÚMEROS
const tela = document.getElementById('tela');

// ADICIONA NÚMEROS OU SÍMBOLOS QUANDO CLICA NOS BOTÕES
function adicionar(valor) {
    tela.value += valor;
}

// APAGA TUDO O QUE ESTÁ NA TELA
function limparTela() {
    tela.value = '';
}

// FAZ A CONTA E MOSTRA O RESULTADO
function calcularResultado() {
    try {
        // Troca vírgula por ponto para o cálculo funcionar
        let conta = tela.value.replace(',', '.');
        
        // Faz o cálculo matemático
        let resultado = eval(conta);
        
        // Mostra o resultado, trocando o ponto de volta por vírgula
        tela.value = resultado.toString().replace('.', ',');
    } catch (erro) {
        // Se tiver algo errado na conta, mostra 'Erro'
        tela.value = 'Erro';
    }
}
