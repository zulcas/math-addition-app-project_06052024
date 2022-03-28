
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