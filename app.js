//generate random numbers. Utilizo la biblioteca Chance !

let firstNumber = chance.integer({ min: 0, max: 10 })

let secondNumber = chance.integer({ min: 0, max: 10 })

//get the total
let total = firstNumber + secondNumber;

//display numbers on the canvas
$('#primary-number').text(firstNumber);
$('#secondary-number').text(secondNumber);

$('#btn').click(checkSum);

function checkSum() {
    let value = $('#guess').val();

    if (value == total) {
        alert("Correct!");
    }

    else {
        alert("Wrong!")
    }
}