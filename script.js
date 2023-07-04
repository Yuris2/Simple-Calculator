const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operation')
const backspace = document.querySelector('#backspace')
const clear = document.querySelector('#clear')
const display = document.getElementById("input")
const equalButton = document.querySelector('#equals')

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
let eqoperator;
let operatorHit = false
let secondNumber = "";


numbers.forEach(button => {
    button.addEventListener('click', addNumber => {
        if (operatorHit == false) { //first part of equation
            firstNumber += button.innerHTML
            display.innerHTML = firstNumber;
            console.log("first number")
        } else if (operatorHit == true) { //second part of equation
            secondNumber += button.innerHTML
            console.log("second number")
        }
        
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', addOperator => {
        eqoperator = operator.innerHTML
        console.log(eqoperator)
        display.innerHTML += operator.innerHTML
        operatorHit = true
    })
})

backspace.addEventListener('click', removeLastNumber => {
    firstNumber = Math.floor(firstNumber / 10) //removes last digit of firstNumber to simulate backspace
    console.log(firstNumber)
    display.innerHTML = firstNumber
})

clear.addEventListener('click', () => {
    firstNumber = ""
    eqoperator = null
    operatorHit = false
    secondNumber = "";
    display.innerHTML = 0
})

equalButton.addEventListener('click', () => {
    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)
    
    if (firstNumber != "" && secondNumber != "") { //Ensures that the equation is complete
       let answer = operate(firstNumber, eqoperator, secondNumber)
       console.log(answer)
    }
})
