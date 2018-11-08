/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* STORAGE- Javascript allocates 8 bytes of space for each variable. This allows the variable to store primitive data types such as
Strings, Numbers or Booleans. Complex data values such as Arrays and Objects can need more space so a reference is stored telling the computer
where the complex data type is stored in memory.
*/

var myString = "Hello"; // "Hello" is a string value and is stored to the variable myString;
var myNum = 3.14; // 3.14 is a number data value and is stored to the variable myNum;
var setNum = [1, 2, 3, 4, 5]; // here we have an array of numbers set to the variable setNum;

/* SCOPE- Variables are either globally scoped or function scoped, scope referring to where variables are available for use. Global scope
means that the variable is available to use throughout the entire program. Variables created inside a function are created in the local scope and
are only accessible within that function.
*/

var name = "David"; // created in the global scope, available to use throughout the entire program

function someFunc(){
    var name = "Phuoc"; //created inside the function and is only available inside someFunc;
}

console.log(name); //Would print "David" since it cannot access the name variable inside the function;


console.log(animal); // would print undefined

var animal = "dog";

console.log(animal);// would print dog

/*
* 
* LET: is a new special keyword in ES6 that allows you create a variable but limit its scope to the block of code it is used in.
* This is especially good so you do not have to worry about accidentally reassigning values with the same name since they only exist
* in the scope it is declared in
* 
*/

//declaring a variable;
let faveFood; //value of faveFood is undefined

//assigning value 
faveFood = "pizza";

//reassigning value
faveFood = "pho";

//SCOPE- variables created with the keyword let are only available in the block of code they are made in

function getNum(condition) {
// num doesn't exist here
if (condition) {
        let num = 3.14; //num only available here
        // some other code
        return num;
    } else {
        // num doesn't exist here as well
        return "no number";
    }
}




/*
*CONST: is another new way to make a variable in ES6. Const stands for constants and once made their values can never change.
* Due to this when const are declared they must be assigned a value. Const also behaves similiarly to let in that it is block scoped.
*
*/

//const age; // do not leave const variables undeclared! Must always give const values when being declared

const faveTeam = "C9WIN!" // 
//faveTeam = "TSMWIN!" //unable to give faveTeam a new value, would throw an error


var semiFinals = "Fnatic"

function whoWillWin(team){
    //msg not available here
    if (team === "C9"){
       
        const msg = "C9 Wins!"
        console.log(msg)
    } else{
        //msg not available here
        console.log("Fnatic Wins!")
    }
}


/*
*
* HOISTING: Before Javascript even runs it will scan through your code and move all var and functions declarations to the top of their containing scope.
* The var values would be left behind when it first scans through and later be assigned the values when the code is executed.
*
* Let and const are not hoisted and are pinned to the block of code they reside in.
*
* Functions are different in that not only is the declaration hoisted but the definition does as well.
*/

console.log(faveAnimal); //Would print undefined since faveAnimal is declared and initialized after the log.
var faveAnimal = "dog"; //faveAnimal would be hoisted to the top of the scope and the string "dog" would be left behind


sayHello(); // this would print HELLLLLLLLLLLOOOOOO because the entire function would be hoisted to the top allowing it to be used right away
function sayHello(){
    console.log("HELLLLLLLLLLLOOOOOO")
}

