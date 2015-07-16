var tempscore = 0;
var score = 0;
var necscore = 10;
var delaychange = 3000;
var delaycolchange = 12000;
var changeplease = window.setInterval(change, delaychange);
var gamestarted = false;
var colist = ['white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor(),'white', randomcolor()]
//'#'+Math.floor(Math.random()*16777215).toString(16)
var colcount = 2;

function randomcolor() {
	return '#'+Math.floor(Math.random()*16777215).toString(16)
}

$('#circle').bind('tapstart', function(e) {
 	scoreadd();
});                       

function gamestart() {
	document.getElementById("gamestartdisplay").style.display = "none";
	document.getElementById("gameoverdisplay").style.display = "none";
	tempscore = 0;
	score = 0;
	gamestarted = true;
	delaychange = 3000;
	delaycolchange = 12000;
	clearInterval(changeplease);
	var changeplease = window.setInterval(change, delaychange);
	document.getElementById("displayscore").innerHTML = tempscore;
	document.getElementById("displaytotalscore").innerHTML = score;
	document.getElementById("cont").style.backgroundColor = colist[0]
	document.getElementById("circle").style.backgroundColor = colist[1];
	$('#cont').animate({backgroundColor: colist[1]}, delaycolchange, colchange);
	change();
}

function colchange() {
	if (colcount <= colist.length && tempscore >= necscore) {
		document.getElementById("circle").style.backgroundColor = colist[colcount];
		colcount++;
		$('#cont').animate({backgroundColor: colist[colcount - 1]}, delaycolchange, colchange);
		delaychange = delaychange - 50;
		delaycolchange = delaycolchange - 250;
		clearInterval(changeplease);
		tempscore = 0;
		document.getElementById("displayscore").innerHTML = tempscore;
		var changeplease = window.setInterval(change, delaychange);
	}
	else if (colcount <= colist.length && tempscore <= necscore){
		gameover();
	}
}

function change() {
	var randPositionTop = (Math.random() * (0.95 - 0.01) + 0.01 ).toFixed(4)
	var randPositionLeft = (Math.random() * (0.95 - 0.01) + 0.01 ).toFixed(4)
	var randSize = (Math.random() * (1 - 0.25) + 0.25 ).toFixed(4)
	document.getElementById("circle").style.top = "calc(100vh * " +randPositionTop + ")"
	document.getElementById("circle").style.left = "calc(100vw * " +randPositionLeft + ")"
	document.getElementById("circle").style.height = (75 * randSize) + "px"
	document.getElementById("circle").style.width = (75 * randSize) + "px"
}

function scoreadd() {
	tempscore++;
	score++;
	document.getElementById("displayscore").innerHTML = tempscore;
	document.getElementById("displaytotalscore").innerHTML = score;
	change();
}
function gameover() {
	if (gamestarted == true) {
		clearInterval(changeplease)
		document.getElementById("gameoverdisplay").style.display = "initial";
		document.getElementById("scoreendgame").innerHTML = "Score: " + score;
		document.getElementById("circle").style.backgroundColor = "rgba(0,0,0,0)";
		gamestarted = false;
	}
}