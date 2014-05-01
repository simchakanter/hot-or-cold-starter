
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
		var userGuessNumber;
		var secretNumber;

		$("#guessButton").click(function(event) {
			event.preventDefault();
			userGuessNumber = $("#userGuess").val();
			// || userGuess == NaN || userGuess < 0 || userGuess > 100)
			if (userGuessNumber % 1 !== 0 || userGuessNumber == NaN || userGuessNumber < 1 || userGuessNumber > 100)  {
				console.log("enter if block for validation");
				$("#feedback").text("Only whole numbers 1-100");
				return;
			}
			console.log("Setting value of user guess to " + userGuessNumber);
			$("<li>" + userGuessNumber + "</li>").appendTo("#guessList");
			userGuessCount++;
			$("#count").text(userGuessCount);
			hotOrCold(userGuessNumber);
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
	secretNumber = generateSecretNumber();
	// Clear the guess field
	$("#userGuess").val("");
	//Reset the guess counter
	$("#count").text("0");
	//Reset the feedback message
	$("#feedback").text("Make your Guess!")
	//Remove the guesses
	$("#guessList").empty(); 
}

function hotOrCold (num) {
	//Use a case statement to check - just testing the function with dummy text.
	var absDistance = Math.abs(num-secretNumber);
	console.log("The absolute distance is " + absDistance);
	if (absDistance === 0) {
		$("#feedback").text("You win!");
		return;
	}
	var textDirection;
	if (num > secretNumber) {
		textDirection = "Too high";
	}
	else {
		textDirection = "Too low";
	}

	var textDistance;
	if (absDistance > 0 && absDistance < 10) {
		textDistance = "but close!";
	}
	else if (absDistance >= 10 && absDistance < 50) {
		textDistance = "and not so close.";
	}
	else {
		textDistance = "and waaay off.";
	}
	console.log("The textDistance variable is " + textDistance);
	var feedback = textDirection + " " + textDistance;
	console.log("The feedback variable is " + feedback);
	// var feedback = "You are off by " + Math.abs(num-secretNumber);
	$("#feedback").text(feedback);
}

function generateSecretNumber() {
	// Function to generate a secret number
	console.log("Running function to generate the secret number");
	return Math.floor((Math.random() * 100) + 1 );
}




