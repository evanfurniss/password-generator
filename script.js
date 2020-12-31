// Assignment Code
var generateBtn = document.querySelector("#generate");
var createBtn = document.querySelector("#createBtn");

var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letterLwrArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUprArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharArr = ["!", "?", "@", "$", "%", "&", "*"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var pushPassword = "";
    var characterArr = [];

    if (document.querySelector("#includeNum").checked) {
      characterArr = characterArr.concat(numArr);
    }
    if (document.querySelector("#lwrCase").checked) {
      characterArr = characterArr.concat(letterLwrArr);
    }
    if (document.querySelector("#uprCase").checked) {
      characterArr = characterArr.concat(letterUprArr);
    }
    if (document.querySelector("#speChars").checked) {
      characterArr = characterArr.concat(specialCharArr);
    }
    for (let i = 0; i < document.querySelector("#passLength").value; i++) {
      var ranArrSelector = Math.floor(Math.random() * characterArr.length);

      pushPassword += characterArr[ranArrSelector];
    }
    return pushPassword;
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
