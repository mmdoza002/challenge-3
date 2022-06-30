var generateBtn = document.querySelector("#generate");
var invalid = document.querySelector("#password");
var length ;
var minLength = 8;
var maxLength = 25;
var sayInvalid = "Invalid input.";
var uppers = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var lowers = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","^","&","*"];
function generatePassword(){
  var lengthAnswer = window.prompt("How long should your password be? Please choose a number between " + minLength +" and " +maxLength); 
  if (lengthAnswer === null) {
    window.alert("Please enter a value");
    return invalid.value = sayInvalid;
  }
   else if (isNaN(lengthAnswer)) {
    window.alert(lengthAnswer +" is not a valid number. Please try again.");
    return invalid.value = sayInvalid;
  } else if (lengthAnswer > 25){
    window.alert(lengthAnswer +" is not a valid selection. Please try again.");
    return invalid.value = sayInvalid;
  } else if (lengthAnswer < 8){
    window.alert(lengthAnswer +" is not a valid number");
    return invalid.value = sayInvalid;
  }
  var pass = [];
  var pwd = [];
  var counter = 0;
  let numUppers = Number(window.confirm("Would you like uppercase letters?"));  
  let numLowers = Number(window.confirm("Would you like lowercase letters?"));
  let numNumbers = Number(window.confirm("Would you like Numbers?"));
  let numSymbols = Number(window.confirm("would you like symbols?"));
  if (numUppers) {
    pwd = pwd.concat(uppers);
    pass.push(uppers[Math.floor(Math.random() * uppers.length)]);
    counter++
  } if (numLowers) {
    pwd = pwd.concat(lowers);
    pass.push(lowers[Math.floor(Math.random() * lowers.length)]);
    counter++
  } if (numNumbers) {
    pwd = pwd.concat(numbers);
    pass.push(numbers[Math.floor(Math.random() * numbers.length)]);
    counter++
  } if (numSymbols) {
    pwd = pwd.concat(symbols);
    pass.push(symbols[Math.floor(Math.random() * symbols.length)]);
    counter++
  } if (!(numUppers || numUppers || numSymbols || numNumbers)) {
    window.alert("Please select a valid password.");
  }
for (let i = 0; i < lengthAnswer - counter; i++) {
  var random = Math.floor(Math.random() * pwd.length);
  pass.push(pwd[random]);
} 
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
shuffle(pass);
return pass.join("");
}
function autoCopy(){
  var empty = document.querySelector("#password").value;
  if (empty == null || empty == " " || empty.length == 0 || empty === "Invalid input. Please try again.") {
    return;
  }
  else {
    var copyText = document.querySelector("#password")
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the password: " + copyText.value + " to the clipboard!");
  }
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);



