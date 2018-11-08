//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let hold = [];
for (let key in object){
    hold.push(object[key]);
}return hold;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
return Object.keys(object).join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
  let hold = [];
  for (let key in object){
      if(typeof object[key] === "string"){
          hold.push(object[key]);
      }
  } return hold.join(" ");
  
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return "array";
    } return "object";
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1,string.length);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
let hold = string.split(" ");
for (let i = 0; i < hold.length; i++){
    hold[i] = hold[i][0].toUpperCase() + hold[i].slice(1, hold[i].length);
} 
return hold.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
for (let key in object){
    return "Welcome" + " " + object[key][0].toUpperCase() +object[key].slice(1, object[key].length) + "!";
}
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
return object.name[0].toUpperCase() +object.name.slice(1, object.name.length) + " " + "is a" + " " + object.species[0].toUpperCase() +object.species.slice(1, object.species.length);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if (object.noises === undefined || object.noises[0] === undefined){
    return "there are no noises";
} else{
    return object.noises.join(" ");
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    
if (string.indexOf(word) === -1){
    return false;
} else{
    return true;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise"
//access the friends property in the object
//check to see if name is a friend in the objects friends property
//if name if found return true, if not found return false
    if (object.friends !== undefined){
        for (let i = 0; i < object.friends.length; i++){
            if (name === object.friends[i]){
            return true;
            }
        } return false;
    } return false;
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//Should take a name and a list of people, and return a list of all the names that <name> is not friends with"
//match the name to the person object in the array
//once matched check to s
let hold = [];

for (let i = 0; i < array.length; i++){
    if(isFriend(name, array[i]) === false && name !== array[i].name){
        //console.log(array[i].name);
        hold.push(array[i].name);
    }
    // if (name === array[i].name){
    //     hold = array[i];
    }  //console.log(hold);
    return hold;
    

// console.log(hold);




// let hold = [];
// let friends = [];
// let notFriends = [];
//     for (let i = 0; i < array.length; i++){
//         hold.push(array[i].name);
//     }
    
//     for (let i = 0; i < array.length; i++){
//         if(name === array[i].name){
//             friends.push(array[i].friends);
//         }
//     }
    
//     for (let i = 0; i < hold.length; i++){
//         for (let j = 0; j < friends.length; j++){
//             if (name !== hold[i] && friends[j] === hold[i]){
//                 notFriends.push(hold[i]);
//             }
//         }
//     }
//     console.log(hold, friends, notFriends);
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//Should take an object, a key and a value. 
//Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it."
// check to see if property exist, if it doesnt create it, if it does update it
if (object.hasOwnProperty(key) === false){
    object[key] = value;
} else{
    object[key] = value;
} return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//Should take an object and an array of strings. 
//Should remove any properties on <object> that are listed in <array>"
//  var data = {a: "one", b: "two", "hokey": false};
//       removeProperties(data, ["a","hokey"]);
//       assert.deepEqual(data, {b: "two"});

for(let key in object){
    for(let i = 0; i < array.length; i++){
        if (key === array[i]){
            delete object[key];
        }
    }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//Should take an array and return an array with all the duplicates removed"
let hold = [];
for (let i = 0; i < array.length; i++){
    if (hold.indexOf(array[i]) < 0){
        hold.push(array[i]);
    }
} return hold;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}