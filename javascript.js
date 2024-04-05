 var questionOne = prompt("What is your name?");
 document.getElementById("blankOne").innerHTML = questionOne;

 var questionTwo = prompt("Please enter the secret phrase. I know... I know.. you have no idea... That's ok, just guess!");
 document.getElementById("blankTwo").innerHTML = questionTwo;

 var questionThree = prompt("Another popup... I know I hate these too!!  Although, your secret phrase was not nice enough.. please enter your favorite thing ");
 document.getElementById("blankThree").innerHTML = questionThree + '!!' ;

 var questionFour = prompt("Hmm.. Not correct. let's try your favorite song instead. ");
 document.getElementById("blankFour").innerHTML = questionFour;

 var questionFive = prompt("Maybe a catch phrase of your's will do the trick!");
 document.getElementById("blankFive").innerHTML = questionFive;

 var questionSix = prompt("Dang... Not this being your 6th try. Come on! Give me the most random thing you can think of ");
 document.getElementById("blankSix").innerHTML = questionSix + '!!' ;

 var questionSeven = prompt("Yikes.. I'm getting sleepy. Where would you rather be right now other than chatting with me of course ^-^ ");
 document.getElementById("blankSeven").innerHTML = questionSeven;

 //name and date
 var myName = "KeLin";
console.log(myName);

var theMonth = "April";
var theYear = 2024;

console.log(theMonth + theYear);
