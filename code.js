
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