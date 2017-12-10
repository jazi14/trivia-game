var number = 5;

var timeInfo;

var doneTime = "";

var shownQues = [];

var totalQues = 0;

var rightAns = 0;

var wrongAns = 0;

var result;

var questionAnswers = {question1: ["How many states are in United States?", "50", "48", "45", "52"],
 question2: ["what is largest country by population?", "China", "Inda", "United States", "Rusia"],
 question3: ["what country has biggest Econcomy in the world?", "United States", "China", "Japan", "Germany"],
question4: ["which country has most Exporting goods?","United States", "China", "Japan", "Germany" ]};

// Start the game
$("#start").on("click", run);

// Restart the game 
$("#restart").on("click", restart)
	function restart() {
		shownQues = [];
		totalQues = 0;
		rightAns = 0;
		wrongAns = 0;
		$("#question").html("<h2></h2>");
		$("#answers").html("<h2></h2>");
		run();
	}

	function run() {
		$("#start").hide();
		$("#restart").hide();
		$("#gameStatus").html("<h2>Game On!</h2>");
		$("#result").empty();
	    timeInfo = setInterval(decrement, 2000);	    
	    // Create array and add the question answer 
	    var shownQues = questionAnswers[Object.keys(questionAnswers)[totalQues]];
	    // Displays the question
		$("#question").append(shownQues[0]);
	    // Display the answers in buttons
	    for(var j = 1; j < shownQues.length; j++ ) {
        	var answerButton= $('<input type="button" class="btn btn-primary" value="' + shownQues[j] + '"/>');
        	answerButton.addClass("score");
        	answerButton.attr("data-name", shownQues[j]);
        // Display the buttons
        $("#answers").append(answerButton);
        $("#answers").append("<br>");
        $("#answers").append("<br>");
        }	    
	}	
	// Timer 
	function decrement() {
	    number--;
	    $("#showTimer").html("<h2>" + number + "</h2>");
	    if (number === 0) {
	    stop();
	    }
	}

	function stop() {
	    clearInterval(timeInfo);
	    // Clear the window
		$("#question").html("<h2></h2>");
		$("#answers").html("<h2></h2>");
		number = 5;
		totalQues = totalQues + 1;
		// If all the questions have been used then show results
		if (totalQues > 3) {
			doneTime = "";
			$("#showTimer").html("<h2>" + doneTime + "</h2>");
			$("#gameStatus").html("<h2>Game Over!</h2>");
			$("#question").html('<h2>Correct Answers: ' + rightAns + '</h2>');
			$("#answers").html('<h2>Wrong Answers: ' + wrongAns + '</h2>');
			$("#restart").show();
			shownQues = 0;
		}else{
		// Wait a few seconds then run the run function again
		
		doneTime = "Get Ready For The Next Question";
		$("#showTimer").html("<h2>" + doneTime + "</h2>");
		if (result === true) {
			$("#result").html("<h1>Correct!</h1>");
		}else{
			$("#result").html("<h1>Wrong!</h1>");
		}
	    setTimeout(run, 3000);
		}
	}
	// function to check 
	function scoreKeeper() {
		var buttonValue = $(this).attr("value");
		if (buttonValue === "50" || buttonValue === "China" || buttonValue === "United States" || buttonValue === "China") {
			rightAns = rightAns + 1;
			result = true;
			stop();
		}else{
			wrongAns = wrongAns + 1;
			result = false;
			stop();
		}

	}
	$("#restart").hide();
	// Create an event listener for all buttons with the ID answer
	$(document).on("click", ".score", scoreKeeper);