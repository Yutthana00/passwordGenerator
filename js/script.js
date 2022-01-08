
// DOM elements
var resultEl = document.getElementById("result");
var upperCaseEl = document.getElementById("upperCase");
var lowerCaseEl = document.getElementById("lowerCase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");
var lengthEl = document.getElementById("length");
var clipboardEl = document.getElementById("clipboard");

var randomFunc = {
    symbols : getRandomSymbol,
    number : getRandomNumber,
    upper: getRandomUpper,
    lower : getRandomLower,
};


// random generator fuctions (Number, UpperCase, LowerCase, Symbols)

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    var symbols = "!@£$%^&*(){}#/.,'";
    return symbols [Math.floor(Math.random() * symbols.length )];
}



// console.log(Math.floor(Math.random() * 26) + 97);
// console.log(getRandomSymbol());