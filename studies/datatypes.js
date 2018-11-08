/* DATA TYPES: Javascript datatypes can be broken down into two main catagories, simple or primitive and complex data types
 Variables in Javascript can hold the actual values of simple data types. While complex data types can grow indefinitely, so references will be stored 
 instead of the actual value itself. This means that it will store the location of where you can find the complex data type you're looking for. Another
 difference between the two is that when a variable assigned with a simple value is assigned to another variable, a new and separate copy of the value is made and 
 then assigned to the new variable. A variable with a complex data type assigned to a new variable would share the same reference, meaning that if the new
 value gets altered, the original variable would be altered as well.
*/

//COPY BY VALUE
var a = "apple"; //here we have a simple value type assigned to the variable a

var b = a; // on this line of code the string "apple" is assigned to the variable b

console.log(b); // would log "apple"

b = "banana" // on this line we have now reassigned the value of b to the string of "banana" leaving the variable a unaltered.

console.log(a); // would print "apple" to the console 

//COPY BY REFERENCE

var person1 = {
    name: "Patrick",
    animal: "StarFish"
};

var person2 = person1; //would still continue to be linked to the original object

person2.name = "SpongeBob"; //would alter both objects changing both name properties to "SpongeBob";

console.log(person1.name); //the original person object would print "SpongeBob";

/*
 SIMPLE/PRIMITIVE: is not an object and has no properties. Operations on simple values produce new simple values and do not alter the original value.
*/

//Some simple data values:

//Number- represents numeric data 
var sumNum = 10.2; //number value that can contain decimal points
var newNum = sumNum + 6; // arithmetic operators can be used on numbers to produce new value

console.log(newNum);// would print 16.2

//String - represents text
var myName = "David"; // hey look its my name!
console.log(myName); // would print the text David to the screen
var myLastName = "Lum";

//You can also access a specific character in a string using bracket notation and the index number
console.log(myName[0]) // the 0th index is always the first character

console.log(myName + " " + myLastName); // + operator can be used on strings allowing them to be concatinated. This would print "David Lum"


//Boolean are true or false values
var doesFnaticSuck = true;

//NAN - represents a value that is not a number
var doesItNaN = isNaN("Pizza");
console.log(doesItNaN);// returns true;

//Undefined - is a value of nothing and is automatically assigned to variables when they are declared and not initialized.
var nothingHere;
console.log(nothingHere);// would log undefined;

//Null - like undefined it also has a value of nothing but is intentially set by the programmer.
var someVar = null; // here I intentially set the value to null which has no value;

//-Infinity/Infinity - are special number values that represent the greatest negative and the greatest positive number value.
console.log(Infinity + 1); // would log Infinity
console.log(Infinity * Infinity); // would log Infinity
console.log(Infinity * -Infinity);// would log -Infinity

/*
 COMPELX DATA TYPES - one trait of complex data types is that they can grow in size much larger than a variable can hold. Which is why a reference or 
 memory address is stored pointing the interpreter to where the value is stored.
*/

/*Objects are complex data structures that can contain any number of simple and/or complex data values. Each object has a key also known as properties as well
as a correlating value You can think of an object as a thing you're trying to describe and the keys are the traits of what it is. Objects are created with curly
braces {} and to access the values inside you need to use dot or bracket notation of the key you're trying to access
*/



var myDog = { // here we have an object literal of myDog
    name: "Penny", // the first property or key of myDog is name and it has a string assigned to it
    breed: "Maltese", // the next key would be breed and it would have a different value with the type of breed she is and so on with each key/value pair
    age: 8,
    legs: 4,
    color: "white"
};


myDog.name = "Fido"; // using dot notation I can access the name property and reassign a different value to it
myDog["name"] = "Fido"; // I can do the same thing using bracket notation


/* Arrays are another type of complex data structures and like objects they too can contain any other number of simple and/or complex data values. The values 
that it contains are called elements and to access each element you use bracket notation with the index number of the position of that value in the array. To
create an array you use brackets []
*/

var arr = [1, 2, 3];
console.log(arr[0]); // using the variable name and the index number wrapped with brackets allows you to access the value 1
arr[2] = 15; // accessing the 2nd index position i have now reassigned the value 3 to 15
console.log(arr); // now prints [1, 2, 15];

//you can also add and remove onto arrays with built in methods

arr.push(4); // adds value to the end of the array
console.log(arr); // would print [1, 2 ,3, 4];

arr.unshift(0); // adds value to the beginning of the array
console.log(arr); // would print [0, 1, 2, 3 ,4];

var hold = arr.pop() //removes the last value and is stored to the variable hold;
console.log(hold); // prints 4;
console.log(arr);// prints [0, 1, 2, 3,];

var hold2 = arr.shift()// removes the first value and stores it to the variable hold2;
console.log(hold2);// prints 0;
console.log(arr);// prints [1, 2, 3,];