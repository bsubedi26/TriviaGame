$(document).ready(function() {



$(".btn").on("click", function() {
	
	// $(".jumbotron").fadeOut(500);
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var questions = [
	{
	question : "Which is the correct answer?",
	choices: ["Makalu", "K2", "Mount Everest"],
	correctAnswer: 2
	},
	{
	question : "Which is the correct answer?",
	choices: ["1800", "1905", "2000"],
	correctAnswer: 1
	},
	{
	question : "Which is the correct answer?",
	choices: ["Sweden", "Germany", "France", "Argentina"],
	correctAnswer: 2
	}
]

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

console.log(pickRandomProperty(questions));
console.log(typeof(questions));
	// var randomQuestion = questions.choices[ Math.floor(Math.random() * questions.length)]


	//Find a way to select one random question to display
		$(".jumbotron").html("randomQuestion");

		setTimeout(change(), 6000);

		function change() {
			console.log("geg")


		}


})

})





	


