let mark1 = Number(prompt('Please enter marks in subject - 1 (out of 100)'));
let mark2 = Number(prompt('Please enter marks in subject - 2 (out of 100)'));
let mark3 = Number(prompt('Please enter marks in subject - 3 (out of 100)'));
let mark4 = Number(prompt('Please enter marks in subject - 4 (out of 100)'));
let mark5 = Number(prompt('Please enter marks in subject - 5 (out of 100)'));
var totalMarks = 500;
var percentageMarks = (mark1+mark2+mark3+mark4+mark5)*100/totalMarks;

alert(`Your average score is ${percentageMarks}`);
