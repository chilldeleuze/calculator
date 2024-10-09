

let operator = '';
let num1 = '';
let num2 = '';
let input = []
let result = '';
const operators = ['+', '-', '/', 'x'];
const display = document.querySelector("div.calculator__display");
const calculator = document.querySelector("div.calculator__buttons");


// This gives us the clicked button
// but it also gives us 
calculator.addEventListener("click", (e) => {
    let target = e.target;
    let charInput = target.textContent;

    if(!target.matches("div.calculator__button")) {
        return
    }

    if (charInput === 'CE') {
        cleanVariables();
        return;
    }

    if (operator === '' && !operators.includes(target.textContent)) {
        num1 += target.textContent
        console.log("num1: " + num1)
        return
    } else if (operators.includes(target.textContent) && num1 !== '') {
        operator = target.textContent
        console.log("operator: " + operator)
        return
    } else if (operator !== '' && target.textContent !== "=") {
        num2 += target.textContent
        console.log("num2: " + num2)
        return
    } else if (operator !== '' && num1 !== '' && num2 !== '' && target.textContent === "=") {
        console.log(operate(operator, num1, num2))
    }
    
    })



// - [x] Wenn Operator leer ist, dann schreib alle Zahlen bei Num 1 rein, 
// Wenn komisches Sonderzeichen, dann schreib das in operator
// wenn Operator voll ist, dann schreib alle Zahlen bei Num 2 rein,


function cleanVariables() {
    operator = '';
    num1 = '';
    num2 = '';
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