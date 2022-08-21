// Assignment Code
// ? Created an array of letters numbers and special characters
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specialChar = [
  "!",
  "\u0022",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\u005C",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// ? User Prompts

function generatePassword() {
  // ? variable to store the password generated
  var passwordProcessing = [];
  var userLength = prompt(
    "How many characters do you want your password to have? \n Note: It must be between 8 and 128"
  );

  var userLowerCase = confirm(
    "Do you want your password to have lowercase letters? \n Click ok if yes and click cancel if no"
  );

  var userUpperCase = confirm(
    "Do you want your password to have uppercase (CAPITAL) letters? \n Click ok if yes and click cancel if no"
  );

  var userNumber = confirm(
    "Do you want your password to have numbers? \n Click ok if yes and cancel if no"
  );

  var userSpecialCharacters = confirm(
    "Do you want your password to have special characters? \n Click ok if yes and click cancel if no"
  );

  // ? Conditional statements for the user to pick at least 1 character and a number between 8 and 128
  // ? If condition is  met, then he/she will be alerted with an error and if else (criteria is met) then the function will push through.

  if (userLength < 8 || userLength > 128) {
    alert("Error! please generate a number between 8 and 128");
    return "";
  }
  if (
    !userLowerCase &&
    !userUpperCase &&
    !userSpecialCharacters &&
    !userNumber
  ) {
    alert("Error! please pick one category from the characters");
    return "";
  } else {
    alert("Please wait patiently your password is being made");
  }

  // ? If condition is met then the function will proceed
  // ? user selects any criteria to contain then a lowercase, uppercase ,numbers special characters

  if (userLowerCase) {
    for (var i = 0; i < lowerCaseLetters.length; i++)
      passwordProcessing.push(lowerCaseLetters[i]);
  }

  if (userUpperCase) {
    for (var i = 0; i < upperCaseLetters.length; i++)
      passwordProcessing.push(upperCaseLetters[i]);
  }

  if (userNumber) {
    for (var i = 0; i < numbers.length; i++)
      passwordProcessing.push(numbers[i]);
  }

  if (userSpecialCharacters) {
    for (var i = 0; i < specialChar.length; i++)
      passwordProcessing.push(specialChar[i]);
  }

  // ?
  var password = "";
  for (var i = 0; i < userLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordProcessing.length);
    password = password + passwordProcessing[randomIndex];
  }
  return password;
}
// ?
var generateBtn = document.querySelector("#generate");
// ? This is the function that will process once the click event occured
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
passwordProcessing = [];
// ? An event listener to listen to the click action and if this action happens then the function "writePassword" will happen
generateBtn.addEventListener("click", writePassword);
