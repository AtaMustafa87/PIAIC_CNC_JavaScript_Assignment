
var decimalNumber = parseFloat(prompt("Please enter some decimal number"));
var decimalGreater = Math.ceil(decimalNumber);
var text = "This is my dummy text";
var sliceText = text.slice(0,decimalGreater);
var reversedString = "";
for (var i=0; i<sliceText.length; i++){
    reversedString = sliceText.charAt(i)+ reversedString;
}
alert(reversedString);
