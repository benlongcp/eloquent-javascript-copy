// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
 */


//function flatten takes an array of arrays
function flatten(arrays) {

  //returns the arrays iterated through and concatenated into a single return array
  return arrays.reduce((acc, curr) => acc.concat(curr), [])

  //


}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * 
 * Write a higher-order function loop that provides something like a for loop statement. 
 * 
 * It should take a value, a test function, an update function, and a body function. 
 * 
 * Each iteration, it should first run the test function on the current loop value and stop if that returns false. 
 * 
 * It should then call the body function, giving it the current value, and finally call the update function to create a new value and start over from the beginning.

When defining the function, you can use a regular loop to do the actual looping.

// Your code here.

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
 */


function loop(val, testFunc, updFunc, bodyFunc) {


    // console.log(`val:  ${val}, testFunc: ${testFunc}, updFunc: ${updFunc}, bodyFunc ${bodyFunc}`);
    // console.log(`*** val:  ${val}, testFunc: ${testFunc(val)}, updFunc: ${updFunc(val)}, bodyFunc ${bodyFunc(val)} ***`);


  //loop through the value, stop when the testFunc doesn't pass, update i with a new updFunc value called on it each iteration
  for (let i = val; testFunc(i); i = updFunc(i)){


    // console.log(`*** val:  ${val}, testFunc: ${testFunc(i)}, updFunc: ${updFunc(i)}, bodyFunc ${bodyFunc(i)} ***`);
    
    bodyFunc(i);

    }
  }
 

let result = loop(3, n => n > 0, n => n - 1, console.log);

// console.log("***!!!***   ", result);

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


/**
 * Arrays also have an every method analogous to the some method. 
 * 
 * This method returns true when the given function returns true for every element in the array. 
 * 
 * In a way, some is a version of the || operator that acts on arrays, and every is like the && operator. 
 * 
 * Implement every as a function that takes an array and a predicate function as parameters. 
 * 
 * Write two versions, one using a loop and one using the some method.
 */


//takes an array and function
let every = (array, func) =>{

  //loop through the array
  for (let i = 0; i < array.length; i++){
    //check if the function called with the array element is false
    if (!func(array[i])){
      return false;
    }
  }
  return true;

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * Write a function that computes the dominant writing direction in a string of text. 
 * 
 * Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom). 
 * 
 * The dominant direction is the direction of a majority of the characters that have a script associated with them. 
 * 
 * The characterScript and countBy functions defined earlier in the chapter are probably useful here.
 * 
 * 
 */




function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}



function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find(c => c.name == name);
    if (!known) {
      counts.push({name, count: 1});
    } else {
      known.count++;
    }
  }
  return counts;
}


// function textScripts(text) {
//   let scripts = countBy(text, char => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.name : "none";
//   }).filter(({name}) => name != "none");

//   let total = scripts.reduce((n, {count}) => n + count, 0);
//   if (total == 0) return "No scripts found";

//   return scripts.map(({name, count}) => {
//     return `${Math.round(count * 100 / total)}% ${name}`;
//   }).join(", ");
// }

////////////////////////////////


function dominantDirection(text) {
  
  
  let scripts = countBy(text, char =>{
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({direction}) => direction != "none");


  // console.log("scripts", scripts);

  return scripts.reduce((acc, curr) =>{
    
    // console.log("CURR     ", curr);
    // console.log(curr.count)

    //if the length of the acc string is longer the the current count, return the acc string, else return the current iterated value at the name property
    return acc.length > curr.count ? acc : curr.name;


  }, '')

}

console.log("***   ***   ***   ", dominantDirection("Hello!"), "   ***   ", dominantDirection("Hey, مساء الخير"));

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};