
function calculateFactorial(num){
    if(num==0){
        return 1;
    }
    else if(num<3){
        return num;
    }
    else{
        return num * calculateFactorial(num-1);
    }
}
var inputValue=parseInt(prompt("Enter some number","10"));
alert(calculateFactorial(inputValue));
