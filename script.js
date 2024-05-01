let operator = "*";
let numberOne = 5;
let numberTwo = 6;
const NUMBERS = document.querySelectorAll(".number");
let screen = document.querySelector(".screen");

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
    });
});