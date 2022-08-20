// Assignment Code
// ? Created an array of letters numbers and special characters
var lowerCaseLetters =  "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers =  "0123456789".split("");
var specialChar = ["!","\u0022","#","$","%","&","'","(",")","*","+",",","-",
".","/",":",";","<","=",">","?","@","[","\u005C","]","^","_","`","{",
"|", "}","~",];



// ? variable to store the password generated
var passwordProcessing = [];

// ? User Prompts 

function generatePassword (){

  var userLength = prompt (
    "How many characters do you want your password to have? \n Note: It must be between 8 and 128"
  );
 
  var userLowerCase = confirm (
    "Do you want your password to have lowercase letters? \n Click ok if yes and click cancel if no"
  );

  var userUpperCase = confirm(
    "Do you want your password to have uppercase (CAPITAL) letters? \n Click ok if yes and click cancel if no"

  );

  var userNumber = confirm (
    "Do you want your password to have numbers? \n Click ok if yes and cancel if no"
  )

  var userSpecialCharacters = confirm(
    "Do you want your password to have special characters? \n Click ok if yes and click cancel if no"
  );
}
  
// ? Conditional statements for the user to pick at least 1 character and a number between 8 and 128



if  (userLength <8 || userLength > 128){
  alert ("Error! please generate a number between 8 and 128")
  return generatePassword();
}
if (!userLowerCase && !userSpecialCharacters, !userSpecialCharacters && !numbers){
  alert("Error! please pick one category from the characters")
 return generatePassword();
}

else(){
  alert ("Please wait patiently your password is being made");
}

// ? If condition is met then the function will proceed
// ? user selects any criteria to contain then a lowercase, uppercase ,numbers special characters

if (userLowerCase){
  for (var i = 0; i < userLowerCase.length; i++)
  passwordProcessing.push(lowerCaseLetters[i]);
}

if (userUpperCase){
  for (var i =0; i< userUpperCase.length; i++)
  passwordProcessing.push(upperCaseLetters[i]);
}

if (userNumber){
  for (var i= 0; i< userNumber.length; i++)
  passwordProcessing.push(numbers[i]);
}



if (userSpecialCharacters){
  for (var i=0; i< userSpecialCharacters.length; i++)
  passwordProcessing.push(specialChar[i]);
}


// ?
var password = [];







// ? WHEN I click the [button] to generate a password
// ? THEN I am presented with a series of [prompts] for password criteria


















var generateBtn = document.querySelector("#generate");
// ?WHEN[prompted] for password criteria
// ? WHEN I select which criteria to include in the password
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;
  // ? WHEN asked for character types to include in the password
//  ? THEN I [confirm] whether or not to include lowercase, uppercase, numeric, and/or special characters
}
//? WHEN I answer each prompt
// ? WHEN I answer each prompt
// ? THEN my input should be validated and at least one character type should be selected
//  Add event listener to generate button





megaArray = []

generateBtn.addEventListener("click", writePassword);
generatePassword();
console.log("You clicked it yay");

// ? WHEN all prompts are answered
// ? THEN a password is generated that matches the selected criteria

// ? WHEN the password is generated
// ? THEN the password is either displayed in an alert or written to the page

