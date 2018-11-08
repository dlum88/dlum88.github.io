//EXERCISE - Minimum
function min(num1, num2){
  if (num1 > num2){
    return num2;
  } else{
    return num1;
  }
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//EXERCISE - Recursion

function isEven(number){
  if (number === 0){
    return true;
  } else if (number === 1){
    return false;
  } else if(number > 0) {
    return isEven(number -2);
  }
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//EXERCISE - Bean Counting

function countBs(string){
  let count = 0;
  for (let i = 0; i < string.length; i++){
    if (string[i] === "B"){
      count++;
    }
  } return count;
}

function countChar(string, character){
  let count = 0;
  for (let i = 0; i < string.length; i++){
    if (string[i] === character){
      count++;
    }
  } return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4