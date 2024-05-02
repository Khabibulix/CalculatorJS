const NUMBERS = document.querySelectorAll(".number");
const OPERATIONS = document.querySelectorAll(".operations-container div")

let clearButton = document.querySelector("#clear");
let screen = document.querySelector(".screen");
let equalButton = document.querySelector("#equal");
let numberHistory = 0;
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
        numberHistory = screen.textContent; 
        console.log("numberHistory in operations event listener");
        console.log(numberHistory);
        screen.textContent = "";
        currentOperation = item.textContent;  
    });
});

clearButton.addEventListener("click", () => {
    screen.textContent = "";
    numberHistory = 0;
});

equalButton.addEventListener("click", () => {  
    // console.log(`${numberHistory} ${currentOperation} ${screen.textContent}`)    
    // console.log("numberHistory in equal event listener");
    let result = operate(currentOperation, numberHistory, screen.textContent);
    screen.textContent = result;
    numberHistory = result;
    currentOperation = "";
});