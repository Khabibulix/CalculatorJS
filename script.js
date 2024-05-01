// function add(numberOne, numberTwo) {
//     if (Number.isInteger(numberOne) && Number.isInteger(numberTwo)){
//         return numberOne + numberTwo;
//     }
// }

// function subtract(numberOne, numberTwo) {
//     if (Number.isInteger(numberOne) && Number.isInteger(numberTwo)){
//         return numberOne - numberTwo;
//     }
// }

// function multiply(numberOne, numberTwo) {
//     if (Number.isInteger(numberOne) && Number.isInteger(numberTwo)){
//         return numberOne * numberTwo;
//     }
// }

// function divide(numberOne, numberTwo) {
//     if (Number.isInteger(numberOne) && Number.isInteger(numberTwo)){
//         return numberOne / numberTwo;
//     }
// }

// console.log(add(3, 4)); // 7
// console.log(subtract(6, 4)); // 2
// console.log(multiply(3, 4)); // 12
// console.log(divide(16, 4)); //4

let operator = "*";
let numberOne = 5;
let numberTwo = 6;

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

console.log(operate(operator, numberOne, numberTwo));