// Tutorial 58 - JavaScript Functions

    // A function is a block of code which only runs when it is called.
    // You can pass data, known as parameters, into a function.
    // A function can return data as a result.

//Example 1
function myFunction(p1, p2) {
    return p1 * p2;
}
let x = myFunction(4, 3);
console.log(x);
    //Explanation

    // The function myFunction has two parameters, p1 and p2.
    // It returns the product of p1 and p2.
    // The function is called with the arguments 4 and 3.
    // The function returns the product of 4 and 3, which is 12.
    // The result 12 is logged to the console.

//Example 2
function nice(name) {
    console.log("Hello " + name);
}
nice("John");
    //Explanation

    // The function nice has one parameter, name.
    // It logs a string to the console.
    // The function is called with the argument "John".
    // The string "Hello John" is logged to the console.


function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1, 2, 3));

// Arrow Functions
    // Arrow functions are a new way to write functions in JavaScript.
    // They are shorter and more concise than regular functions.
    // They are often used in combination with higher-order functions.
    // They are also often used in combination with the map(), filter(), and reduce() methods.

//Example 3
const sum = (a, b) => a + b;
console.log(sum(1, 2));
    //Explnation:

    // The arrow function sum has two parameters, a and b.
    // It returns the sum of a and b.
    // The function is called with the arguments 1 and 2.
    // The function returns the sum of 1 and 2, which is 3.
    // The result 3 is logged to the console.