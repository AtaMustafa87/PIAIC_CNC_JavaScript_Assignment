var courses=[];
var course1 = prompt("Course1","Computer");
courses.push(course1);
var course2 = prompt("Course2","Physics");
courses.push(course2);
var course3 = prompt("Course3","Chemistry");
courses.push(course3);
var course4 = prompt("Course4","Biology");
courses.push(course4);
var course5 = prompt("Course5","Islamic Studies");
courses.push(course5);
alert(courses);
newCourse1 = prompt("Course1",course1);
newCourse2 = prompt("Course2",course2);
newCourse3 = prompt("Course3",course3);
newCourse4 = prompt("Course4",course4);
newCourse5 = prompt("Course5",course5);
if (newCourse1 !== course1){
    courses.splice(0,1,newCourse1);
}
if (newCourse2 !== course2){
    courses.splice(1,1,newCourse2);
}
if (newCourse3 !== course3){
    courses.splice(2,1,newCourse3);
}
if (newCourse4 !== course4){
    courses.splice(3,1,newCourse4);
}
if (newCourse5 !== course5){
    courses.splice(4,1,newCourse5);
}

alert(courses);
//alert(` ${num1} ${op} ${num2} = ${result}!`);
