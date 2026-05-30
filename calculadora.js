const formCalc = document.getElementById('form-calculadora');
const resultadoDiv = document.getElementById('resultado');
const qtdTotalSpan = document.getElementById('qtd-total');
const custoTotalSpan = document.getElementById('custo-total');

formCalc.addEventListener('submit', function(e) {
    e.preventDefault();

    const tipo = document.getElementById('tipo-calculo').value;
    const area = parseFloat(document.getElementById('area').value);
    const qtdPorHa = parseFloat(document.getElementById('quantidade-por-hectare').value);
    const valor = parseFloat(document.getElementById('valor-produto').value);

    const qtdTotal = area * qtdPorHa;
    const custoTotal = qtdTotal * valor;

    qtdTotalSpan.textContent = `${qtdTotal.toFixed(2)} kg/L`;
    custoTotalSpan.textContent = `R$ ${custoTotal.toFixed(2)}`;

    resultadoDiv.style.display = 'block';
});
