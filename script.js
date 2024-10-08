

let operator;
let num1;
let num2;


// Addition

function add(num1, num2) {
    return num1 + num2
}

// Subtraction

function subtract(num1, num2) {
    return num1 - num2
}

// Multiplication

function multiply(num1, num2) {
    return num1 * num2
}

// Division

function divide(num1, num2) {
    return num1 / num2    
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            console.log("Invalid Operation")
    }
}