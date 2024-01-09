// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("Enter the length of your password (between 8 and 128 characters):"));

  // Validate the length input
  if(isNaN(length) || length<8 || length>128){
  alert("Enter a valid length")
  return null;
  }
  var includeLowercase = confirm("Include Lowercase in your password?");
  var includeUppercase = confirm("Include Uppercase in your password?");
  var includeNumeric = confirm("Include Numeric in your password?");
  var includeSpecial = confirm("Include Special in your password?");

  if(!includeLowercase&& !includeUppercase && !includeNumeric && !includeSpecial)
  {
    alert("Include atleast one character!!")
    return null;
  }
  return {length: length, includeNumeric:includeNumeric, includeSpecial:includeSpecial, includeUppercase:includeUppercase , includeLowercase:includeLowercase}

}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex]
}

// Function to generate password with user input
function generatePassword() {
  var final_password=[];
  var choices = getPasswordOptions();

  if(!choices){
    alert("give atleast one choice")
    return null;
  }
  if(choices.includeNumeric)
  {
  final_password = final_password.concat(numericCharacters);
  }
  if(choices.includeSpecial)
  {
    final_password = final_password.concat(specialCharacters);
  }
  if(choices.includeUppercase)
  {
      final_password = final_password.concat(upperCasedCharacters);
  }
  if(choices.includeLowercase)
  {
  final_password = final_password.concat(lowerCasedCharacters);
  }
  var password = "";
  for (var i = 0; i < choices.length; i++) {
    password += getRandom(final_password);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);