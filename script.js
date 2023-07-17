const numbers = document.querySelectorAll('.number')
const decimalPoints = document.querySelector('#decimal')
const operators = document.querySelectorAll('.operation')
const backspace = document.querySelector('#backspace')
const clear = document.querySelector('#clear')
const display = document.getElementById("input")
const equalButton = document.querySelector('#equals')
const negativeBtn = document.querySelector('#negative')

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
        if (num2 == 0) { //NO DIVIDING BY 0
            return "Can't Divide by 0"
        }
        return divide(num1, num2) 
    }else if (operator == "^") {
        return Math.pow(num1, num2)
    }
}

//Instance Variables
let firstNumber = "";
let eqoperator;
let operatorHit = false
let secondNumber = "";
let clearScreen = false
let chainOperation = [0, false] //number of times operated, was equals hit
//Functions
const resetCalc = () => {
    //resets all values to default values
    firstNumber = ""
    eqoperator = null
    operatorHit = false
    clearScreen = false
    secondNumber = "";
    chainOperation = [0, false]
}
const solve = () => {
    if (firstNumber != "" && secondNumber != "") { //Ensures that the equation is complete

        firstNumber = Number(firstNumber) //Casting
        secondNumber = Number(secondNumber)
    
       let answer = operate(firstNumber, eqoperator, secondNumber)
       display.innerHTML = answer
       
       if (chainOperation[1]== false) { //keeps firstNumber and display the same to allow for multiple operations but every other value is reset
        firstNumber = answer 
        secondNumber = ""
        clearScreen = false
        console.log("Ok")
       }else if (chainOperation[1] == true) { //if equals sign was hit (signifying end of chain operation)
        resetCalc()
       }
       return answer
    }
}
//Event Listeners
numbers.forEach(button => {
    button.addEventListener('click', () => {
        if (operatorHit == false) { //first part of equation
            firstNumber += button.innerHTML //add variable that is clicked to the end of number
            display.innerHTML = firstNumber;
            console.log(firstNumber)
        } else if (operatorHit == true) { //second part of equation
            if (clearScreen == false) display.innerHTML = ""; clearScreen = true //one line if statement to make display clear only once
            secondNumber += button.innerHTML
            display.innerHTML = secondNumber
            console.log(secondNumber)
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operatorHit = true
        chainOperation[0] += 1

        if (chainOperation[0] > 1) { //if equals sign has not been hit
            solve()
        }
        eqoperator = operator.innerHTML
    })
})

decimalPoints.addEventListener('click' , () => {
    if (operatorHit == false) { //first number
        if (!firstNumber.includes(".")) { //makes sure that a decimal point has not been added
            firstNumber += "."
            display.innerHTML = firstNumber //updates display
        }
    } else if (operatorHit == true) { //second number     
        if (!secondNumber.includes(".")) {
            secondNumber += "."
            display.innerHTML = secondNumber
        }
    }
})

negativeBtn.addEventListener('click', () => {
    if (operatorHit == false) { //first Number
        if (!firstNumber.includes('-')) { //make sure number does not have negative sign
            firstNumber = "-"+firstNumber
            console.log(firstNumber)
            display.innerHTML = firstNumber
        } else if (firstNumber.includes('-')) {
            firstNumber = firstNumber.substring(1)
            display.innerHTML = firstNumber
            console.log(firstNumber)
        }
    } else if (operatorHit == true) {
        if (!secondNumber.includes('-')) { //make sure number does not have negative sign
            secondNumber = "-"+secondNumber
            display.innerHTML = secondNumber
        } else if (secondNumber.includes('-')) {
            secondNumber = secondNumber.substring(1)
            display.innerHTML = secondNumber
            console.log(secondNumber)
        }
    }
})
backspace.addEventListener('click', () => {
    if (operatorHit == false) { //first Number
        if (firstNumber.length > 1) { //if First Number is not single digit
            firstNumber = firstNumber.substring(0, firstNumber.length - 1)//removes last digit of firstNumber to simulate backspace
            display.innerHTML = firstNumber
        } else {
            display.innerHTML = 0
        }
    } else if (operatorHit == true) { //second Number
        if (secondNumber.length > 1) { //if second Number is not single digit
            secondNumber = secondNumber.substring(0, secondNumber.length - 1)//removes last digit of second to simulate backspace
            display.innerHTML = secondNumber
        } else {
            display.innerHTML = 0
        }
    }
    
})

clear.addEventListener('click', () => {
    resetCalc()
    display.innerHTML = 0
})

equalButton.addEventListener('click', () => {
    chainOperation[1] = true //sets is equal to true to end chain operation
    solve()
})
