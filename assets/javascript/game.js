$(document).ready(function() {
var allow = false; //Global boolean to start/stop the countdown timer
function main() {
	//Declare variables
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var questions = [
	{
	question : "What is sushi traditionally wrapped in?",
	choices: ["Edible SeaWeed", "Tobacco Leaf", "Rolling Papers"],
	correctAnswer: 0
	},
	{
	question : "Which of these people averaged one patent for every three weeks of his life?",
	choices: ["Bill Nye the Science Guy", "Bill Gates", "Nikola Tesla"],
	correctAnswer: 3
	},
	{
	question : "If you had Lafite-Rothchild on your dinner table, what would it be?",
	choices: ["Alcohol", "Wine", "Sauce"],
	correctAnswer: 1
	}
]
//function to get a random object property
function randomProperty(obj) {
    var keys = Object.keys(obj)
    return obj[keys[Math.floor(Math.random() * keys.length)]];
};

var randomQuestion = randomProperty(questions);
console.log(randomQuestion)


var oldQuestions = [];
oldQuestions.push(randomQuestion);
console.log(oldQuestions)
//Append the random question
$("#question").append(randomQuestion.question +"<br>");
var multipleChoice = randomQuestion.choices;

//Loop thru the choices array and add it to a list to display it better
for (var i = 0; i < randomQuestion.choices.length; i++) {
$("#choices").append('<button>'+randomQuestion.choices[i]+'</button>');
}

	$("#choices button").on("click", function() {
			//Gets user answer guess
			var userAnswer = $(this).text();
			if (multipleChoice.indexOf(userAnswer) == randomQuestion.correctAnswer) {
				correct++;
				console.log("right");
				allow = true;
				reset();
				//Go to the next question (run a function?)
			}
			else {
				incorrect++;
				console.log("wrong");
				allow = true;
				reset();
			}

		})

// Countdown Timer

var count=30;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
function timer() {
  count=count-1;
$("#time").html("Time Left: " + count);
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return false;
  }
  if (allow == true) {
  	return false;
  }
  
  //Shows the number of seconds here
}

timer();

function reset() {
$("#time").empty();
$("#question").empty();
$("#choices").empty();
// Countdown Reset
count = 30;


//Append the random question
if (!(questions in oldQuestions)) {
	console.log("no duplicate questions")
randomQuestion = randomProperty(questions);
}
$("#question").append(randomQuestion.question +"<br>");
var multipleChoice = randomQuestion.choices;

//Loop thru the choices array and add it to a list to display it better
for (var i = 0; i < randomQuestion.choices.length; i++) {
$("#choices").append('<button>'+randomQuestion.choices[i]+'</button>');
}
oldQuestions.push(randomQuestion);
console.log(oldQuestions)

}

//main closer
}

$(".btn").on("click", function() {
	//Remove start button
	$('#button').remove();
	main();
	

//button on click closer
});


//ready function closer
})



	


