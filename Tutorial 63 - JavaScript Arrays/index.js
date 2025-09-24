// Tutorial 63 - JavaScript Arrays
    // JavaScript Arrays

// let myArray = [1, "B", "C", "D", 5, "F", "G", "H", "I", "J"];
// myArray[7] = "K";
// console.log(myArray[7]);


let array2 = [1,2 ,3, 4, 5, 6, 7, 8, 9, 10];
const red =(a,b) => {
    return a + b
}
console.log(array2.reduce(red));


// Array.from 

 let myArray = Array.from({length: 10}, (_, index) => index);
 console.log(myArray);
 //explanation of Array.from
    //  let myArray = Array.from({length: 10}, (_, index) => index);
    //  console.log(myArray);


// // explanation of Array index
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// -10, -9, -8, -7, -6, -5, -4, -3, -2, -1

// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     console.log(myArray[index]);
// }

// //create a game with Arrays
//     // Create an array with matching pairs (two of each number from 1 to 5)
//     const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

//       // Shuffle the array randomly using sort() and Math.random()
//       .sort(() => Math.random() - 0.5);

//     // Log the shuffled array to the console for debugging
//     console.log("Shuffled array:", numbers);

//     // Function to check if the values at two indexes match
//     function checkMatch() {
//       // Get the values entered by the user from the input fields
//       const i1 = document.getElementById("index1").value;
//       const i2 = document.getElementById("index2").value;

//       // Get the result paragraph element to show feedback
//       const result = document.getElementById("result");

//       // Log the selected indexes and their values for debugging
//       console.log("Index 1:", i1, "Value:", numbers[i1]);
//       console.log("Index 2:", i2, "Value:", numbers[i2]);

//       // Compare the values at the selected indexes
//       if (numbers[i1] === numbers[i2]) {
//         // If they match, show a success message
//         result.textContent = "✅ Match!";
//       } else {
//         // If they don't match, show a failure message
//         result.textContent = "❌ No match.";
//       }
//     }
