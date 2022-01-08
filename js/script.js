
// DOM elements
var resultEl = document.getElementById("result");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");
var lengthEl = document.getElementById("length");
var clipboardEl = document.getElementById("clipboard");

var randomFunc = {
    symbol : getRandomSymbol,
    number : getRandomNumber,
    upper: getRandomUpper,
    lower : getRandomLower,
};

generateEl.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasSymbol = symbolsEl.checked;
    const hasNumber = numbersEl.checked;
    const hasLower = lowercaseEl.checked;
    
    
    
    console.log(hasLower, hasUpper, hasNumber, hasSymbol);
});

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