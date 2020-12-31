// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordOpt = document.querySelector("#passOpt");
var specialChar = ["!", "?", "@", "$", "&", "*"];
var letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Write password to the #password input
function writePassword() {
  generateBtn.style.display = "none";
  passwordOpt.style.display = "inline-block";

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
