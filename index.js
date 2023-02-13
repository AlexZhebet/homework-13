let array = [1, 2, 3, 4, 5, 5, 6, 5, 8, 9, 5, 2, 1, 5, 6, 9, 85, 'fd', 'fg', 'we', 'w', '2', 'fr']

function number(array) {
    return array.filter(item => typeof item === 'number').reduce((
        sum, el, i, arr) => i !== arr.length - 1 ? sum = sum + el : (sum = sum + el) / arr.length, 0)
}

console.log(number(array))


// // №2 

let x = +prompt(`введіть перше число`)
let zna = prompt(`введіть знак`)
let y = +prompt(`введіть друге число`)


function doMath(x, zna, y) {
    switch (zna) {
        case '+':
            return `${x + y} `
        case '-':
            return `${x - y} `
        case '*':
            return `${x * y} `
        case '/':
            return `${x / y} `
        default:
            return console.log('Помилка')
    }

}
console.log(doMath(x, zna, y))

// //  №3 

let leghtArr = +prompt(`ведіть довжину масиву`)
let internalArr = +prompt(`ведіть довжину другорядного масиву`)


arr = new Array(leghtArr).fill(0).map((_, end) => new Array(internalArr).fill(0).map((_, i) => prompt(`${i}, ${end}`)))
console.log(arr)

// // // №4 


const string1 = prompt(`ведіть текс`, "привіт").split(``),
    cutOut = prompt(`ведіть букви для видалення`, ` п, р, т`).split(`, `);

function removingLetters(str, rem) {
    return str.filter(el => !rem.includes(el)).join(``)
}
console.log(removingLetters(string1, cutOut))