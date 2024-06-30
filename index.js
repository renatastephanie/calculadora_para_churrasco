function calcularChurrasco() {
    const homens = parseInt(document.getElementById('homens').value);
    const mulheres = parseInt(document.getElementById('mulheres').value);
    const criancas = parseInt(document.getElementById('criancas').value);

    const carneBovina = homens * 500 + mulheres * 300 + criancas * 200;
    const frango = homens * 200 + mulheres * 200 + criancas * 100;
    const linguica = homens * 200 + mulheres * 200 + criancas * 200;
    const refrigerante = homens * 300 + mulheres * 400 + criancas * 200;
    const cerveja = homens * 800 + mulheres * 500;

    const resultadosHTML = `
    <h3>Quantidades necessárias:</h3>
    <p>Carne Bovina: ${carneBovina}g</p>
    <p>Frango: ${frango}g</p>
    <p>Linguiça: ${linguica}g</p>
    <p>Refrigerante: ${refrigerante}ml</p>
    <p>Cerveja: ${cerveja}ml</p>
  `;

    document.getElementById('resultados').innerHTML = resultadosHTML;
}
