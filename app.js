//generate random numbers. Utilizo la biblioteca Chance !

let firstNumber = chance.integer({ min: 0, max: 10 })

let secondNumber = chance.integer({ min: 0, max: 10 })

//get the total
let total = firstNumber + secondNumber;
