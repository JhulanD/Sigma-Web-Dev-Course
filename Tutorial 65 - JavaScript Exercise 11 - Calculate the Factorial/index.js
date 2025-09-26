// Tutorial 65 - JavaScript Exercise 11 - Calculate the Factorial
// Write a program to calculate factorial of a number using reduce and using for-loops

// Using reduce

function customReduce(n, callback, initial) {
    //logic now
    let result = initial;
    for (let i = 1; i <= n; i ++) {
        result= callback(result, i)
    }
    return result;
}

console.log(customReduce(5, (result, initial) => result * initial, 1));