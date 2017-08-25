// To make functions available when document is loaded //
$(document).ready(function(){


			// Array for the questions, choices and answers //
			var trivia = [
			{
				question: "Which city has the highest rate of lightning strikes?",
				choices: ["Orlando", "Miami", "Clearwater"],
				answer: "Clearwater"
			},
			{
				question: "Which city has the highest average temperature?",
				choices: ["Miami", "Orlando", "Key West"],
				answer: "Key West"
			},
			{
				question: "This river flows north instead of south",
				choices: ["Saint John's River", "Matanzas River", "Saint Lucie River"],
				answer: "Saint John's River"
			},
			{
				question: "Ybor City was once known as the",
				choices: ["Beer capital of the world", "Cigar capital of the world", "Party capital of the world"],
				answer: "Cigar capital of the world"
			},
			{
				question: "Home to one of the two naturally round lakes in the world",
				choices: ["DeFuniak Springs", "Wekiva Springs", "Silver Glen Springs"],
				answer: "DeFuniak Springs"
			},
			{
				question: "Known as the Venice of the Americas",
				choices: ["Cape Coral", "Fort Lauderdale", "Fort Myers"],
				answer: "Fort Lauderdale"	
			},
			{
				question: "Known as the Dive Capital of the World",
				choices: ["Key West", "Key Largo", "Islamorada"],
				answer: "Key Largo"
			},
			{
				question: "Islamorada is billed as the",
				choices: ["Sports fishing capital of the world", "Red island", "Best place to jet ski"],
				answer: "Sports fishing capital of the world"
			},
			{
				question: "Florida is the only state that has",
				choices: ["Two springs with the same name", "Two lakes with the same name", "Two rivers with the same name"],
				answer: "Two rivers with the same name"
			},
			{
				question: "The highest point in Florida is how many feet above sea level?",
				choices: ["345", "320", "307"],
				answer: "345"
			
			}];


			// Variables at start of game //
			var rights = 0;
			var wrongs = 0;
			var counter = 100;
			var clockRunning = false;
			var timer;

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
				
			start();
		});
		// Click button when finished all questions before time expires //
		$(document).on("click", "#done", function(x) {
			stop();
		});

		// Calling functions //
		onehundredSeconds();
		
		run();
		decrement();
		
//each line should be a sentence, click start and put everything on the screen
//questions on screen
	//make a loop
		//make div and put qestion in div
		//add div to page
		//make another loop
			//make radio buttons and put choices
			//add radio buttons to screen
//Start timer

//User answer questions

//If time = 0 before user's done
//Then check user's answers
//Show correct and incorrect answer

//User click finish button
//Stop the clock
//Then check user's answers
//Show correct and incorrect answer
	

});
