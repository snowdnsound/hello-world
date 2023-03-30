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

function ageChecker(){
    let age = prompt("How old are you?");
    if (age > 21) {
    document.write("Welome to adulthood, now scoop my litterbox.");
    } else {
    window.location.href = "https://google.com";
}
}
// catChecker();
// ageChecker();
