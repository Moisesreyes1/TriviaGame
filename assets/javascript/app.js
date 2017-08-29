// Array for the questions, choices and answers //
			var trivia = [
			{
				question: "1. Which city has the highest rate of lightning strikes?",
				choices: ["Orlando", "Miami", "Clearwater"],
				answer: "Clearwater"
			},
			{
				question: "2. Which city has the highest average temperature?",
				choices: ["Miami", "Orlando", "Key West"],
				answer: "Key West"
			},
			{
				question: "3. This river flows north instead of south",
				choices: ["Saint John's River", "Matanzas River", "Saint Lucie River"],
				answer: "Saint John's River"
			},
			{
				question: "4. Ybor City was once known as the",
				choices: ["Beer capital of the world", "Cigar capital of the world", "Party capital of the world"],
				answer: "Cigar capital of the world"
			},
			{
				question: "5. Home to one of the two naturally round lakes in the world",
				choices: ["DeFuniak Springs", "Wekiva Springs", "Silver Glen Springs"],
				answer: "DeFuniak Springs"
			},
			{
				question: "6. Known as the Venice of the Americas",
				choices: ["Cape Coral", "Fort Lauderdale", "Fort Myers"],
				answer: "Fort Lauderdale"	
			},
			{
				question: "7. Known as the Dive Capital of the World",
				choices: ["Key West", "Key Largo", "Islamorada"],
				answer: "Key Largo"
			},
			{
				question: "8. Islamorada is billed as the",
				choices: ["Sports fishing capital of the world", "Red island", "Best place to jet ski"],
				answer: "Sports fishing capital of the world"
			},
			{
				question: "9. Florida is the only state that has",
				choices: ["Two springs with the same name", "Two lakes with the same name", "Two rivers with the same name"],
				answer: "Two rivers with the same name"
			},
			{
				question: "10. The highest point in Florida is how many feet above sea level?",
				choices: ["345", "320", "307"],
				answer: "345"
			
			}];


			// Variables at start of game //
			var correct = 0;
			var incorrect = 0;
			var counter = 100;
			var clockRunning = false;
			var timer;
			var displayTrivia = $("#questions");

			// Setting timer //
			setTimeout(onehundredSeconds, 1000 * 100);

			// Have element display countdown //
			function onehundredSeconds () {

				$("#countdown").append("<h2>100</h2>");
			
			}

			// Start trivia function //
			// function start () {
			// 	clock = setInterval(counter, 1000);
			// 	$("#countdown").prepend("<h2>100</>");
				

			// }

			// Get countdown to decrease one second at a time //
			 function run() {
				intervalID = setInterval(decrement, 1000);
			}
			
			// Decreement function //
			function decrement() {
				counter--;
				$("#countdown").html("<h2>" + counter + "</h2>");
				if(counter === 0){
					stop();
				}
			}

			// Stop function //
			function stop () {
				clearInterval(intervalID);
			}

		// Click button to start trivia and countdown //

		$(document).on("click", "#start", function(x) {

				
			beginGame();
		});
		// Click button when finished all questions before time expires //
		$(document).on("click", "#finish", function(x) {
			var dataVal = ($(this).attr ("data-questionvalue"));
			var finish = parseInt(userAnswers);

			console.log($(this).attr("data-questionvalue"));
			var questionValue = userAnswers;
			var temp = parseInt(questionValue);
			questions += temp;
			console.log(finish);
			$("#questions").html(questions);
			stop();
			clearInterval();
		});

		
		
//each line should be a sentence, click start and put everything on the screen
//questions on screen
  function beginGame() {
    
    $('#start').remove();

    // Loop for trivia array //
    for (var i = 0; i < trivia.length; i++) {
      // Show questions on scree //
      displayTrivia.append('<h2>' + trivia[i].question + '</h2>');
     // Loop for choices //
      for (var a = 0; a < trivia[i].choices.length; a++) {
       // Show choices with radio buttons on screen //
        displayTrivia.append('<input type="radio" name="question' + '-' + i + '" value="' + trivia[i].choices[a] + '">' + trivia[i].choices[a]);
      }
    }

    displayTrivia.append('<button id="finish">Finish</button>');
  };
   function finished() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == trivia[0].choices) {
        correct++;
      } else {
        incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == trivia[1].choices) {
        correct++;
      } else {
        incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == trivia[2].choices) {
        correct++;
      } else {
        incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == trivia[3].choices) {
        correct++;
      } else {
        incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == trivia[4].choices) {
        correct++;
      } else {
        incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == trivia[5].choices) {
        correct++;
      } else {
        incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == trivia[6].choices) {
        correct++;
      } else {
        incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == trivia[7].choices) {
        correct++;
      } else {
        incorrect++;
      }
    });
     $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() == trivia[8].choices) {
        correct++;
      } else {
        incorrect++;
      }
    });
      $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() == trivia[9].choices) {
        correct++;
      } else {
        incorrect++;
      }
    });
};
userAnswers();

	// Calling functions //
	beginGame();
    finished();
	onehundredSeconds();
	run();
	decrement();
    
	//make a loop
		//make div and put qestion in div
		//add div to page
		//make another loop
			//make radio buttons and put choices
			//add radio buttons to screen
//Start timer

//User answer questions
function userAnswers () {
	clearInterval(counter);
	displayTrivia.append("<h3>Correct Answers: " + correct + "</h3>" );
	displayTrivia.append("<h3>Incorrect Answers: " + incorrect + "</h3>" );
}	displayTrivia.append("<h3>Left: " + (trivia.length - (correct + incorrect)) + "</h3>" );
//If time = 0 before user's done
//Then check user's answers
//Show correct and incorrect answer

//User click finish button
//Stop the clock
//Then check user's answers
//Show correct and incorrect answer
	