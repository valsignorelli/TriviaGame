$(document).ready(function() {
// Create a function that creates the start button and initial screen

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

//start button

$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	clickSound.play();
	generateHTML();

	timerWrapper();

}); // Closes start-button 

$("body").on("click", ".answer", function(event){
	
	clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		//correct answer

		clearInterval(theClock);
		generateWin();
	}
	else {
		//wrong answer
		clearInterval(theClock);
		generateLoss();
	}
}); // Close answer 

	//reset button
$("body").on("click", ".reset-button", function(event){
	
	resetGame();
}); 

});  //  Closes jQuery wrapper

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>No more time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/trump.jpg'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Trump says Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/trump.jpg'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>20</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 20;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(twentySeconds, 1000);
	function twentySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 20;
	generateHTML();
	timerWrapper();
}

    var startScreen;
    var gameHTML;
    var counter = 20;
    var questionArray = ["Who's the author of Monalisa?",
    "Who's one of the most important Brazilian painters?",
    "How many paintings Van Gogh sold in his lifetime?",
    "What's the most expensive painting ever sold?",
    "How many 'names' are in Picasso's full name?",
    "Who's the most recognized Surrealist painter?",
    "Celebrities love this Brazilian painter, who?",
    "Who's the painter that cut his own ear?"];
    
    var answerArray = [["Leonardo Da Vinci", "Picasso", "Van Gogh", "Munch"], ["Jose da Silva","Candido Portinari","Francisco Rebolo","Juarez Machado"], ["3", "8", "1", "5"], ["Monalisa","Guernica","Salvator Mundi","The Starry Night"], ["5", "11", "9", "14"], ["Salvador Dali","Van Gogh","Di Cavalcanti","Claude Monet"], ["Anita Mafaldi", "Romero Britto", "Di Cavalcanti", "Portinari"], ["Dali","Renoir","Monet","Van Gogh"]];
    var imageArray = ["<img class='center-block img-right' src='assets/images/monalisa.jpg'>" + "<p class='text-center'>Leonardo Da Vinci painted Monalisa in 1503</p>",
     "<img class='center-block img-right' src='assets/images/portinari.jpg'>" + "<p class='text-center'>Self-Portrait Candido Portinari</p>",
      "<img class='center-block img-right' src='assets/images/vangoghsold.jpg'>" + "<p class='text-center'>Red Vineyards near Arles - 1888</p>",
        "<img class='center-block img-right' src='assets/images/salvatormundi.jpg'>" + "<p class='text-center'>Salvator Mundi by Da Vinci, cost $450million</p>",
        "<img class='center-block img-right' src='assets/images/picasso.jpg'>" + "<p class='text-center'>Picasso's Full Name: Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso</p>",
         "<img class='center-block img-right' src='assets/images/dali.jpg'>" + "<p class='text-center'>Salvador Dali</p>",
         "<img class='center-block img-right' src='assets/images/romerobritto.jpg'>" + "<p class='text-center'>Best Friends & Happy Cat and Snob Dog</p>",
         "<img class='center-block img-right' src='assets/images/vangogh.jpeg'>" + "<p class='text-center'>Self-Portrait with Bandaged Ear - 1889</p>"];
    var correctAnswers = ["A. Leonardo Da Vinci", "B. Candido Portinari", "C. 1", "C. Salvator Mundi", "D. 14", "A. Salvador Dali", "B. Romero Britto", "D. Van Gogh"];
    var questionCounter = 0;
    var selectedAnswer;
    var theClock;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;
    var clickSound = new Audio("sound_ex_machina_Button_Click.mp3");