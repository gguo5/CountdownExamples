// ------------------------ COUNT DOWN FUNCTION

function CountMeDown() {
	
	
	var toTime = new Date("August 12, 2014 00:01:00"); // CHANGE ME
	var now = new Date();
	var difference = toTime.getTime() - now.getTime();
	if (difference <= 0) {
        clearTimeout(timer);
		// Once the time has run out, enter some code or action here. If not just leave blank ;)
    }
	
	
	
	var seconds = Math.floor(difference / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	
	
	
	hours %= 24;
    minutes %= 60;
    seconds %= 60;
	
	
	document.getElementById("days").innerHTML = days;
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("mins").innerHTML = minutes;
	document.getElementById("secs").innerHTML = seconds;
	
	
	
	var timer = setTimeout('CountMeDown()',1000);
	
	document.getElementById("daysboxDiv").innerHTML = '';
	document.getElementById("hoursboxDiv").innerHTML = '';
	document.getElementById("minsboxDiv").innerHTML = '';
	document.getElementById("secsboxDiv").innerHTML = '';
	
	for (var i = 1; i <= days; i++){
		var newImageOne = '<div class="boxImg"></div>';
        document.getElementById("daysboxDiv").innerHTML += newImageOne; 
    }
	
	for (var j = 1; j <= hours; j++){
		var newImageTwo = '<div class="boxImg"></div>';
        document.getElementById("hoursboxDiv").innerHTML += newImageTwo; 
    }
	
	for (var k = 1; k <= minutes; k++){
		var newImageThree = '<div class="boxImg"></div>';
        document.getElementById("minsboxDiv").innerHTML += newImageThree; 
    }
	
	for (var l = 1; l <= seconds; l++){
		var newImageFour = '<div class="boxImg"></div>';
        document.getElementById("secsboxDiv").innerHTML += newImageFour; 
    }
	
}

