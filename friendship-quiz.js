// questions to be randomly asked on page load
var questionsList = ["What are your friend's favorite foods?", "What are your friend's favorite animals?", "What are your friend's favorite movies?", "What kind of music does your friend like?", "What is your friend's favorite color?", "How many siblings does your friend have?", "What is your friend's favorite thing to do in their free time?"];


//randomly chooses a question to display
function init() {
  var randomIndex = Math.floor(Math.random() * questionsList.length);
  document.getElementById("question").innerHTML = questionsList[randomIndex];
}

window.onload = init;

var answerList = []; //initialize answerList to be empty

//adds user-submitted answer to answerList
function submitAnswer() {
  var answer = document.getElementById("answerInput").value;
  document.getElementById("answerInput").value = '';
  answerList.push(answer);
}

//checks if user-submitted guess is in answerList
function checkGuess() {
  var guess = document.getElementById("guessInput").value;
  var x = answerList.length;
  for(var i = 0; i < x; i++){
      if(guess == answerList[i]){
        document.getElementById("result").innerHTML = "Your BFF would be so proud <3";
        return;
      }
  }
  document.getElementById("result").innerHTML = "Well, this is akward....";

}
