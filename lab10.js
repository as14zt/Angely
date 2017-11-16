//The starting time
var start = new Date();
var startMilli = start.getTime();

console.log(startMilli);
// this is the time when we press the button
function stopTime(){
	var end = new Date();
	var endMilli = end.getTime();

	var diffMilli = endMilli - startMilli;
	var diffSec = diffMilli/1000;
	alert ("The number of seconds is: " + diffSec);

	
}
