// STRING MANIPULATION - Javascript has special methods built in that allow us to interact with strings.

// you can concatinate strings with the + symbol

var str1 = "hello";
var str2 = "WORLD";

console.log(str1 + " " + str2 + "!"); // would print hello WORLD!

// you can also find out how many letters are in a string with the .length method

console.log(str1.length); //would print 5

//to access a specific character you can use the index position with brackets

console.log(str2[1]); //prints O

// you can also capitalize or lowercase a string with the .toUpperCase() and .toLowerCase() methods

console.log(str1.toUpperCase()); //prints HELLO
console.log(str2.toLowerCase()); //prints world

// to find the first instance of a letter you can use indexOf

console.log(str1.indexOf("l")); //logs index of 2
