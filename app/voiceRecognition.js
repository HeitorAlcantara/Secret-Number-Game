const divGuess = document.querySelector("#guess");

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener("result", onSpeak)

function onSpeak(event) {
    const message = event.results[0][0].transcript;
    showMessage(message);
    validateGuess(message);
}

function showMessage(message) {
    divGuess.innerHTML = `
            <div>You said:</div>
            <span class="box">${message}</span>
        `
}

recognition.addEventListener("end", () => recognition.start());