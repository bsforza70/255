var tempscore = 0;
var score = 0;
var delay = 60;
var necscore = 10;
var col = 255;
var delaychange = 3000;
var changeplease = window.setInterval(change, delaychange);
var runningcolors = colorchangetoblack;
var gamestarted = false;
var colorchangeinterval;


$('#circle').bind('tap', function(e) {
 	scoreadd();
});                       

function gamestart() {
	document.getElementById("gamestartdisplay").style.display = "none";
	document.getElementById("gameoverdisplay").style.display = "none";
	tempscore = 0;
	score = 0;
	delay = 60;
	col = 255;
	gamestarted = true;
	delaychange = 3000;
	clearInterval(changeplease);
	var changeplease = window.setInterval(change, delaychange);
	document.getElementById("displayscore").innerHTML = tempscore;
	document.getElementById("displaytotalscore").innerHTML = score;
	document.getElementById("cont").style.backgroundColor = "rgb(" + col + "," + col + "," + col + ")"
	document.getElementById("circle").style.backgroundColor = "#000";
	clearInterval(colorchangeinterval);
	runningcolors = colorchangetoblack;
	colorchangeinterval = window.setInterval(runningcolors, delay);
	change();
}

function change() {
	var randPositionTop = (Math.random() * (0.95 - 0.01) + 0.01 ).toFixed(4)
	var randPositionLeft = (Math.random() * (0.95 - 0.01) + 0.01 ).toFixed(4)
	var randSize = (Math.random() * (1 - 0.25) + 0.25 ).toFixed(4)
	document.getElementById("circle").style.top = "calc(100vh * " +randPositionTop + ")"
	document.getElementById("circle").style.left = "calc(100vw * " +randPositionLeft + ")"
	document.getElementById("circle").style.height = "calc(75px * " +randSize + ")"
	document.getElementById("circle").style.width = "calc(75px * " +randSize + ")"
	document.getElementById("circle").style.borderRadius = "calc(75px * " +randSize / 2 + ")"
}
function scoreadd() {
	tempscore++;
	score++;
	document.getElementById("displayscore").innerHTML = tempscore;
	document.getElementById("displaytotalscore").innerHTML = score;
	change();
}

function colorchangetoblack() {
	col--;
	document.getElementById("cont").style.backgroundColor = "rgb(" + col + "," + col + "," + col + ")"
	if (col <= 0 && tempscore >= necscore) {
		clearInterval(colorchangeinterval);
		clearInterval(changeplease);
		delaychange = delaychange - 100;
		changeplease = window.setInterval(change, delaychange);
		document.getElementById("circle").style.backgroundColor = "#fff";
		runningcolors = colorchangetowhite;
		colorchangeinterval = window.setInterval(runningcolors, delay)
		tempscore = 0;
		delay = delay - 3;
		document.getElementById("displayscore").innerHTML = tempscore;
		document.getElementById("displaytotalscore").innerHTML = score;
	}
	else if (col <= 0 && tempscore < necscore) {
		gameover();
	}
}

function colorchangetowhite() {
	col++;
	document.getElementById("cont").style.backgroundColor = "rgb(" + col + "," + col + "," + col + ")"
	if (col >= 255 && tempscore >= necscore) {
		clearInterval(colorchangeinterval);
		clearInterval(changeplease);
		delaychange = delaychange - 100;
		changeplease = window.setInterval(change, delaychange);
		document.getElementById("circle").style.backgroundColor = "#000";
		runningcolors = colorchangetoblack;
		colorchangeinterval = window.setInterval(runningcolors, delay)
		tempscore = 0;
		delay = delay - 3;
		document.getElementById("displayscore").innerHTML = tempscore;
		document.getElementById("displaytotalscore").innerHTML = score;
	}
	else if (col >= 255 && tempscore < necscore) {
		gameover();
	}
}

function gameover() {
	if (gamestarted == true) {
		clearInterval(colorchangeinterval);
		clearInterval(changeplease)
		document.getElementById("gameoverdisplay").style.display = "initial";
		document.getElementById("scoreendgame").innerHTML = "Score: " + score;
		document.getElementById("circle").style.backgroundColor = "rgba(0,0,0,0)";
		gamestarted = false;
	}
}