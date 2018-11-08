// Exercise - Triangle
for (let i = 0; i < 7; i++){
  console.log("#".repeat(i+1));
}

let hold = "";
for (let i = 0; i < 7; i++){
  hold += "#";
  console.log(hold);
}



// Exercise - FizzBuzz
for (let i = 0; i <= 100; i++){
  if (i % 3 === 0){
    if (i % 5 === 0){
      console.log("FizzBuzz");
    } console.log("Fizz");
  } else if (i % 5 === 0){
    console.log("Buzz");
  } else{
    console.log(i);
  }
}

//EXERCISE - Chessboard

let size = 8;
let holds = "";
for (let i = 0; i < size; i++){
  if (i % 2 === 1){
    holds = holds + (" #".repeat(size) + "\n");
  } else {
    holds = holds + ("# ".repeat(size) + "\n");
  }
} console.log(holds);