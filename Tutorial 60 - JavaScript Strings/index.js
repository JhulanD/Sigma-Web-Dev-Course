// Tutorial 60 - JavaScript Strings
    // What are javascript strings?
    // Strings are sequences of characters
    // Strings are immutable
        // Immutable means that once a string is created, it cannot be changed
    // Strings are indexed
        // Strings are indexed starting from 0
    // Strings are iterable
        // Strings are iterable means - you can loop through each character in a string
    // Examples - strings
        let strr = "Hello World";
        let name = "John Doe";
        let age = 30;
        let message = `Hello ${name}, you are ${age} years old`;
        console.log(message);

    // String methods
        let str = "Hello World";
        console.log(str.length); // Explanation - length returns the number of characters in a string
        console.log(str.toUpperCase()); // Explanation - toUpperCase returns the string in uppercase
        console.log(str.toLowerCase()); // Explanation - toLowerCase returns the string in lowercase
        console.log(str.charAt(0)); // Explanation - charAt returns the character at the specified index
        console.log(str.indexOf("World")); // Explanation - indexOf returns the index of the first occurrence of the specified value
        console.log(str.lastIndexOf("World")); // Explanation - lastIndexOf returns the index of the last occurrence of the specified value
        console.log(str.slice(0, 5)); // Explanation - slice returns a substring of the string
        console.log(str.substring(0, 5)); // Explanation - substring returns a substring of the string  
        console.log(str.split(" ")); // Explanation - split returns an array of substrings of the string
        console.log(str.replace("World", "Dolly")); // Explanation - replace returns a new string with the specified value replaced
        console.log(str.concat(" ", "Dolly")); // Explanation - concat returns a new string with the specified value concatenated
        console.log(str.trim()); // Explanation - trim returns a new string with the whitespace removed
        console.log(str.endsWith("World")); // Explanation - endsWith returns true if the string ends with the specified value
        console.log(str.startsWith("Hello")); // Explanation - startsWith returns true if the string starts with the specified value