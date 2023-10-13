<!DOCTYPE html>
<html>
<head>
    <title>Number Guessing Game</title>
</head>
<body>
    <h1>Number Guessing Game</h1>
    <p>Guess a number between 1 and 100:</p>
    <input type="text" id="guessInput">
    <input type="submit" value="Submit Guess" id="guessButton">
    <p id="message"></p>
    <p>Guesses: <span id="guessCount">0</span></p>
    <p>Previous guesses: <span id="guesses"></span></p>

    <script type="text/javascript">
        // Generate a random number between 1 and 100
        const targetNumber = Math.floor(Math.random() * 100) + 1;
        
        let guessCount = 0;
        const guesses = [];
        
        const message = document.getElementById('message');
        const guessInput = document.getElementById('guessInput');
        const guessButton = document.getElementById('guessButton');
        const guessCountDisplay = document.getElementById('guessCount');
        const guessesDisplay = document.getElementById('guesses');
        
        guessButton.addEventListener('click', checkGuess);
        
        function checkGuess() {
            const userGuess = parseInt(guessInput.value);
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                message.textContent = 'Please enter a valid number between 1 and 100.';
                return;
            }
        
            guessCount++;
            guesses.push(userGuess);
            guessCountDisplay.textContent = guessCount;
            guessesDisplay.textContent = guesses.join(', ');
        
            if (userGuess === targetNumber) {
                message.textContent = 'Congratulations! You guessed the correct number!';
                guessButton.disabled = true;
                guessInput.disabled = true;
            } else if (guessCount === 10) {
                message.textContent = 'Game over. The correct number was ' + targetNumber;
                guessButton.disabled = true;
                guessInput.disabled = true;
            } else {
                if (userGuess < targetNumber) {
                    message.textContent = 'Try a higher number.';
                } else {
                    message.textContent = 'Try a lower number.';
                }
            }
        
            guessInput.value = '';
            guessInput.focus();
        }
    </script>
</body>
</html>
