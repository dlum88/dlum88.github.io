/* FUNCTIONS - instead of having to rewrite the same code over and over we can write it once and then call on it as many times as we need it to be executed.*/

//The first step in creating a function is to define it, we start with the keyword function and then the name of the function followed by ()

function sayHello(){
    console.log("hello");
}

//if we want this function to be used we call or invoke it by typing out the function name followed by ()

sayHello(); // calls or invoked the function and prints the string hello

function addNum(num1, num2){ // functions can also have parameters, these are place holders that we can later pass values into
    return num1 + num2; // the return returns a value out of the function
}
console.log(addNum(2, 10)); // on this line we call the function and pass the arguments(values) that will be assigned to their respective parameters
// and be used in the function. 

//FUNCTION EXPRESSION - functions can be used as values and assigned to variables

var print = function (param){
    console.log(param);
};
print("WOOOOOOO");

//SCOPE- functions have their own scope, this means that nothing outside the function can access the code inside of it but it still has access
// to the global scope

var name = "David";

function doSomething(){
    var name = "Penny";
    console.log(name); 
}

doSomething(); // would access the variable name inside of do something and print "Penny" instead of "David"
console.log(name)// would print "David" since it is unable to access the variable inside the function;