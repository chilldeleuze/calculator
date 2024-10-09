

let operator = '';
let num1 = '';
let num2 = '';
let input = []
let result = '';
const operators = ['+', '-', '/', 'x'];
const display = document.querySelector("div.calculator__display");
const calculator = document.querySelector("div.calculator__buttons");


// This is the Event Listener, which currently also handles all the rest of the operations, 
// which is probably not the best idea. I need to refactor this and build more functions.
calculator.addEventListener("click", (e) => {
    let target = e.target;
    let charInput = target.textContent;

    if(!target.matches("div.calculator__button")) {
        return
    }

    if (charInput === 'CE') {
        cleanVariables();
        updateDisplay('')
        return;
    }
    
    // Basic logic:
    // 1. check if operator is empty. If yes, then add all Numbers to num1
    // 2. else if the input is an operator, add it to the operator variable
    // 3. else if there's already something in the operator variable
    // and add all of the following numbers to num2

    if (operator === '' && !operators.includes(charInput) && charInput !== '=') {
        num1 += charInput
        updateDisplay(num1)
        console.log("num1: " + num1)
        return
    } else if (operators.includes(charInput) && num1 !== '') {
        operator = charInput
        console.log("operator: " + operator)
        return
    } else if (operator !== '' && charInput !== "=") {
        num2 += charInput
        console.log("num2: " + num2)
        updateDisplay(num2)
        return
    } else if (operator !== '' && num1 !== '' && num2 !== '' && charInput === "=") {
        result = operate(operator, num1, num2)
        updateDisplay(result);
        updateVariables();
        
    }
    
    })

function updateDisplay(value) {
    display.textContent = value
} 

function clearDisplay() {
    display.textContent = ''
}

function cleanVariables() {
    operator = '';
    num1 = '';
    num2 = '';
    result = '';
}

// this resets our main variables, similar to cleanVariables, but sets 
// previous result to num1, so we are ready for the next round

function updateVariables() {
    num1 = result;
    operator = '';
    num2 = '';
    result = '';
}

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
    num1 = Number(num1);
    num2 = Number(num2)
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            console.log("Invalid Operation")
    }
}