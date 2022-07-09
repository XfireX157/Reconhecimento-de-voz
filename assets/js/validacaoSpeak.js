function VerificaOChute(chute) {
    const numero = +chute
    const amor = chute
    const darker = chute

    if (ChuteInvalido(numero)) {
        elementChute.innerHTML += `<h1>Valor invalido </h1>`
    }

    if (maiorMenor(numero)) {
        elementChute.innerHTML += `
            <h3>Esse valor precisa ser entre ${menorValor + " e " + maiorValor}</h3> 
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h1>Você Acertou!!</h1>
            <h3>O número secreto era ${numeroSecreto} </h3>
        `
    } else if (numero > numeroSecreto) {
        elementChute.innerHTML += `
        <h3>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></h3>
        `
    } else {
        elementChute.innerHTML += `
        <h3>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></h3>
        `
    }


    if (amor === Dani) {
        elementChute.innerHTML = `
        <div class="Container">
         <span class="box">${chute}</span>
         <img src="assets/Image/Una flor.jpg" class="UnaFlor">
         <img src="assets/image/Dani.jpg" class="UnaFlor">
        </div>
        `
    }

    if (darker === dark) {
        DarkMode.classList.add('dark_mode')
    } if (darker === light) {
        DarkMode.classList.remove('dark_mode')
    }
}

function ChuteInvalido(numero) {
    return Number.isNaN(numero)
}

function maiorMenor(numero) {
    return numero > maiorValor || numero < menorValor
}