var serverships = [];

makeserverships();

for (var x = 0; x < 10; x++) {
	for (var y = 0; y < 10; y++) {	
		showsqr(x,y,'userpart');
		$("#userpartx"+x+'y'+y).click(function(){
			var shipsnum = 0;
			var clientships = [];
			if ($(this).css("background-color")=="rgb(128, 128, 128)") {	
					shipsnum++;		
					$(this).css('background-color','black');
					clientships[shipsnum] = $(this).attr('id');
					$("#message").text("Place your ships (" + (5-shipsnum) + " ships)");
					if (shipsnum==5) {stopmakeclientship()};
				};
			});
		showsqr(x,y,'cpupart');
	};
};


setTimeout($('#topwindow').fadeOut(5000, "linear"), 10000);
$("#prog").animate({'opacity' : 1}, 4000)


function stopmakeclientship(){
	var fuckwords = ["You kill me!", "O no!", "(((((((", ":-(", "oh(", "fuck.."];
	var servershipsnumber=5;
	$('div').off("click");
	$("#message").text("Fight!!!");
	$("[id*='cpupart']").click(function(){shootpoint = $(this).attr('id');$(this).css("background-color", "Coral"); servershoot();});
	for (var i = 1; i < 11; i++) {
		$("#"+serverships[i]).click(function(){
			servershipsnumber--;
			if (servershipsnumber == 0) {$("#prog").animate({
         'opacity' : 0.1});$('#topwindow').html("<br><br>You destroid all my ships((((");$('#topwindow').fadeIn();$('div').off("click");};
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
	ahahawords = ["Yes!!","Camon!!!","Yea!", "Ahahaha!!!", "Eeeeee!"];
	userpart = "#userpart"+ makerandom();
	if ($(userpart).css("background-color")=="rgb(0, 0, 0)") {$(userpart).css("background-color", "red");$(userpart).text("X");$("#message").text(ahahawords[mathrandom(ahahawords.length)]);}
	else $(userpart).css("background-color","Coral");
}