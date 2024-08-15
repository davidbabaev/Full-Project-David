let currentInput = '';
let previousInput = '';
let operator = null;
let operatorSelected = false; 
let resultDisplayed = false; 

let historyArray = JSON.parse(localStorage.getItem('calculationHistory')) || [];

let operatorButtons = document.querySelectorAll('.btn');
document.querySelector('.result').textContent = '0';

// Handle dark/light mode toggle
const modeSwitch = document.getElementById('mode-switch');
modeSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
});

// Function to update the history display in the calculator
function updateHistoryDisplay(value) {
    document.querySelector('.history').textContent = value;
}

// Function to update the calculation history in the history display div
function updateCalculationHistoryDisplay() {
    let historyDisplay = document.getElementById('history-display');
    historyDisplay.innerHTML = ''; // Clear previous history

    if (historyArray.length === 0) {
        historyDisplay.textContent = 'No history available.';
    } else {
        historyArray.forEach(item => {
            let historyItem = document.createElement('p');
            historyItem.textContent = item;
            historyDisplay.appendChild(historyItem);
        });
    }
}

// Get the modal
let modal = document.getElementById("history-modal");

// Get the button that opens the modal
let btn = document.querySelector(".show-history");

// Get the <span> element that closes the modal
let span = document.querySelector(".close");

// When the user clicks the button, open the modal and display history
btn.addEventListener('click', function() {
    updateCalculationHistoryDisplay();
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function() {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', function () {

        // If a result was just displayed, and the user starts entering a new number
        if (resultDisplayed && !isNaN(button.textContent)) {
            currentInput = '';
            resultDisplayed = false;
        }

        // Handle number input and decimal point
        if (button.textContent === '.' && !currentInput.includes('.')) {
            currentInput += '.';
        } else if (!isNaN(button.textContent)) {
            currentInput += button.textContent;
            operatorSelected = false; // Allow operator selection after number input
        }

        document.querySelector('.result').textContent = currentInput || previousInput || '0';

        // Handle operator input
        if (['+','-','x','/'].includes(button.textContent)) {
            // Prevent multiple consecutive operator clicks
            if (operatorSelected) {
                return; // Do nothing if an operator is already selected
            }

            // Perform calculation if there's previous input and current input
            if (previousInput !== '' && currentInput !== '' && operator !== null) {
                let result = calculateResult(previousInput, currentInput, operator);
                updateDisplay(result);
                previousInput = result;
            } else if (currentInput !== '') {
                previousInput = currentInput;
            }

            operator = button.textContent;
            operatorSelected = true; // Disable operator selection until a new number is input
            currentInput = '';

            // Update the history display with the ongoing calculation
            updateHistoryDisplay(`${previousInput} ${operator}`);
        }

        // Handle equals input
        else if (button.textContent === '=') {
            if(previousInput !== '' && currentInput !== '' && operator !== null) {
                let result = calculateResult(previousInput, currentInput, operator);

                // Save the full calculation to the history array
                let calculation = `${previousInput} ${operator} ${currentInput} = ${result}`;
                historyArray.push(calculation);
                localStorage.setItem('calculationHistory', JSON.stringify(historyArray)); // Save to local storage

                // Update the history display with the full calculation
                updateHistoryDisplay(`${previousInput} ${operator} ${currentInput} = ${result}`);

                updateDisplay(result);
                previousInput = '';
                currentInput = result;
                operator = null;
                operatorSelected = false;
                resultDisplayed = true;
            } else {
                updateDisplay(previousInput || '0');
            }
        }

        // Handle clear input
        else if (button.textContent === 'C'){
            currentInput = '';
            previousInput = '';
            operator = null;
            operatorSelected = false; 
            resultDisplayed = false; 
            updateDisplay('0');
            updateHistoryDisplay('');
        }

        // Handle toggle sign
        else if (button.textContent === '+/-'){
            currentInput = String(-parseFloat(currentInput));
            updateDisplay(currentInput);
        }

        // Handle percentage
        else if (button.textContent === '%'){
            currentInput = String(parseFloat(currentInput) / 100);
            updateDisplay(currentInput);
        }
    });
});

function updateDisplay(value) {
    document.querySelector('.result').textContent = value;
}

function calculateResult(prev, curr, operator){
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(prev) + parseFloat(curr);
            break;
        case '-':
            result = parseFloat(prev) - parseFloat(curr);
            break;
        case 'x':
            result = parseFloat(prev) * parseFloat(curr);
            break;
        case '/':
            if (parseFloat(curr) === 0) {
                return '<span style="font-size: 20px; color: red;">Cannot divide by zero</span>';
            }
            result = parseFloat(prev) / parseFloat(curr);
            break;
        default:
            return curr;
    }
    return result.toString();
}

// Display the saved history when the page loads
window.addEventListener('load', function() {
    updateCalculationHistoryDisplay();
});
