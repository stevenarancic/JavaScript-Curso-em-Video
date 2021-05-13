var numeroInicioTXT = document.getElementById('numeroInicio')
var numeroFimTXT = document.getElementById('numeroFim')
var numeroPuloTXT = document.getElementById('numeroPulo')
var resposta = document.getElementById('resposta')

function contar() {
    let numeroInicio = Number(numeroInicioTXT.value)
    let numeroFim = Number(numeroFimTXT.value)
    let numeroPulo = Number(numeroPuloTXT.value)

    resposta.innerHTML = `resposta: `

    for (let index = numeroInicio; index <= numeroFim; index+=numeroPulo) {
        resposta.innerHTML += `${index}->`
    }
}