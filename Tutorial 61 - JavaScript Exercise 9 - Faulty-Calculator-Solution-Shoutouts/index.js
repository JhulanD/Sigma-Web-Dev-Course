// Tutorial 61 - JavaScript Exercise 9 - Faulty-Calculator-Solution

// This faulty calculator doesthe following:
// 1 - It takes two numbers from the user
// 2 - It performs the wrong operations as follows:
    // + -> -
    // * -> +
    // / -> **
    // - -> /
// 3 - It performs wrong opearations 10% of the time
// 4 - It returns the result to the user

let random = Math.random();
let a =prompt("Enter first number");
let b =prompt("Enter second number");
let c =prompt("Enter operation");

let obj = { // Why using an object? To make the code more readable and easier to understand and modify in the future if needed
    "+" : "-",
    "*" : "+",
    "/" : "**",
    "-" : "/"
}

if (random < 0.1) {
    // Performs wrong operation 10% of the time
    c = obj[c];
}
let result = eval(a + c + b); // eval() is a built-in function that evaluates a string as a JavaScript expression
alert(result);