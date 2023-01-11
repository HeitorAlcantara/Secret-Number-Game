function validateGuess (message) {
    const num = +message; //Transforms into a number

    if(message === "game over") {
        document.body.style.cssText = "background-color: #16213E; color: #E94560; transition: 1s";
        document.body.innerHTML = `
            <h1>Game over</h1>
            <button class="btn-play">Play again!</button>
        `;
    }
    
    if(isNumber(num)) {
        divGuess.innerHTML += '<div>Not a number!<div/>';
        return;
    }

    if(inRange(num)) {
        divGuess.innerHTML +=`<div>Not in range! The number must be between ${minValue} and ${maxValue}<div/>`;
        return;
    }

    if(isCorrect(num)) {
        document.body.innerHTML = `
        <h2>You got it! 🎉🎉🎉<h2/> 
        <h3>The secret number was: ${num}</h3>
        <button class="btn-play">Play again!</button>
        `;
        return;
    }else if(higherOrLower(num)) {}

}

// function isOver(num) {
//     const msg = num.toString();
//     return msg == 'game over';
// }

function isNumber(num) {
    return Number.isNaN(num);
}

function inRange(num) {
    return !(num >= minValue && num <= maxValue);
}

function isCorrect(num) {
    return num === secretNumber;
}

function higherOrLower(num) {
    if(num < secretNumber) {
        divGuess.innerHTML += '<div>The secret number is higher <i class="fa-solid fa-arrow-up"></i></div>';
    }else if(num > secretNumber) {
        divGuess.innerHTML += '<div>The secret number is lower <i class="fa-solid fa-arrow-down"></i></div>';
    }
}

document.body.addEventListener("click", e => {
    if(e.target.className == "btn-play") {
        window.location.reload();
    }
})