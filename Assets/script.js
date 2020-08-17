// Assignment code here
function generatePassword() {
    var password = "";

var character = {
    size: characterLength(),
    digits: "",
    charOptions: [
      {
        name: "Lowercase Letters",
        characters: "abcdefghijklmnopqrstuvwxyz",
        use: true,
      },
      {
        name: "Uppercase Letters",
        characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        use: true,
      },
      {
        name: "Numbers",
        characters: "0123456789",
        use: true,
      },
      {
        name: "Special Characters",
        characters: "!#$%&()[]*+,-/:<>=?^_~@",
        use: true,
      }
    ]
  };


// Lowercase Array
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Uppercase Array
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Numeric Array
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Array of Special Characters
var specialArray = ["!", "#", "$", "%", "&", "(", ")", "[", "]", "*", "+", ",", "-", "/", ":", "<", ">", "=", "?", "^", "_", "~"]



// Function for Password Length
function characterLength() {
    // prompt for the character length
    var length = parseInt(prompt("How long would you like your password to be? \nPassword must be at least 8 characters long and no more than 128 characters. \nEnter password length here:"));
    
    while(!length || length < 8 || length > 128) {
      alert("Please enter a valid character length.");
      length = parseInt(prompt("How long would you like your password to be? \nPassword must be at least 8 characters long and no more than 128 characters. \nEnter password length here:"));
    }
    
    // confirmation
    var userConfirm = confirm("Are you sure you want your password to be " + length + " characters long?");
    if(!userConfirm) {
      return characterLength();
    }

    return length;
  };


// Function for Character Types
function decide() {
    // prompt for each character type in the charOptions array
    var useChar = parseInt(prompt("Set the value to 'TRUE' if you'd like to use that character type in your password or to 'FALSE' to exclude it. \nChange the 'TRUE' and 'FALSE' value by entering the number corresponding to the character list. \nEnter 9 once you are satisfied with your selections. \n 1: " + character.charOptions[0].name + " USE: " + character.charOptions[0].use + " \n 2: " + character.charOptions[1].name + " USE: " + character.charOptions[1].use + " \n 3: " + character.charOptions[2].name + " USE: " + character.charOptions[2].use +" \n 4: " + character.charOptions[3].name + " USE: " + character.charOptions[3].use));

    switch (useChar) {
      case 1:
        character.charOptions[0].use = !character.charOptions[0].use;
        decide();
        break;
      case 2:
        character.charOptions[1].use = !character.charOptions[1].use;
        decide();
        break;
      case 3:
        character.charOptions[2].use = !character.charOptions[2].use;
        decide();
        break;
      case 4:
        character.charOptions[3].use = !character.charOptions[3].use;
        decide();
        break;
      case 5:
        for(var i = 0; i < character.charOptions.length; i++) {
          // verify characters user has opted not to use
          if(!character.charOptions[i].use){
            var final = confirm("Are you sure you do not want to use " + character.charOptions[i].name + "?")
            if(!final) {
              alert("To use" + character.charOptions[i].characters + "set its use to 'TRUE'");
              decide();
            }
          } else {
            // push wanted characters to the character.digits var
            character.digits += character.charOptions[i].characters;
          }
        }
        break;
      default: 
        alert("Please enter numbers 1 through 4 to change the use of that character type. \nEnter number 5 to continue with your selections.");
        decide();
    }
    
    while (character.digits === "") {
      alert("Your password must contain at least one character type. Please set one to 'TRUE'");
      decide();
    }
  }

  decide();

  for(var i = 0; i < character.size; i++) {
    password += character.digits.charAt(Math.floor(Math.random() * character.digits.length));
  }

  // return the generated password as the function result
  return password;
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