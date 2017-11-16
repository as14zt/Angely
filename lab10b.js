// asking for users age

var age = prompt("what is your age?");

//getting current year

var date = new Date();

var year = date.getFullYear();

//subtracting age form current year
var birthYear = year - age;

//print it out
document.write (birthYear);
