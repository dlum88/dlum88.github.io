/* OPERATORS - perform actions on our values such as comparing them to other values, assigning them to variables or using them in arithmetic operations.
Operators are catagorized by how many operands they require, unary requiring one operand, binary requiring two operands and ternary requiring three operands.
*/

//ASSIGNMENT OPERATORS - is the equal sign = and takes the value on the right and assigns it to the variable on the left side.

var num = 5; // here the = sign assigns the number 5 to the variable num;

num += 2; // the += means takes the current value of num, adds 2 to it and reassigns it to the same variable
console .log(num); // would now print 7
num -= 4;// like += but now subtracts instead
console.log(num);// the new value of num is now 3
num *= 10;// takes the currently assigned value of 3, multiplies it by 10 and reassigns it to the variable num
console.log(num); // the new value of num is now 30
num /= 3;// takes the currently assigned value of 30 and divides it by 3, then reassigns it to num
console.log(num); // prints 10

//ARITHMETIC OPERATORS - performs basic arithmetic on number values

var newNum = 10 + 10;
newNum = 12 - 1;
newNum = 48290 * 0;
newNum = 10/2;

newNum++;// the current value of newNum is 5 and the ++ increases the value by 1
console.log(newNum); // newNum now prints 6
newNum--;// same as ++ but decrements by one
console.log(newNum); // prints 5


//COMPARISON OPERATORS - compares two values and evaluates to either true or false;

10 > 2; //true
10 < 2; //false;
10 >= 10; // true
10 <= 10; //true
10 == 10; // true
10 === 10;// this is strict comparsion that takes into account of type and value. Always use === over ==
10 !== 10; //false the !== ask if the value on the left is not strictly equal to the value on the right


//LOGICAL OPERATORS

10 > 2 && 10 > 1;// both sides of the && need to evalulate to true for this to pass. this would return true;
10 > 20 && 10 > 1; // since only one side passed this would return false;

0 === 0 || 1 > 10;// with || only one side needs to pass for it to return true


//UNARY OPERATOR - requires only one operand

!true; // flips the trutiness of the value, so in this instance true would be false;

//typeof returns a string with the type of value it is
console.log(typeof 5); //would print "number"
console.log(typeof "hello"); // would print string
console.log(typeof true); // would print boolean

-15; // the - makes things negative

//TERNARY OPERATOR - is the only operator that takes 3 operands
// 
console.log(true ? "hello" : "bye"); // if the condition is true then the first part executes. Prints "hello"
console.log(false ? "hello" : "bye"); // if the condition is false the second part will execute. Prints "bye"