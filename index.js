let currentInput = '0'
let isResultShown = false

const display = document.getElementById('window_numbers')

// Цифры
const digits = ['zero','one','two','three','four','five','six','seven','eight','nine']
digits.forEach(id => {
    document.getElementById(id).onclick = () => {
        if (currentInput === '0' || isResultShown) {
            currentInput = document.getElementById(id).innerText
            isResultShown = false
        } else {
            currentInput += document.getElementById(id).innerText
        }
        display.innerText = currentInput
    }
})

// Операторы
const operators = ['addition','subtraction','multiplication','division']
operators.forEach(id => {
    document.getElementById(id).onclick = () => {
        if (/[+\-*/]$/.test(currentInput)) {
            currentInput = currentInput.slice(0, -1)
        }
        currentInput += document.getElementById(id).innerText
        display.innerText = currentInput
        isResultShown = false
    }
})

// Точка
document.getElementById('point').onclick = () => {
    if (!currentInput.includes('.') || /[+\-*/][^.]*$/.test(currentInput)) {
        currentInput += '.'
        display.innerText = currentInput
    }
}

// Равно
document.getElementById('calculated').onclick = () => {
    try {
        if (currentInput.includes('/0')) {
            display.innerText = 'Нельзя'
            currentInput = '0'
            isResultShown = true
            return
        }
        
        let result = eval(currentInput)
        result = parseFloat(result.toFixed(10))
        display.innerText = result
        currentInput = String(result)
        isResultShown = true
    } catch {
        display.innerText = 'Ошибка'
        currentInput = '0'
        isResultShown = true
    }
}

// Очистка
document.getElementById('del_c').onclick = () => {
    currentInput = '0'
    display.innerText = currentInput
    isResultShown = false
}