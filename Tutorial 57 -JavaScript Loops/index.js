// Tutorial 57 -JavaScript Loops

// For Loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// For In Loop
//Explanation :
//This loop is used to iterate over the properties of an object.
//It is used to iterate over the keys of an object.
let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50,
};
for (let key in obj) {
    console.log(key, obj[key]);
}

// While Loop
//Explanation : 
//This loop is used to iterate over a block of code as long as a specified condition is true.
//It is used to iterate over a block of code as long as a specified condition is true.
let ix = 5;
while (ix < 10) {
    console.log(ix);
    ix++;
}

// Do While Loop
let iy = 6;
do {
    console.log(iy);
    iy++;
} while (iy < 10);

// For Each Loop
let arr = [1, 2, 3, 4, 5];
arr.forEach((item) => {
    console.log(item);
});

