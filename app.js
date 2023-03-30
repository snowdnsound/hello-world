// Anatomy of a function
// Function declaration
// function nameOfFunction(parameters){
//    code to be executed; 
//    code to be executed;
// }

function catChecker(){
    let message = "Special welcome to our blog!";
    alert(message);
    if (confirm("Do you love cats?")) {
        document.write("Good. ");
    } else {
        document.write("Well you will love cats after visiting this site. ");
    }    
    let usersCat = prompt("What is your favorite cat type?");
    if(usersCat == ""){
        usersCat = prompt("No really, what is it?");
    }
    console.log("We love " + usersCat + " and string conCATenation");
    document.write("We love " + usersCat + " and string conCATenation. ");
}

function guessCats(){
    let myNumber = 2;
    let usersGuess = prompt("Guess how many cats do I have between 1 & 6?");
    while (usersGuess != myNumber){
    usersGuess = prompt("Wrong! Guess again, a number between 1 & 6");
  }
  let catMessage = "Yes I have two cats!";
  alert(catMessage);
}

function ageChecker(){
    let age = prompt("How old are you?");
    if (age > 20) {
    document.write("Welome to adulthood, now scoop my litterbox.");
    } else {
    window.location.href = "https://google.com";
}
}

function rateSite(){
    let userNum = prompt("How many starts you would give this experience 1-5?");
    for(let i = 0; i < userNum; i++){
        document.write("<img src='images/Star.png' alt='orange stars'/>");
}
}

catChecker();
guessCats();
rateSite();
ageChecker();
