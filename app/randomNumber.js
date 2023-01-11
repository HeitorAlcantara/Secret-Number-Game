const minValue = 1;
const maxValue = 1000;
const secretNumber = randomNumber();

function randomNumber () {
    return parseInt(Math.random() * maxValue + 1);
}

const valueMin = document.querySelector("#min-value");
valueMin.innerHTML = minValue;

const valueMax = document.querySelector("#max-value");
valueMax.innerHTML = maxValue;