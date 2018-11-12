// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
const _ = require('lodown-dlum88');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

// 1: maleCount
// Objective: Find the number of male customers
// Input: Array
// Output: Number
// Constraints: use filter

var maleCount = function(array) {
    //use filter
    //loop through array of objects
return _.filter(array, function(element){
    //find gender and add males together
    //return the number of males
    return element.gender === "male";
    //filter returns an array add .length to find number of males
}).length;
};


// function reduce(array, func, seed){
  
//     each(array, function(element, index){
//         if (seed === undefined){
//             seed = array[0];
            
//     } else { 
//         seed = func(seed, element, index);
        
//     }
//     });
    
  
//     return seed;
// };
// 2: femaleCount
// Objective: Find the number of female customers
// Input: Array
// Output: Number
// Constraints: use reduce

var femaleCount = function(array){
  
 return _.reduce(array, function(seed, element, index){
      if (element.gender === 'female' ){
         seed++;
         
         
          
      } return seed;
  },0);
   
};
//use reduce

//loop through array of objects
//find gender prop, add females all together
//return reduces final seed

// 3: oldestCustomer
// Objective: Find the oldest customer's name
// Input: Array
// Output: String
// Constraints:
var oldestCustomer = function(array){
//use reduce
// do not give it a seed so the first element is assigned to seed
//if seed.age < element.age return element so it gets reassigned to seed
//return seed.name after final iteration
//     return _.reduce(array, function(seed, element){
//         if (seed.age < element.age){
//           seed = element;
//         }console.log(seed.name); 
// return seed.name;
//     });

let hold = 0;
let name;
_.each(array, function(element){
    if (element.age > hold){
        hold = element.age;
        name = element.name;
    }
}); return name;

};
//loop through given array
//hold 

// 4: youngestCustomer
// Objective: Find the youngest customer's name
// Input: Array
// Output: String
// Constraints:
var youngestCustomer = function(array){
let hold = 100;
let name;
_.each(array, function(element){
    if (element.age < hold){
        hold = element.age;
        name = element.name;
    }
}); return name;

};

// 5: averageBalance
// Objective: Find the average balance of all customers
// Input: Array
// Output: Number
// Constraints:
var averageBalance = function(array){
    
  let hold = _.reduce(array,function(seed, element){
       console.log(seed);
        return  seed + Number(element.balance.replace(/\W/g, ""));
    },0); 
    var divi = hold / 100; 
    let total = divi.toFixed(2) / array.length;
  
   return total;
    
};

// 6: firstLetterCount
// Objective: Find how many customer's names begin with a given letter
// Input: Array, Letter
// Output: Number
// Constraints:

// function contains(array, value){

// return indexOf(array, value) === -1 ? false : true;

// }
var firstLetterCount = function(array, letter){
    //loop through given array
    //find name and pull first letter to compare to given letter
    //make a count and add tally
    //return count
    //find out how many customer names begin with a given letter
    let count = 0;
    _.each(array, function(element, index, array){
        
    if (_.contains(element.name[0].toLowerCase(), letter.toLowerCase())){
        count++;
    }
        
    });
    return count;
};

// 7: friendFirstLetterCount
// Objective: Find how many friends of a given customer have names that start with a given letter
// Input: Array, Customer, Letter
// Output: Number
// Constraints:
var friendFirstLetterCount = function(array, customer, letter){
//use counter to keep tally
    let count = 0;
// loop through array and find customer
    _.each(array, function(element, index, collection){
        if (element.name === customer){
// loop through friends list
            _.each(element.friends, function(element, index, collection){
// if match customer.name[0] to letter then count++
                if(element.name[0].toLowerCase() === letter.toLowerCase()){
                    count++;
                }
            });
        }
// return count
    }); return count;
};


// 8: friendsCount
// Objective: Find the customers' names that have a given customer's name in their friends list
// Input: Array, Name
// Output: Array
// Constraints:
var friendsCount = function(array, name){
   let hold = [];
   _.each(array, function(customer, index, array){
        if (customer.hasOwnProperty("friends")){
           _.each(customer.friends, function(element, index, array){
                if (element.name === name){
                    //console.log(customer.name);
                    hold.push(customer.name);
                }
            });
        }
    });
   return hold;
};

// 9: topThreeTags
// Objective: Find the three most common tags among all customers' associated tags
// Input: Array
// Output: Array
// Constraints:
var topThreeTags = function(array){
   let hold = _.reduce(array, (function(seed, element) {
       if (element.hasOwnProperty('tags')) {
             return seed = seed.concat(element.tags);
       } //return seed;
   }), []); 
  // console.log(hold.sort());

   let one = _.unique(hold); 
   //console.log(one);
   let newObj = {}; 
   _.each(one, function(ele, ind, arr) {
       newObj[ele] = 0;
   });
   
   let valueObj = _.each(one, function(ele, ind, arr) {
       let count = 0;
       _.each(hold, function (eleH, inde, arra) {
           if (one[0] === eleH) {
               count++;
           }
            newObj[ele] = count;
            
       }); one = one.slice(1);
   })
   
//   _.each(valueObj, function(key, value, obj) {
//       if (value)
//   })
    // If Phuoc has an ojbect of key/value pairs, and she wants to sort them by 
    // value.. How does she do it...
    
   // console.log(newObj);
   let newObjArr = [];
   _.each(newObj, function (value, key, obj) {
       newObjArr.push([key, value]);
   }); 
    // console.log(newObjArr);    
    newObjArr.sort(function(a,b) {
        return a[1] - b[1];
    });
    // console.log(newObjArr);  
    // array of arrays, 
    // .pop at each index, then join by concat 
    let last = _.last(newObjArr, 3);
    
    
    _.each(last, function (ele, ind, arr) {
        if (ele) {
            ele.pop();
        }
    })
    
    return last.reduce(function(seed, element){
    return seed.concat(element); 
  
    });
    

   /// PHUOC IS THE SHIEEETTTTTT 
};

// 10: genderCount
// Objective: Create a summary of genders, the output should be:
// {
//     male: 3,
//     female: 4,
//     transgender: 1
// }
// Input: Array
// Output: Object
// Constraints: Use reduce
var genderCount = function(array){
 return _.reduce(array, function(seed, element){
     if (element.gender === "female"){
         seed.female++;
     } else if (element.gender === "male"){
         seed.male++;
     } else{
         seed.transgender++;
     } return seed;
 }, {female: 0, male: 0, transgender: 0});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
