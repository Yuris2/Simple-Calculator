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
            return "Nonreal Answer"
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
    resetBtn()
}

const resetBtn = () => {
    operators.forEach(operationBtn => {
        operationBtn.style.color = "#FBFFFF"
    })
}
const setBtn = (button) => {
    if (button == "+") {
        resetBtn()
        document.getElementById("plus").style.color = "#FCA82E"
        
    }else if (button == "-") {
        resetBtn()
        document.getElementById("minus").style.color = "#FCA82E"

    }else if (button == "/") {
        resetBtn()
        document.getElementById("divide").style.color = "#FCA82E"
        
    }else if (button == "*") {
        resetBtn()
        document.getElementById("multiply").style.color = "#FCA82E"
        
    }else if (button == "^") {
        resetBtn()
        document.getElementById("power").style.color = "#FCA82E"
        
    }
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
        setBtn(eqoperator)
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

//KEYBOARD FUNCTIONALITY
document.addEventListener('keydown', function (e) {
    let input
    console.log(e.key)
    switch (e.key) {
        case '1':
            input = document.getElementById("number-1")
            input.click()
            break
        case '2':
            input = document.getElementById("number-2")
            input.click()
            break
        case '3':
            input = document.getElementById("number-3")
            input.click()
            break
        case '4':
            input = document.getElementById("number-4")
            input.click()
            break
        case '5':
            input = document.getElementById("number-5")
            input.click()
            break
        case '6':
            input = document.getElementById("number-6")
            input.click()
            break
        case '7':
            input = document.getElementById("number-7")
            input.click()
            break
        case '8':
            input = document.getElementById("number-8")
            input.click()
            break
        case '9':
            input = document.getElementById("number-9")
            input.click()
            break
        case '0':
            input = document.getElementById("number-0")
            input.click()
            break
        case '+':
            input = document.getElementById("plus")
            input.click()
            break
        case '-':
            input = document.getElementById("minus")
            input.click()
            break
        case '*':
            input = document.getElementById("multiply")
            input.click()
            break
        case '/':
            input = document.getElementById("divide")
            input.click()
            break
        case '.':
            input = document.getElementById("decimal")
            input.click()
            break
        case '^':
            input = document.getElementById("power")
            input.click()
            break
        case "Enter":
            input = document.getElementById("equals")
            input.click()
            break
        case "Backspace":
            input = document.getElementById("backspace")
            input.click()
            break
        case "C":
        case "c":
            input = document.getElementById("clear")
            input.click()
            break
        
        
        
    }
    
}) 