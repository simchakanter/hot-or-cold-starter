
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// Start a new game on page load
  	newGame();
		var userGuessCount = 0;
		var userGuess;

		$("#guessButton").click(function(event) {
			event.preventDefault();
			userGuess = $("#userGuess").val();
			console.log("Setting value of user guess to " + userGuess);
			$("<li>" + userGuess + "</li>").appendTo("#guessList");
			userGuessCount++;
			$("#count").text(userGuessCount);
			hotOrCold(userGuess);
		})

  	// Start a new game by pressing the new game button
  	$("a.new").click(function(event) {
  		event.preventDefault();
  		newGame();
  	})

});

// Event listeners for user input

// Game-related functions
function newGame () {
	//Clear everything from the previous game
	console.log("Clearing the previous game...");
	// Start a new game
	console.log("Starting a new game...")
	// Generate the secret number
	generateSecretNumber();
}

function hotOrCold (num) {
	//Use a case statement to check
	var feedback = "You made a guess of " + num;
	$("#feedback").text(feedback);
}

function generateSecretNumber() {
	// Function to generate a secret number
	console.log("Running function to generate the secret number");
}




