let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const userGuess = Number(guessInput.value);

    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `축하합니다! ${attempts}번 만에 맞추셨습니다! 정답은 ${randomNumber}입니다.`;
        message.style.color = 'green';
    } else if (userGuess > randomNumber) {
        message.textContent = '너무 높아요. 다시 시도해보세요.';
        message.style.color = 'red';
    } else if (userGuess < randomNumber) {
        message.textContent = '너무 낮아요. 다시 시도해보세요.';
        message.style.color = 'red';
    }

    guessInput.value = '';
    guessInput.focus();
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').focus();
}    