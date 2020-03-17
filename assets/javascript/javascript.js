//Variables for function to use
var justUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var justLower= "abcdefghijklmnopqrstuvwxyz"
var justSpecial= "!@#$%^&*()"
var justNumbers= "1234567890"


//Generate Function- Generates password based on user selected options
function generate(){

// Clears old generated password
var password = ""

// Password length set as an integer, and forces to be between 8-128
var passWordLength = parseInt(prompt("From 8-128, how long would you like your password?"))
if (passWordLength < 8) {
    console.log("less then")
    alert("You have to choose more than 8! Try again")
    generate()
    return;
} else if (passWordLength > 128) {
    console.log('more than')
    alert("You have to choose less than 128! Try again")
    generate()
    return;
} else {};

//Variables for User to input
var upperCase = confirm("Would you like Uppercase?")
var lowerCase = confirm("Would you like lowercase")
var specialChar = confirm("Would you like special characters?")
var numbers = confirm("Would you like numbers?")

// If all are wanted
if (upperCase === true && lowerCase === true && specialChar === true && numbers === true) {
    var everything = justUpper + justLower + justSpecial + justNumbers;
    for(var i = 0; i<= passWordLength; i++){
        password = password + everything.charAt(Math.floor(Math.random()* Math.floor(everything.length-1)));
    };}
// If none are wanted 
else if (upperCase === false && lowerCase === false && specialChar === false && numbers === false) {
    var reload = confirm("You gotta select something!!")
    ;}
// If upper, lower, and numbers are wanted     
else if (upperCase === true && lowerCase === true && specialChar === false && numbers === true) {
    var upperAndLowerAndNumbers= justUpper + justLower + justNumbers;
    for(var i = 0; i<= passWordLength; i++){
        password = password + upperAndLowerAndNumbers.charAt(Math.floor(Math.random()* Math.floor(upperAndLowerAndNumbers.length-1)));
    };} 
// If upper and lower are wanted    
else if (upperCase === true && lowerCase === true && specialChar === false && numbers === false) {
    var upperAndLower= justUpper + justLower;
    for(var i = 0; i<= passWordLength; i++){
        password = password + upperAndLower.charAt(Math.floor(Math.random()* Math.floor(upperAndLower.length-1)));
    };}
// If Upper, Special, and numbers are wanted 
else if (upperCase === true && lowerCase === false && specialChar === true && numbers === true) {
    var upperAndSpecialAndNumbers = justUpper + justSpecial + justNumbers;
    for(var i = 0; i<= passWordLength; i++){
        password = password + upperAndSpecialAndNumbers.charAt(Math.floor(Math.random()* Math.floor(upperAndSpecialAndNumbers.length-1)));
    };}
// If Upper and Special are wanted 
else if (upperCase === true && lowerCase === false && specialChar === true && numbers === false) {
    var upperAndSpecial = justUpper + justSpecial;
    for(var i = 0; i<= passWordLength; i++){
        password = password + upperAndSpecial.charAt(Math.floor(Math.random()* Math.floor(upperAndSpecial.length-1)));
    };}    
// If Upper and numbers are wanted
else if (upperCase === true && lowerCase === false && specialChar === false && numbers === true) {
    var upperAndNumbers = justUpper + justNumbers;
    for(var i = 0; i<= passWordLength; i++){
        password = password + upperAndNumbers.charAt(Math.floor(Math.random()* Math.floor(upperAndNumbers.length-1)));
    };}
// If Upper are wanted
else if (upperCase === true && lowerCase === false && specialChar === false && numbers === false) {
    for(var i = 0; i<= passWordLength; i++){
        password = password + justUpper.charAt(Math.floor(Math.random()* Math.floor(justUpper.length-1)));
    };}
// If Lower, Special, and numbers are wanted
else if (upperCase === false && lowerCase === true && specialChar === true && numbers === true) {
    var lowerAndSpecialAndNumbers = justLower + justSpecial + justNumbers;
    for(var i = 0; i<= passWordLength; i++){
        password = password + lowerAndSpecialAndNumbers.charAt(Math.floor(Math.random()* Math.floor(lowerAndSpecialAndNumbers.length-1)));
    };}
// If Lower and Special are wanted
else if (upperCase === false && lowerCase === true && specialChar === true && numbers === false) {
    var lowerAndSpecial = justLower + justSpecial;
    for(var i = 0; i<= passWordLength; i++){
        password = password + lowerAndSpecial.charAt(Math.floor(Math.random()* Math.floor(lowerAndSpecial.length-1)));
    };}
// If Lower and Numbers are wanted
else if (upperCase === false && lowerCase === true && specialChar === false) {
    var lowerAndNumbers = justLower + justNumbers
    for(var i = 0; i<= passWordLength; i++){
        password = password + lowerAndNumbers.charAt(Math.floor(Math.random()* Math.floor(lowerAndNumbers.length-1)));
    };}
// If Lower are wanted
else if (upperCase === false && lowerCase === true && specialChar === false) {
    for(var i = 0; i<= passWordLength; i++){
        password = password + justLower.charAt(Math.floor(Math.random()* Math.floor(justLower.length-1)));
    };}  
// If Special and Numbers are wanted
else if (upperCase === false && lowerCase === false && specialChar === true && numbers === true) {
    var specialAndNumbers = justNumbers + justSpecial
    for(var i = 0; i<= passWordLength; i++){
        password = password + specialAndNumbers.charAt(Math.floor(Math.random()* Math.floor(specialAndNumbers.length-1)));
    };}
// If special are wanted    
else if (upperCase === false && lowerCase === false && specialChar === true && numbers === false) {
    for(var i = 0; i<= passWordLength; i++){
        password = password + justSpecial.charAt(Math.floor(Math.random()* Math.floor(justSpecial.length-1)));
    };}
// If numbers are wanted 
else if (upperCase === false && lowerCase === false && specialChar === false && numbers === true) {
    for(var i = 0; i<= passWordLength; i++){
        password = password + justNumbers.charAt(Math.floor(Math.random()* Math.floor(justNumbers.length-1)));
    };}
else {} 
// Add password to display area
document.getElementById("display").value = password
return;
}


