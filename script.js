var generateBtn = document.querySelector("#generate");
var createBtn = document.querySelector("#createBtn");

var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letterLwrArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUprArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharArr = ["!", "?", "@", "$", "%", "&", "*"];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var pushPassword = "";
    var characterArr = [];
    var passLength = prompt("Choose a password length between 8-128");

    if (passLength < 8 || passLength > 128) {
      passLength = prompt("Value out of range. Choose a number between 8-128");
    }
    else if (isNaN(passLength)) {
      passLength = prompt("Value is not a number. Choose a number between 8-128.");
    }

    if (confirm("Click OK to include numbers")) {
      characterArr = characterArr.concat(numArr);
    }
    if (confirm("Click OK to include lower case letters")) {
      characterArr = characterArr.concat(letterLwrArr);
    }
    if (confirm("Click OK to include upper case letters")) {
      characterArr = characterArr.concat(letterUprArr);
    }
    if (confirm("Click OK to include special characters")) {
      characterArr = characterArr.concat(specialCharArr);
    }
    for (let i = 0; i < passLength; i++) {
      var ranArrSelector = Math.floor(Math.random() * characterArr.length);

      pushPassword += characterArr[ranArrSelector];
    }
    return pushPassword;
  }

  // NOTE: Uncomment this and the div tag of the HTML to use check boxes instead of prompts.
  //       Below is a usable code to use checkboxes on the screen.  
  //
  //   if (document.querySelector("#includeNum").checked) {
  //     characterArr = characterArr.concat(numArr);
  //   }
  //   if (document.querySelector("#lwrCase").checked) {
  //     characterArr = characterArr.concat(letterLwrArr);
  //   }
  //   if (document.querySelector("#uprCase").checked) {
  //     characterArr = characterArr.concat(letterUprArr);
  //   }
  //   if (document.querySelector("#speChars").checked) {
  //     characterArr = characterArr.concat(specialCharArr);
  //   }
  //   for (let i = 0; i < document.querySelector("#passLength").value; i++) {
  //     var ranArrSelector = Math.floor(Math.random() * characterArr.length);
  //
  //     pushPassword += characterArr[ranArrSelector];
  //   }
  //   return pushPassword;
  // }

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
