
const menorValor = 1
const maiorValor = 100
const dark = "escuro"
const light = "Claro"
const numeroSecreto = gerarNumeroAleatorio()


function gerarNumeroAleatorio() {
    gerar = parseInt(Math.random() * maiorValor + 1)
    console.log(gerar)
}

const hightValue = document.getElementById('hight-value').innerHTML = maiorValor
const lowerValue = document.getElementById('lower-value').innerHTML = menorValor