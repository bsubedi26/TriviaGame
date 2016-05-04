$(document).ready(function() {

var allow = false; //Global boolean

function main() {
	//Declare variables
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var questions = [
	{
	question : "Which of the following is NOT a valid JSON object?",
	choices: ["seaWeed", "Tobacco Leaf", "Rolling Papers"],
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
	},
	{
	question : "Who is the current president of the United States",
	choices: ["Nancy Peloski", "Tony Blair", "Barack Obama"],
	correctAnswer: 1
	},
	{
	question : "Who is the current attorney general of the federal government?",
	choices: ["Harry S. Truman", "Judge Judy", "Eric Holder"],
	correctAnswer: 1
	}
]

//function to get a random object property
function randomProperty(obj) {
    var keys = Object.keys(obj)
    return obj[keys[Math.floor(Math.random() * keys.length)]];
}

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
				$("#question").empty();
				$("#choices").html("You are correct!")
				setTimeout(reset, 2000);
				
			}
			else {
				incorrect++;
				console.log("wrong");
				allow = true;
				$("#question").empty();
				$("#choices").html("You are wrrrrrrooooonnngggggg! The correct answer: " + randomQuestion.choices[randomQuestion.correctAnswer])
				setTimeout(reset, 2000);
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
     //counter ended, do something here
     clearInterval(counter);

     
  }
  if (allow == true) {
  	return false;
  }
  }
timer();


function reset() {
$("#time").empty();
$("#question").empty();
$("#choices").empty();
// Countdown Reset
count = 30;

console.log(questions)
console.log(oldQuestions)

//Remove the question that was displayed in order to avoid any duplicate questions
for (var i = 0; i < oldQuestions.length; i++) {
	for (var j = 0; j < questions.length; j++) {
	if (oldQuestions[i] == questions[j]) {
		delete questions[j];

		
	}
  }
}
randomQuestion = randomProperty(questions);
oldQuestions.push(randomQuestion);

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
				
			}
			else {
				incorrect++;
				console.log("wrong");
				allow = true;
				reset();
			}

		})

}

//main closer
}


$(".btn").on("click", function() {
	//Remove start button
	$('#button').remove();
	$("p").empty();
	main();
	

//button on click closer
});


//ready function closer
})



	


