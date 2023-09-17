// ввод чисел
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

// кнопки
const btnPlus = document.querySelector('.plus')
const btnMinus = document.querySelector('.minus')
const btnMultiply = document.querySelector('.multiply')
const btnDivide = document.querySelector('.divide')

// нажал - функция сработала
const btnSubmit = document.querySelector('#submit')

// результат
const Result = document.querySelector('.finalResult')

// зададим начальное действие
let action = '+'

// console.log(typeof Number(input1.value))

// обозначим первичное дейтсвие и выведем резульатат на экран
const sum = Number(input1.value) + Number(input2.value)
Result.textContent = sum
// console.log(typeof sum)

// при нажатии на кнопку действие меняется
btnPlus.onclick = function() {
    action = '+'
}

btnMinus.onclick = function() {
    action = '-'
}

btnMultiply.onclick = function() {
    action = '*'
}

btnDivide.onclick = function() {
    action = '/'
}

// функция, которая производит дествие между 2мя числами
function calculate(inp1, inp2, act) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (act === '+') {
        return num1 + num2
    } else if (act === '-') {
        return num1 - num2
    } else if (act === '*') {
        return num1 * num2
    } else {
        return num1 / num2
    }
}

// функционал кнокпи, нажал - получил
btnSubmit.onclick = function() {
    Result.textContent = calculate(input1, input2, action)
}