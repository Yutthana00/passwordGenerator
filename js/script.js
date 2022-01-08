
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
// generate event listen
generateEl.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasSymbol = symbolsEl.checked;
    const hasNumber = numbersEl.checked;
    const hasLower = lowercaseEl.checked;
    
    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper, 
        hasNumber, 
        hasSymbol
    );
});

// generate password function
function generatePassword(lower, upper, number, symbol, length) {
    //1. init PW var
    // 2. Filter out unchcecked types
    // 3. loop over length call generator function for each type
    // 4. add final PW to the PW car return.

    let generatedPassword = "";

    var typesCount = lower + upper + number + symbol;

    console.log ("typesCount", typesCount);

    var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item) [0]
    );

    console.log ("typesArr:", typesArr);

    if (typesCount === 0){
        return "";
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type =>{
            var funcName = Object.keys(type) [0];

            generatePassword += randomFunc[funcName] ();
        });
    }
}

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