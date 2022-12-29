var read = require('readline-sync');
var score=0;
if(read.keyInYNStrict(' This is a quiz for the Batman fans.\n There will be penalty for wrong answers.\n Do you want to proceed?')) {
  var userInput = read.question("\n Cool! Let me tell you that the quiz has 3 levels of five questions each.\n You must score at-least 3 points at any level to enter the next level.\n Let's see what you've got.\n Before we begin, what's your name?\n ");
    console.log("\n Level one --\n")
  function play(q,answer) {
    var userAnswer = read.question(q).toLowerCase();
    if (userAnswer==answer) {
      console.log("Correct answer!");
      score++;
    }
    else {
      console.log("Sorry, wrong answer.");
    }
  }
  var levelOne = [{que: "Who played Bruce Wayne in the movie 'The Dark Knight'\n?", ans: "christian bale"}, {que: "Which iconic villain did Henri Ducard turn out to be?\n", ans: "Ra's Al Ghul"},{que: "Complete the quote 'Some men just want to watch the world...\n", ans: "burn"},{que: "Who played the Joker in 'The Dark Knight'?\n", ans: "heath ledger"},{que: "Who played Bane in The Dark Knight Rises\n", ans: "tom hardy"}]; 
  var levelTwo = [{que: "Which Dark Knight trilogy villain literally broke Batman's back?\n", ans: "bane"},{que: "Who did Bruce Wayne promote to CEO of Wayne Enterprises?\n", ans: "lucius fox"}, {que: "Complete the Bane quote: 'You think darkness is ...' what?\n", ans: "your ally"},{que: "What is The Dark Knight trilogy's Batmobile called?\n", ans: "tumbler"},{que: "What is John Blake's real name\n", ans: "robin"}];
  var levelThree = [{que: "Which villain meets their end at the end of The Dark Knight?\n", ans: "two face"},{que: "Where does Batman find Lau?\n", ans: "hong kong"},{que: "What is the Joker's disguise when he demolishes the hospital?\n", ans: "nurse"},{que: "Who played Catwoman in The Dark Knight Rises?\n", ans: "anna hathaway"},{que: "Morgan Freeman played which character in Batman Begins (2005)\n", ans: "lucius fox"}];
  for(var i=0; i<levelOne.length; i++) {
    play(levelOne[i].que,levelOne[i].ans)
  }
  if(score>=3) {
    console.log("Congrats you've qualified for level two\n Your score is", score, "\n Level two --\n");
    for(i=0; i<levelTwo.length; i++) {
      play(levelTwo[i].que,levelTwo[i].ans)
    }
    if(score>=6) {
      console.log("Congrats you've qualified for level three\n Your score is", score, "\n Level three --\n");
      for(i=0; i<levelThree.length; i++) {
        play(levelThree[i].que,levelThree[i].ans)
      }
        if(score>10) {
        console.log("\n\nBam!! Nailed it! You scored more than 10. You're a true Batman junkie no doubt!")
        } 
        else{console.log("Your total score is", score, "\nCongratulations! You're a true Batman fan.");}
    }
    else {console.log("End of quiz.\n Your total score is", score)};
  }
  else { console.log("End of quiz.\n You total score is", score);}
}
else {console.log(" Alright! Have a good day!");}

