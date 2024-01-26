function performAddition() {
    var num1 = parseInt(document.getElementById('addNum1').value);
    var num2 = parseInt(document.getElementById('addNum2').value);
    var result = num1 + num2;
    document.getElementById('addResult').innerText = 'Result: ' + result;
}
