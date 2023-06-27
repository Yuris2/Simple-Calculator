const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operation')
const backspace = document.querySelectorAll('.delete')
const clear = document.querySelectorAll('.clear')
const dipslay = document.getElementById("display")

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
let firstNumber;
let operator;
let secondNumber;

