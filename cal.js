
console.log("hello")
class calulator {
    constructor(previousOperandsTextElement, currentOperandsTextElement) {
        this.previousOperandsTextElement = previousOperandsTextElement
        this.currentOperandsTextElement = currentOperandsTextElement
        this.clear()
    }

}
clear()
{
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}
delete()
{
    this.currentOperand = this.currentOperand.toString().slice(0, -1);

}
appendNumber()
{
    if (number == '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()

}
chooseOperation()
{
    if (this.currentOperand === '') retuurn
    if (this.previousOperand !== '') {
        this.compute()
}
    this.operation = this.operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''

}
compute()
{
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if ( (isNaN(prev)) || (isNaN(current))) return

    switch (this.operation) {

        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case '*':
            computation = prev * current
            break
        case '÷':
            computation = prev / current
            break
        default:
            return
 }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
}
getDisplayNumber(number)
{
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('')[0])
    const decimalDigits = stringNumber.split('')[1]

    let integerDisplay
    if (isNaN(integerDigits))
        integerDisplay = ''
    else {
        integerDisplay = integerDigits.toLocaleString('en-US')

        // maximumfractionDigits : 0}')
    }

    if (decimalDigits != null) {
        return '${integerDisplay}.${decimalDigits}'
    }
    else {
        return integerDisplay
    }
}

// const floatnumber= parseFloat(number)
//if (isNaN(floatnumber)) return''
//return floatnumber.toLocaleString('en')

UpdateDisplay()
{
    this.currentOperandsTextElement.innerText = this.currentOperand
    if (this.operation != null)
     {
        this.previousOperandsTextElement.innerText =
            '${this.previousOperand}${this.operation}'
     }
}

calculator.updateDisplay() 
{
    this.currentOperandsTextElement.innerText = this.currentOperand
    this.previousOperandsTextElement.innerText = this.previousOperand
}
const numberButtons = document.querySelectorAll('[data-number]')
const numberButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandsTextElement = document.querySelector('[data-previous-operand]')
const currentOperandsTextElement = document.querySelector('[data-current-operand]')


const calculator = new calculator(previousOperandsTextElement, currentOperandsTextElement)
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
equalsButtons.addEventListener('click', button =>{
    calulator.compute()
    calulator.updateDisplay()
})

allclearButtons.addEventListener('click', button =>{
    calulator.compute()
    calulator.updateDisplay()
})
deleteButtons.addEventListener('click', button =>{
    calulator.compute()
    calulator.updateDisplay()
})