// keys
const numbers = document.querySelectorAll('.number');
const operands = document.querySelectorAll('.operand');
const positiveOrNegative = document.querySelector('.pos-o-neg');

// display
const display = document.querySelector('.display-txt');

//variables
let resetDisplay = false;

let currentOperand = '';
let firstNumber = 0;
let secondNumber = 0;

//instrucciones al presionar un numero
// mostrar el numero o los numeros presionado/os en el display
// almacenarlo en una variable
// resetear display despues de un operando
// repetir 1,2 y3
// mostrar resultado


operands.forEach((operand) => {
    operand.addEventListener('click', (e) => {
        pressOperand(operand);
    });
});

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        pressNumbers(number);
    });
});

function pressOperand(operand) {
    if (currentOperand == '') {
        firstNumber = display.textContent;
        currentOperand = operand.textContent;
        resetDisplay = true;
    }
    else if (currentOperand != '') {
        equal();
        
    }
}
function pressNumbers(number) {
    if (display.textContent == '0') {
        display.textContent = number.textContent
    }
    else if (resetDisplay == true) {
        display.textContent = number.textContent;
        resetDisplay = false
    }
    else {
        display.textContent += number.textContent;
    }
}

function equal() {
    secondNumber = display.textContent;
    console.log(currentOperand, firstNumber, secondNumber);
    result = operate(currentOperand, parseInt(firstNumber), parseInt(secondNumber));
    display.textContent = result;
}

// adds a negative or remove a negative depends of the current value
function PlusOrMinus() {
    if (display.textContent.includes('-')) {
        display.textContent = display.textContent.slice(1);
    } else {
        display.textContent = '-' + display.textContent;
    }
}

// function that add a single point.
function addPoint() {
    if (display.textContent.includes('.')) {
        return
    }
    else {
        display.textContent += '.';
    }
}

// clear display back to 0
function clearAll() {
    display.textContent = 0;
}

// operation methods
function add(num_1, num_2) {
    return num_1 + num_2;
}
function substract(num_1, num_2) {
    return num_1 - num_2;
}
function multiply(num_1, num_2) {
    return num_1 * num_2;
}
function divide(num_1, num_2) {
    return num_1 / num_2;
}
function operate(operator, num_1, num_2) {
    let result = 0;

    if (operator == '+') {
        result = add(num_1, num_2);
    }
    else if (operator == '-') {
        result = substract(num_1, num_2);
    }
    else if (operator == 'x') {
        result = multiply(num_1, num_2);
    }
    else {
        result = divide(num_1, num_2);
    }
    return result;
}