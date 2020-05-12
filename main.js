// Осадчий Сергей, тестовое задание для MTS

// 1. Перебрать числа от ноля до 100, вывод в консоль должен быть с интервалом в 1 секунду. Надо сделать 3 варианта.

async function variant1(){
    for(let i = 0; i <= 100; i++){
        const log = await new Promise((res) => {
            setTimeout(() => res(i), 1000)
        })
        console.log(log)
    }
}
function variant2(){
    for(let i = 0; i <= 100; i++){
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }

}

function variant3(iterations){
    let count = 0;
    const interval = setInterval(() => {
        if(count <= iterations){
            console.log(count)
            count++
        } else {
            clearInterval(interval)
            return
        }
    }, 1000)
}

// 2. Внедрить в прототип объекта функцию подсчета элементов (JS ES5 native)


var obj = {
    el1: '123',
    el2: function(){},
    el3: [1, 2, ,3]
};

Object.prototype.elementsCounter = function() {
    return Object.keys(this).length;
};



// 3. Написать функцию, которая определяет что введенная пользователем строка является палиндромом (перевертыш). Реализовать на js es5

function isPalindrom(word){
    var clearWord = word.replace(/[\,\.\(\)\’\"\:\?\!\-\–\s]/g, '').toLowerCase()
    for(var i = 0; i <= clearWord.length - 1; i++){
        
        if(clearWord[i] !== clearWord[clearWord.length - i - 1]) {
            return false
        }
    }
    return true
}