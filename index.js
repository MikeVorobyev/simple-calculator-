
let allSumbols = []
let arrAllSumbols = []




//Окошко

const windowNumbers = document.getElementById('window_numbers');





//Точка(запятая)
const point = document.getElementById('point');


//Обертка(все приложение)
const wrapper = document.getElementById('wrapper');





wrapper.onclick = function(event) {
    let target = event.target
    if(target != zero 
    && target != one
    && target != two
    && target != three
    && target != four
    && target != five
    && target != six
    && target != seven
    && target != eight
    && target != nine
    && target != delC.onclick
    && target != calculated.onclick
    && target != point
    && target != division
    && target != multiplication
    && target != subtraction
    && target != addition) {
        return 
    }
    
    let innerText1 = target.innerText
    allSumbols = innerText1
    arrAllSumbols.push(allSumbols)

    
    windowNumbers.innerText = arrAllSumbols.join('').split((/(\+|\-|\*|\/)/)).join('').replace(/^0+/, '')
    
    if(windowNumbers.innerText === '') {
        windowNumbers.innerText = 0
    }
  
    
}

//Удаление

const delC = document.getElementById('del_c');
delC.onclick = function(event) {
    let dellette = []
    windowNumbers.innerText = 0
    arrAllSumbols = dellette
}


 //Равно

const calculated = document.getElementById('calculated');
calculated.onclick = function(a, c, b) {
    let d = arrAllSumbols.join('').split((/(\+|\-|\*|\/)/))
    a = d[0]
    b = d[2]
    c = d[1]
    
    let result = ''
    if(c === '+') {
        result = Number(a) + Number(b)
    }
    if(c === '-') {
        result = Number(a) - Number(b)
    }
    if(c === '*') {
        result = Number(a) * Number(b)
    }
    if(c === '/') {
        result = Number(a) / Number(b)
    }
    if(c === undefined) {
        return
    }
    if(d.length > 3) {
        a = d[1] + d[2]
        c = d[3]
        b = d[4]
        if(c === '+') {
            result = Number(a) + Number(b)
        }
        if(c === '-') {
            result = Number(a) - Number(b)
        }
        if(c === '*') {
            result = Number(a) * Number(b)
        }
        if(c === '/') {
            result = Number(a) / Number(b)
        }
    }
   
    
    windowNumbers.innerText = Number(result)
    
    arrAllSumbols = [Number(result)]

    

    console.log(a)
    
}







//Цифры операнды

const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

//Операторы

// Деление
const division = document.getElementById('division');



//Умножение
const multiplication = document.getElementById('multiplication');


//Вычитание
const subtraction = document.getElementById('subtraction');


//Сложение
let addition = document.getElementById('addition');




