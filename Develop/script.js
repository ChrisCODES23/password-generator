// Assignment Code
// ? Created an array of letters numbers and special characters
var lowerCaseLetters =  "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers =  "0123456789".split("");
var specialChar = ["!","\u0022","#","$","%","&","'","(",")","*","+",",","-",
".","/",":",";","<","=",">","?","@","[","\u005C","]","^","_","`","{",
"|", "}","~",];






var superArray = [];



function generatePassword (){

  var userLength = prompt {
    "How many characters do you want your password to have? \n Note: It must be between 8 and 128"
  };
 
  var userLowerCase = confirm {
    "Do you want your password to have lowercase letters? \n Click ok if yes and click cancel if no"
  };

  var userUpperCase = confirm{
    "Do you want your password to have uppercase (CAPITAL) letters? \n Click ok if yes and click cancel if no"

  };

  var userSpecialCharacters = confirm{
    "Do you want your password to have special characters? \n Click ok if yes and click cancel if no"
  };

  


}













// ? WHEN I click the [button] to generate a password
// ? THEN I am presented with a series of [prompts] for password criteria


















var generateBtn = document.querySelector("#generate");
// ?WHEN[prompted] for password criteria
// ? WHEN I select which criteria to include in the password
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


// ?WHEN prompted for the length of the password
//  ?THEN I choose a length of at least 8 characters and no more than 128 characters
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

// ? WHEN all prompts are answered
// ? THEN a password is generated that matches the selected criteria

// ? WHEN the password is generated
// ? THEN the password is either displayed in an alert or written to the page

