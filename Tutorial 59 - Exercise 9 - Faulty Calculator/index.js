// Tutorial 59 - Exercise 9 - Faulty Calculator using JavaScript
// Author: Jhulan Dey
// Date: 19/06/2025

// This faulkty calculatordoes the following - 
// It takes two number as input from the user
//Itperforms the wrong opearations as follows:
    //  Does - inplace of +
    // * inplace of +
    // - inplace of /
    // /inplace of **
// It then returns the wrong result
// Remember to do it using Math.random function
//Also the calculatordoe sthe wrong operation in 10% of the cases

// Do not change the code below

// For Node.js, you'll need the prompt-sync package.
const prompt = require('prompt-sync')();

// Input Numbers
let a = Number(prompt("Enter your number 1 "));
let b = Number(prompt("Enter your number 2 "));
// Random Number

let random = Math.random();

// Condition
if (random <0.1){
    // 10% of the time, perform faulty operations
    console.log("Addition Calculation : " , a-b) ;
    console.log("Subtraction Calculation : " , a/b) ;
    console.log("Multiplication Calculation : " , a+b );
    console.log("Division Calculation : " ,a**b ) ;
}

else{ 
    // 90% of the time, perform correct operations
    console.log("Addition Calculation : " , a+b) ;
    console.log("Subtraction Calculation : " , a-b) ;
    console.log("Multiplication Calculation : " , a*b );
    console.log("Division Calculation : " ,a/b ) ;
}

// Do not change the code above




