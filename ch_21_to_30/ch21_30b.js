var inputValue=prompt("Please enter some string","cloUd naTive computinG");
var toCapitalFirstLetter = inputValue.toLowerCase();
toCapitalFirstLetter = inputValue.charAt(0).toUpperCase()+toCapitalFirstLetter.slice(1,toCapitalFirstLetter.length);
for(var i = 0; i<inputValue.length; i++){
    if(inputValue.charAt(i)===" "){
        toCapitalFirstLetter = toCapitalFirstLetter.slice(0,i+1) + toCapitalFirstLetter.charAt(i+1).toUpperCase() + toCapitalFirstLetter.slice(i+2,inputValue.length);
    }
}
console.log(toCapitalFirstLetter);