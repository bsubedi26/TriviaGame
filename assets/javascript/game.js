$(document).ready(function() {

$(".btn").on("click", function() {

	//Remove start button
	$('#button').remove();

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
	choices: ["Bill Nye the Science Guy", "Bill Gates", "Buddha", "Nikola Tesla"],
	correctAnswer: 3
	},
	{
	question : "If you had Lafite-Rothchild on your dinner table, what would it be?",
	choices: ["Alcohol", "Wine", "High Grade Marijuana"],
	correctAnswer: 1
	}

]

//function to get a random object property
function randomProperty(obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

// console.log(randomProperty(questions));

var randomQuestion = randomProperty(questions);

console.log(randomQuestion.choices.length)




//Changing page contents
//Append the random question
$("#question").append(randomQuestion.question +"<br>");
var multipleChoice = randomQuestion.choices;

//Loop thru the choices array and add it to a list to display it better
for (var i = 0; i < randomQuestion.choices.length; i++) {

$("#choices").append('<li>'+randomQuestion.choices[i]+'</li>');
      
}
	

		$("#choices li").on("click", function() {
			//Gets user answer guess
			var userAnswer = this.innerHTML;
	
			if (multipleChoice.indexOf(userAnswer) == randomQuestion.correctAnswer) {
				correct++;
				console.log("right")

				//Generate next question (call a function maybe?)
			}

		})
		


			//Timeout example
			function timeout() {

			console.log("timeout?")

			}
			setTimeout(timeout, 5000);



// Countdown Timer
var count=30;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }

  
$("#time").html("Time Left: " + count);
  //Do code for showing the number of seconds here
}


});



})



	


