// Assignment code here
//add listener to generate password button
document.querySelector("#generate").addEventListener("click", writePassword);

//declaring the character types and teh variables that will be using them
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialcharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", ",", ".", "<", ">", "/", "?"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var passwordlength = "";
var includeUppercase;
var includeLowercase;
var includeSpecialCharacter;
var includeNumbers;

//function to set password length
function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password to have? Please choose between 8 and 128 characters."));
  //validation to ensure password length is between given parameters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please set a value that is between 8 and 128 characters and try again.");
    var passwordLength = (prompt("How many characters would you like your password to have? Please choose between 8 and 128 characters."));
  }

  else {
    includeUppercase = confirm("Will this password contain UPPERCASE letters?");
    includeLowercase = confirm("Will this password contain lowercase letters?");
    includeSpecialCharacter = confirm("Will this password contain special characters?");
    includeNumbers = confirm("Will this password contain numerical values?");
  }

  if (includeUppercase === false && includeLowercase === false && includeSpecialCharacter === false && includeNumbers === false) {
    alert("Please choose one character type for your password!");
    includeUppercase = confirm("Will this password contain UPPERCASE letters?");
    includeLowercase = confirm("Will this password contain lowercase letters?");
    includeSpecialCharacter = confirm("Will this password contain special characters?");
    includeNumbers = confirm("Will this password contain numerical values?");
  }

  var selectedCharacters = []
  if (includeUppercase) {
    selectedCharacters = selectedCharacters.concat(uppercase)
    console.log(selectedCharacters)
  }

  if (includeLowercase) {
    selectedCharacters = selectedCharacters.concat(lowercase)
    console.log(selectedCharacters)
  }

  if (includeSpecialCharacter) {
    selectedCharacters = selectedCharacters.concat(specialcharacter)
    console.log(selectedCharacters)
  }

  if (includeNumbers) {
    selectedCharacters = selectedCharacters.concat(numbers)
    console.log(selectedCharacters)
  }
  console.log(selectedCharacters)

  var createdPassword = ""
  for (var i = 0; i < passwordLength; i++) {
    createdPassword = createdPassword + selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
    console.log(createdPassword)
  }
  return createdPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
