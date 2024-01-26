function performMultiplication() {
    var num1 = parseInt(document.getElementById('multiNum1').value);
    var num2 = parseInt(document.getElementById('multiNum2').value);
    var result = num1 * num2;
    document.getElementById('multiResult').innerText = 'Result: ' + result;
}
