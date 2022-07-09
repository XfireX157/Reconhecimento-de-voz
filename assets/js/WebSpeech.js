
const elementChute = document.getElementById('chute')
const DarkMode = document.querySelector('.primary-box')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'

recognition.start()

recognition.addEventListener('result', (e) => {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    VerificaOChute(chute)
})

function exibeChuteNaTela(chute) {
    elementChute.innerHTML = `
    <h2>Você disse: </h2>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
