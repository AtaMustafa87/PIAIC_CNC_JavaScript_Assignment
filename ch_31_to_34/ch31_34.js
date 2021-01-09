
let name = prompt("Please enter your name","Ayesha Mustafa");
let day = prompt("Please enter your DOB(date)","24");
let month = parseInt(prompt("Please enter your DOB(month)","8"));
let year = prompt("Please enter your DOB(year)","2016");
console.log(`Hello ${name}, Good Morning, AfterNoon, Evening or Night`);
let months = ['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
let dob = new Date(`${months[month]} ${day},${year}`);
console.log(dob.toString());
let today = new Date();
let s = (today-dob)/ 1000;//seconds
let secondsInYear = 365*24*60*60;
let secondsInMonth = 30*24*60*60;
let secondsInDay = 24*60*60;
let secondsInHour = 60*60;
let secondsInMinutes = 60;
let years = Math.floor(s/secondsInYear); 
let mnths = Math.floor((s % secondsInYear)/secondsInMonth);
let days = Math.floor((s % secondsInMonth)/secondsInDay);
let hours = Math.floor((s % secondsInDay)/secondsInHour);
let minutes = Math.floor((s % secondsInHour)/secondsInMinutes);
let remaingSeconds = Math.floor(s % secondsInMinutes);
console.log(`You are ${years} Years ${mnths} Month ${days} Days ${hours} Hours ${minutes} Minutes ${remaingSeconds} Seconds old`);
console.log(`Your age in days ${Math.floor(s/(24*60*60))}`);
if((dob.getDate()==today.getDate())&&(dob.getMonth()==today.getMonth())){
    console.log(`happy birthday ${name}. Today is your ${today.getFullYear()-dob.getFullYear()} birthday`);
}
else{
    console.log(`how much time left in your next birthday? ${365-s/(24+60+60)} days`);
}