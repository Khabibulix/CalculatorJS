const NUMBERS = document.querySelectorAll(".number");
const OPERATIONS = document.querySelectorAll(".operations-container div")

let clearButton = document.querySelector("#clear");
let screen = document.querySelector(".screen");
let equalButton = document.querySelector("#equal");
let numberHistory = 0;
let currentOperation = "";

function getFloatWithJustEnoughDecimals(integer) {
    //Strange code because ToFixed return a string
    return parseFloat(Number.parseFloat(integer).toFixed(5));
}

function operate(operation, numberOne, numberTwo) {
    switch (operation) {
        case '+':
            return getFloatWithJustEnoughDecimals(numberOne + numberTwo);
        case '-':
            return getFloatWithJustEnoughDecimals(numberOne - numberTwo);
        case '*':
            return getFloatWithJustEnoughDecimals(numberOne * numberTwo);
        case '/':

            return getFloatWithJustEnoughDecimals(numberOne / numberTwo);
    }
}

function calculateAndDisplayResult() {
    screen.textContent = operate(currentOperation, getFloatWithJustEnoughDecimals(numberHistory), getFloatWithJustEnoughDecimals(screen.textContent));
    numberHistory = getFloatWithJustEnoughDecimals(screen.textContent);
    currentOperation = "";
}

NUMBERS.forEach(function (item) {
    item.addEventListener("click", () => {
        screen.textContent += item.id;
    });
});

OPERATIONS.forEach(function (item) {
    item.addEventListener("click", () => {
        numberHistory = getFloatWithJustEnoughDecimals(screen.textContent);
        screen.textContent = "";
        currentOperation = item.textContent;

    });
});

clearButton.addEventListener("click", () => {
    screen.textContent = "";
    numberHistory = 0;
});

equalButton.addEventListener("click", (calculateAndDisplayResult));