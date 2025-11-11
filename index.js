function calcularChurrasco() {
    const { homens, mulheres, criancas } = getInputs();

    const carneBovina = homens * 500 + mulheres * 300 + criancas * 200;
    const frango = homens * 200 + mulheres * 200 + criancas * 100;
    const linguica = homens * 200 + mulheres * 200 + criancas * 200;
    const refrigerante = homens * 300 + mulheres * 400 + criancas * 200;
    const cerveja = homens * 800 + mulheres * 500;

    const resultadosHTML = `
        <h3>Quantidades necessárias:</h3>
        <p>Carne Bovina: ${formatarUnidade(carneBovina, 'g')}</p>
        <p>Frango: ${formatarUnidade(frango, 'g')}</p>
        <p>Linguiça: ${formatarUnidade(linguica, 'g')}</p>
        <p>Refrigerante: ${formatarUnidade(refrigerante, 'ml')}</p>
        <p>Cerveja: ${formatarUnidade(cerveja, 'ml')}</p>
    `;

    document.getElementById('resultados').innerHTML = resultadosHTML;
}

function getInputs() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;
    return { homens, mulheres, criancas };
}

function formatarUnidade(valor, unidade) {
    if (valor >= 1000) {
        const valorConvertido = (valor / 1000).toFixed(1);
        const novaUnidade = unidade === 'g' ? 'kg' : 'L';
        return `${valorConvertido} ${novaUnidade}`;
    }
    return `${valor} ${unidade}`;
}
