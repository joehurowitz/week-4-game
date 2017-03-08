
	
			
		$(document).ready(function() {

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

			function init(){ //console.log("initialize ");

			$(".pink-box").on("click", function (){
				total = total + pinkRandom;
				$("#display-score").html(total);

				if(total > random){ 
				 losses = losses + 1; 
				$("#wins-losses").html("Losses : " + losses + " Wins : " + wins);
				resetGame();
				}
				else if(total === random){
					 wins = wins + 1;
					 $("#wins-losses").html("Losses : " + losses + " Wins : " + wins);
				resetGame();
				}

			});
			

			$(".blue-diamond").on("click", function (){
				 total = total + blueRandom;
				 $("#display-score").html(total);

				 if(total > random){
				 losses = losses + 1; 
				$("#wins-losses").html("Losses : " + losses + " Wins : " + wins);
				resetGame();
				}

				else if(total === random){
					 wins = wins + 1;
					$("#wins-losses").html("Losses : " + losses + " Wins : " + wins);
				resetGame();
				}

			});

			$(".yellow-octogon").on("click", function (){
				total = total + yellowRandom;
				$("#display-score").html(total);

				if(total > random){
				 losses = losses + 1; 
				$("#wins-losses").html("Losses : " + losses + " Wins : " + wins);
				resetGame();
				}
				else if(total === random){
					 wins = wins + 1;
					$("#wins-losses").html("Losses : " + losses + " Wins : " + wins);
				resetGame();
				}

			});

			$(".green-rectangle").on("click", function (){
				 total = total + greenRandom;
				 $("#display-score").html(total);
			
				 if(total > random){
				 losses = losses + 1; 
				$("#wins-losses").html("Losses : " + losses + " Wins : " + wins);
				resetGame();
				}
				else if(total === random){
					 wins = wins + 1;
					$("#wins-losses").html("Losses : " + losses + " Wins : " + wins);
				resetGame();
				}

			});

			} //close function init()

			function resetGame(){
				random = Math.floor((Math.random()*120)+19);
				$("#display-random").html(random);

				total = 0;
				$("#display-score").html(total);

				//console.log("Wins : " + wins);
				//console.log("Losses : " + losses);

			}

		});
