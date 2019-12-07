var passwordLength = confirm("Do you need a new password?");
var specialCharacters = confirm("Do you need special characters?");
var numericCharacters = confirm("Do you need numbers?");
var lowerCase = confirm("Do you need lowercase letters?");
var upperCase = confirm("Do you need capital letters?");
var amountChar = prompt("How many characters do you want your password to be?");
var amountCharInt = parseInt(amountChar);
var lchar = ["a","b","c","d","e","f","g","h",
               "i","j","k","l","m","n","o","p","q","r","s","t","u",
               "v","w","x","y","z"];
var hchar = ["A","B","C","D","E","F","G","H","J","K",
                "L","M","N","O","P","Q","R","S","T","U",
                "V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$"];
var password = "";
var isLchar = true;
var isHchar = true;
var isNumbers = true;
var isSpecial = true;

var finalArray = [];

if(isLchar){ 
    finalArray = finalArray.concat(lchar);
  }
  if(isHchar){
    finalArray = finalArray.concat(hchar);
  }
  if(isNumbers){
    finalArray = finalArray.concat(numbers);
  }
  if(isSpecial){
    finalArray = finalArray.concat(special);
  }
    if (amountChar < 7 || amountChar > 128){
        alert("Outside password parameters")
    } else {
        for(var i = 0; i < amountCharInt; i++){
            var index = Math.floor(Math.random() * finalArray.length); 
            var char = finalArray[index];
            password = password + char;
          }
    
    alert(password)
console.log(finalArray)
        }


