const NUMBERS = document.querySelectorAll(".number");
const OPERATIONS = document.querySelectorAll(".operations-container div")

let clearButton = document.querySelector("#clear");
let screen = document.querySelector(".screen");
let equalButton = document.querySelector("#equal");
let numberHistory = [];
let currentOperation = "";

function operate(operation, numberOne, numberTwo) {
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);
    switch (operation){
        case '+':
            return numberOne + numberTwo;
        case '-':
            return numberOne - numberTwo;
        case '*':
            return numberOne * numberTwo;
        case '/':
            // code ici pour divisions cheloues
            return numberOne / numberTwo;
    }
}

NUMBERS.forEach(function(item) {
    item.addEventListener("click", () =>{
        screen.textContent += item.id;            
    });
});

OPERATIONS.forEach(function(item) {
    item.addEventListener("click", () =>{        
        numberHistory.push(screen.textContent); 
        screen.textContent = "";
        currentOperation = item.textContent;  
    });
});

clearButton.addEventListener("click", () => {
    screen.textContent = "";
    numberHistory.length = 0;
});

equalButton.addEventListener("click", () => {
    numberHistory.push(screen.textContent);   
    let result = operate(currentOperation, numberHistory[0], numberHistory[1]);
    numberHistory.length = 0;
    screen.textContent = result;
    numberHistory.push(result);
    currentOperation = "";
});