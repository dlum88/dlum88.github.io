/* CONTROL FLOW - by making true or false decisions in our code we can control the execution of our code. */



// to construct an if statement you start with if and then follow it by a condition that if true will execute the block of code inside the {}
function bigNum(number){
    if (number > 100){ // if the value being checked is greater than 100, it will execute this block of code, if not it moves on to the next condition
        console.log('Thats a big number');
    } else if (number > 1000){// if the first if statement doesnt execute it will go to the else if line and check to see if this condition is true, 
    // if it doesnt it will move onto the next condition 
        console.log("That's an even bigger number!");
    } else { // the else statement has no condition and is executed if none of the other previous conditions pass. Think of it like as an if all else fails
    // execute this line of code
        console.log("That's a tiny number");
    }
}

bigNum(101); //would pass the first if statement and print Thats a big number
bigNum(9999);// would pass the second else if condition so it would print That's an even bigger number!
bigNum(-10); // wouldnt pass any of the conditions so the else statement would execute and print That's a tiny number

// SWITCH STATEMENT - if checking multiple things you use a switch case statement;

function goTeam(param){
    switch (param){ //to create a switch statement you use the keyword switch and then follow it by an input expression
        case "C9": // if the case matches the input expression then the code on the next line will execute
            console.log("C9 Win!");
            break; // must follow it with a break or else it will continue to run 
        case "Fnatic":
            console.log("Fnatic Win!");
            break;
        case "Invictus Gaming":
            console.log("IG Win!");
            break;
        case "G2":
            console.log("G2 Win!");
        default: // is what is executed if none of the cases match the input expression
            console.log("What team is that?");
            break;
    }
}

goTeam("C9"); //would print C9 Win!
goTeam("TSM"); // would log What team is that? since it matches none of the cases