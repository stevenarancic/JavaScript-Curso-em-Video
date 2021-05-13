var numeroTabuada = document.getElementById('numero_tabuada').value
var resposta = document.getElementById('resposta')
var numeroPraMultiplicar = 0

function gerarTabuada() {
    resposta.innerHTML = ''
    do {
        for (let index = 0; index < 11; index++) {
            let multiplicacao = numeroTabuada * numeroPraMultiplicar
            resposta.innerHTML += `${numeroTabuada} x ${numeroPraMultiplicar} = ${multiplicacao}<br>`
            numeroPraMultiplicar++
        }
    } while (numeroPraMultiplicar < 11);
}

function mostrarTabuada() {
    gerarTabuada()
}