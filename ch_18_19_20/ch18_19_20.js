var courses=[];
var courseTitle = ["Course 1","Course 2","Course 3","Course 4","Course 5"];
var defaultCourses = ["Computer", "Physics","Chemistry","Biology","Islamic Studies"];
for(var i=0; i<5; i++){
    courses.push(prompt(courseTitle[i],defaultCourses[i]));
}
alert(courses);
var newCourses = []
for(var i=0; i<5; i++){
    newCourses.push(prompt(courseTitle[i],courses[i]));
    if(newCourses[i]!== courses[i]){
        courses.splice(i,1,newCourses[i]);
    }
}
alert(courses);
//alert(` ${num1} ${op} ${num2} = ${result}!`);
