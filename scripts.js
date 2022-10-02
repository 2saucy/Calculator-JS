const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const positiveOrNegative = document.querySelector('.pos-o-neg');
const ac = document.querySelector('.AC');
const point = document.querySelector('.point');
const display = document.querySelector('.display-txt');
const equal = document.querySelector('equal'); // still with no use...

// global variables
let resetDis = false;
let currentOperator = '';
let firstNumber = 0;
let secondNumber = 0;

ac.addEventListener('click', AllClear);
point.addEventListener('click', addPoint);
positiveOrNegative.addEventListener('click', PlusOrMinus);

operators.forEach((operator) => {
    operator.addEventListener('click', () => pressOperator(operator));
});
numbers.forEach((number) => {
    number.addEventListener('click', () => pressNumbers(number));
});
function pressOperator(op) {
    if (currentOperator == '') {
        firstNumber = display.textContent;
        currentOperator = op.textContent;
        resetDis = true;
    }
    else if (currentOperator != '') {
        secondNumber = display.textContent;
        firstNumber = result();
        currentOperator = '';
        secondNumber = 0;
    }
}
function pressNumbers(num) {
    if (display.textContent == '0' || resetDis) {
        resetDisplay();
        display.textContent = num.textContent
    }
    else {
        display.textContent += num.textContent;
    }
}
function result(oprand) {
    // if both numbers (strings) are int then parse int them. if not parse float.
    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
        product = operate(currentOperator, parseInt(firstNumber), parseInt(secondNumber));
    }
    else {
        product = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));
        product = Number(product.toFixed(2));
    }
    // display on screen the product of the operation
    display.textContent = product
    return product
}
// set the display an empty string and then change the value of resetDis back to false
function resetDisplay() {
    display.textContent = '';
    resetDis = false;
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
// clear display back to 0 and set default value to all global variables
function AllClear() {
    display.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
    resetDis = false;
    currentOperator = '';
}
// operation methods
function add(numOne, numTwo) {
    return numOne + numTwo;
}
function substract(numOne, numTwo) {
    return numOne - numTwo;
}
function multiply(numOne, numTwo) {
    return numOne * numTwo;
}
function divide(numOne, numTwo) {
    return numOne / numTwo;
}
function operate(operator, numOne, numTwo) {
    switch (operator) {
        case '+':
            return add(numOne, numTwo);
        case '-':
            return substract(numOne, numTwo);
        case '*':
            return multiply(numOne, numTwo);
        case '/':
            return divide(numOne, numTwo);
        default:
            return 'ERROR';
    }
}