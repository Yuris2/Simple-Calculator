const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operation')
const backspace = document.querySelector('#backspace')
const clear = document.querySelectorAll('.clear')
const display = document.getElementById("input")

//Mathmatical Functions
const add = (x , y) => x + y

const subtract = (x , y) => x - y

const multiply = (x , y) => x * y

const divide = (x , y) =>  x / y

const operate = (num1, operator, num2) => {
    if (operator == "+") {
        return add(num1, num2)
    }else if (operator == "-") {
        return subtract(num1, num2)
    }else if (operator == "*") {
        return multiply(num1, num2)
    }else if (operator == "/") {
        return divide(num1, num2) 
    }
}
//

//Instance Variables
let firstNumber = "";
let operator;
let secondNumber;


numbers.forEach(button => {
    button.addEventListener('click', addNumber => {
        firstNumber += button.innerHTML
        display.innerHTML = firstNumber;
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', addOperator => {
        display.innerHTML += operator.innerHTML
    })
})

backspace.addEventListener('click', removeLastNumber => {
    firstNumber = Math.floor(firstNumber / 10) //removes last digit of firstNumber to simulate backspace
    console.log(firstNumber)
    display.innerHTML = firstNumber
})
