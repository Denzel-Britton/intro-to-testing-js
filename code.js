
const helloWorld = function() {
    return "Hello, World!";
}
helloWorld();

function foo(){
    return 2;
}

function sayHello(input) {
    if (input === undefined) {
        return "Hello, World!"
    } else if (input === true) {
        return "Hello, World!"
    } else if (!input === true) {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!";
    }
}

// isFive function
function isFive (input) {
    if(input === true) {
        return '5';
    } else {
        return 5;
    }
}
function isEven(n){
    return n % 2 === 0;
}

function isVowel(input) {
    if (typeof input === "string") {
        return input.toLowerCase() === "a" || input.toLowerCase() === "e" || input.toLowerCase() === "i" || input.toLowerCase() === "o" || input.toLowerCase() === "u";
    } else {
        return false;
    }
}
