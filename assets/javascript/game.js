$(document).ready(function() {



$(".btn").on("click", function() {
	
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var questions = [
	{
	question : "What is sushi traditionally wrapped in?",
	choices: ["Edible SeaWeed", "Tobacco Leaf", "Cannabis", "Rolling Papers"],
	correctAnswer: 1
	},

	{
	question : "Which of these people averaged one patent for every three weeks of his life?",
	choices: ["Makalu", "Nikola Tesla", "Mount Everest"],
	correctAnswer: 1
	},
	{
	question : "If you had Lafite-Rothchild on your dinner table, what would it be?",
	choices: ["Type of alcohol", "Wine", "Cannabis"],
	correctAnswer: 1
	}

]

//function to get a random object property
function randomProperty(obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

console.log(randomProperty(questions));
var randomQuestion = randomProperty(questions);

console.log(randomQuestion.choices.length)
	

//Trying to remove start from button
$("#button").empty();

//Loop thru the choices array and add it to a list to display it better
for (var i = 0; i < randomQuestion.choices.length; i++) {
$(this).append('<li>' + randomQuestion.choices[i] + '</li>');
        

            // $(this).appendTo(".jumbotron");
            $(".jumbotron").append(this);
        
}
	//Find a way to select one random question to display
		// $(".jumbotron").html(randomQuestion.question +"<br><br>" +  randomQuestion.choices  +"<br><br>" );


		function change() {
			
			console.log("timeout?")

		}
		setTimeout(change, 3000);



})

})





	


