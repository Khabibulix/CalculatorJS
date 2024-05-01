const NUMBERS = document.querySelectorAll(".number");
const OPERATIONS = document.querySelectorAll(".operations-container div")
let clearButton = document.querySelector("#clear");
let screen = document.querySelector(".screen");
let numberHistory = [];
let currentOperation = "";

function operate(operation, numberOne, numberTwo) {
    if (Number.isInteger(numberOne + numberTwo)) {
        switch (operation){
            case '+':
                return numberOne + numberTwo;
            case '-':
                return numberOne - numberTwo;
            case '*':
                return numberOne * numberTwo;
            case '/':
                return numberOne / numberTwo;
        }
    }    
}

NUMBERS.forEach(function(item) {
    item.addEventListener("click", () =>{
        screen.textContent = item.id;
        numberHistory.push(item.id);
    });
});

OPERATIONS.forEach(function(item) {
    item.addEventListener("click", () =>{
        currentOperation = item.textContent;
    });
});

clearButton.addEventListener("click", () => {
    screen.textContent = "";
});