/* LOOPS - allow you to execute the same block of code as many times as you want so you don't have to repeatedly write it over and over. 
*/

// a for loop is comprised of a starting point i = 0 separated by a ;
// a condition of when it should stop i < 5 separated by a ; the condition is important because without it you can be stuck in an infinite loop and crash
// the program. It also tells the program how many times it should execute the block of code in the {}
// and the increment or decrement

for (let i = 0; i < 5; i++){ 
    console.log("hello"); // would print "hello" 5 times
}

var arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]); // prints all the values of arr starting at index 0 and stops when it reaches the end of the array
}

for (let i = arr.length -1; i > -1; i--){ // the starting point of i is the end of the array and goes backwards
    console.log(arr[i]); // prints all the values of arr backwards and stops when it reaches the end
}

//WHILE LOOP

var count = 0; //the starting point
while (count < 5){ // the condition, if true continue to execute code until false
    console.log(count); //block of code to be executed, in this example it just logs the current count
    count++; //the increment
}

//FOR IN LOOP - allows you to loop over the keys of an object and stops when it runs out of keys

var person1 = {
    name: "David",
    age: 30,
    hungry: true
};


for (let key in person1){
    console.log(key); // would print all the propertys in the person1 object
}