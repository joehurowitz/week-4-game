
	
			
		$(document).ready(function() {

			//var trackLosses = 0;
			var wins = 0;
			var losses = 0;
			var random = Math.floor((Math.random()*120)+19);
			var total=0;
			var pinkRandom = Math.floor((Math.random() * 12) + 1);
			var blueRandom = Math.floor((Math.random() * 12) + 1);
			var yellowRandom = Math.floor((Math.random() * 12) + 1);
			var greenRandom = Math.floor((Math.random() * 12) + 1);
			

			
			$("#display-random").html(random);
			init();

			function init(){

			$(".pink-box").on("click", function (){
				total = total + pinkRandom;
				$("#display-score").html(total);

					if(total > random){ 
				 losses = losses + 1; 
				$("#wins-losses").html("Losses : " + losses);
				
				}
				else if(total === random){
					 wins = wins + 1;
					$("#wins-losses").html("Wins : " + wins);
				
				}

			});
			

			$(".blue-diamond").on("click", function (){
				 total = total + blueRandom;
				 $("#display-score").html(total);

				 if(total > random){
				 losses = losses + 1; 
				$("#wins-losses").html("Losses : " + losses);
				
				}

				else if(total === random){
					 wins = wins + 1;
					$("#wins-losses").html("Wins : " + wins);
				
				}

			});

			$(".yellow-octogon").on("click", function (){
				total = total + yellowRandom;
				$("#display-score").html(total);

				if(total > random){
				 losses = losses + 1; 
				$("#wins-losses").html("Losses : " + losses);
				
				}
				else if(total === random){
					 wins = wins + 1;
					$("#wins-losses").html("Wins : " + wins);
				
				}

			});

			$(".green-rectangle").on("click", function (){
				 total = total + greenRandom;
				 $("#display-score").html(total);
			
				 if(total > random){
				 losses = losses + 1; 
				$("#wins-losses").html("Losses : " + losses);
				
				}
				else if(total === random){
					 wins = wins + 1;
					$("#wins-losses").html("Wins : " + wins);
				
				}

			});

			} //close function init()



		});
