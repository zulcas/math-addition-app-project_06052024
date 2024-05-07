// Buena suerte!
//1) Functions
//Function for getting random number
function getRandomNumber(){
    let num = Math.ceil(Math.random()*10);
    return num
}
//Function to get sum of two numbers
function getsumNumbers(num1, num2){
    return num1+num2;
}
//Function to check if user input is correct
function isSumCorrect(){
    if (userResult.value == sumNumbers){
        messageToUser.textContent = "La suma es correcta";
    }
    else{
        messageToUser.textContent = `La suma es incorrecta, el resultado correcto es ${sumNumbers}.`;
    }
}

//2)Define global variables
let randomNumber1 = getRandomNumber();
let randomNumber2 = getRandomNumber();
let sumNumbers = getsumNumbers(randomNumber1, randomNumber2);
let userResult = document.querySelector('#guess');
let clickButton = document.querySelector('#btn');
let messageToUser = document.querySelector("#message");
let clickButtonReset = document.querySelector('#reset');

//3)Display random numbers
console.log(document.querySelector('#guess').value)
document.querySelector("#primary-number").textContent = randomNumber1;
document.querySelector("#secondary-number").textContent = randomNumber2;
//4)Validation of user input
clickButton.addEventListener('click', isSumCorrect);

//5)Reset form
clickButtonReset.addEventListener('click',()=>{
    location.reload();
} );


