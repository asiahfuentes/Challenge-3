// Assignment Code
var generateBtn = document.querySelector("#generate");


function getPasswordOptions(userNumCharacters) {
  if (isNaN(userNumCharacters)) {
    alert("Please enter a valid number.");
    return false;
  } else if (parseInt(userNumCharacters) < 8) {
    alert("Password length must be at least 8 characters.");
    return false;
  } else if (parseInt(userNumCharacters) >= 128) {
    alert("Password must be less than 129 characters.");
    return false;
  }
  return true;
}

function getRandomElementFromArray(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}


function generatePassword() {
  var userNumCharacters = prompt(
    "How many characters do you want your password to contain?"
  );
  var passwordValid = getPasswordOptions(userNumCharacters);
  if (passwordValid) {
    var hasSpecialCharacters = confirm(
      "Click OK to confirm special characters."
    );
    var hasNumbers = confirm("Click OK to confirm adding numeric characters.");
    var hasLowerCase = confirm(
      "Click OK to confirm adding lowercase characters."
    );
    var hasUpperCase = confirm(
      "Click OK to confirm including uppercase characters."
    );
  }
  
  if (
    [hasSpecialCharacters, hasNumbers, hasLowerCase, hasUpperCase].includes(
      true
    )
  )
    
    var chosenChar = [];
  var guaranteedChar = [];

 
  if (hasSpecialCharacters) {
    chosenChar = chosenChar.concat(specialCharacters);
    guaranteedChar.push(
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    );
  }
  if (hasNumbers) {
    chosenChar = chosenChar.concat(numericCharacters);
    guaranteedChar.push(
      numericCharacters[Math.floor(Math.random() * numericCharacters.length)]
    );
  }
  if (hasLowerCase) {
    chosenChar = chosenChar.concat(lowerCasedCharacters);
    guaranteedChar.push(
      lowerCasedCharacters[
        Math.floor(Math.random() * lowerCasedCharacters.length)
      ]
    );
  }
  if (hasUpperCase) {
    chosenChar = chosenChar.concat(upperCasedCharacters);
    guaranteedChar.push(
      upperCasedCharacters[
        Math.floor(Math.random() * upperCasedCharacters.length)
      ]
    );
  }
  var randomChar = [];
  for (var i = 0; i < userNumCharacters; i++) {
    var index = Math.floor(Math.random() * chosenChar.length);
    randomChar.push(chosenChar[index]);
  }
  var replacedPosition = {};
  while (guaranteedChar.length > 0) {
    var replaceChar = Math.floor(Math.random() * randomChar.length);
    if (!replacedPosition[replaceChar]) {
      randomChar[replaceChar] = guaranteedChar.pop();
      replacedPosition[replaceChar] = true;
    }
  }
  return randomChar.join("");
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

