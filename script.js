
var clientships = [];
var serverships = [];
var shipsnum = 0;
var servershipsnumber=5;

makeserverships();
fuckwords = ["You kill me!", "O no!", "(((((((", ":-(", "oh(", "fuck.."]

for (var x = 0; x < 10; x++) {
	for (var y = 0; y < 10; y++) {	
		showsqr(x,y,'userpart');
		$("#userpartx"+x+'y'+y).click(function(){
			if ($(this).css("background-color")=="rgb(128, 128, 128)") {	
					shipsnum++;		
					$(this).css('background-color','black');
					clientships[shipsnum] = $(this).attr('id');
					$("#message").text("Make your ships (" + (5-shipsnum) + " ships)");
					if (shipsnum==5) {stopmakeclientship()};
				};
			});
		showsqr(x,y,'cpupart');
	};
};
setTimeout($('#topwindow').fadeOut(5000, "linear"), 10000);


//battle
function stopmakeclientship(){
	$('div').off("click");
	$("#message").text("Fight!!!");
	$("[id*='cpupart']").click(function(){shootpoint = $(this).attr('id');$(this).css("background-color", "Coral"); servershoot();});
	for (var i = 1; i < 11; i++) {
		$("#"+serverships[i]).click(function(){
			console.log("kill");
			servershipsnumber--;
			$(this).css("background-color", "red");
			$(this).text("X");
			$("#message").text(fuckwords[mathrandom(fuckwords.length)]);
		});
	};
}

function makeserverships(){
	for (var i = 1; i < 6; i++) {		
		serverships[i] = "cpupart"+makerandom();
	};
}

function mathrandom(x){
	return Math.floor(Math.random()*(x));
}

function makerandom(){
		x = mathrandom(10); 
		y = mathrandom(10);
		return "x"+x+"y"+y;
}

function showsqr(x,y,part){
			var sqr = $('<div/>', {
			    id:     part+'x'+x+'y'+y,
			    class:  'sqr',
			    text: 	''
			});
			$("."+part).append(sqr);		
}

function servershoot(){
	shootpoint = makerandom();
	$("#userpart"+shootpoint).css("background-color","Coral");

}
