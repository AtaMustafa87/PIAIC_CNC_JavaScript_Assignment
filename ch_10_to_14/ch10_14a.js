let num1 = Number(prompt('Please enter first numper'));
let num2 = Number(prompt('Please enter second number'));
let op = prompt('Please enter operation to be performed (+, -, *, /, %)');
let result = 0;
if(op == '+'){
    result = num1 + num2;
}
else if(op == '-'){
    result = num1 - num2;
}
else if(op == '*'){
    result = num1 * num2;
}
else if(op == '/'){
    result = num1 / num2;
}
else if(op == '%'){
    result = num1 % num2;
}

alert(` ${num1} ${op} ${num2} = ${result}!`);
