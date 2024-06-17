////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

//function range takese two parameters start and end
function range(start, end, step = 1) {
  //creates empty array to return later
  let retArr = [];
  if (step < 1){
    return retArr;
  }
  //checks if start is less than end
  if (start < end){
    //increment upwards from start until end
    for (let i = start; i <= end; i += step)
      //push current value to the return array
    retArr.push(i);
  } else if (end > start){
    //else if end is larger than start, loop backwards
    for (let i = start ; i >= end; i -= step){
      //push current value to return array
      retArr.push(i);
    }
  } else {
    return retArr;
  }

  return retArr;

}

// console.log(range(1, 3, 1));

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//creates a funciton that takes an array of numbers
function sum(arrNums) {
  //create counter variable
  let retNum = 0;

  //loop through the array
  for (let i of arrNums){
    retNum += i;
  }
  return retNum;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//function takes an array parameter
function reverseArray(array) {
  //create an empty array to return
  let retArr = [];
  //loop through the input array
  for (let i = 0; i < array.length; i++){
    //unhshift values to retArr
    retArr.unshift(array[i]);
    // console.log("retArr:  ", retArr)
  }
  //return populated retArr
  return retArr;

}

// console.log(`Reversed Array of [1, 2, 3, 4]:  ${reverseArray([1, 2, 3, 4])}`);


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//function takes an array parameter
function reverseArrayInPlace(array) {

  //loop through the array
  for (let i = 0; i < Math.floor(array.length/2); i++){
    // console.log(array[i]);

    let bucket = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = bucket;

  }
  return array;
}


// console.log("TEST ARRAY OUTPUT SHOULD LOOK LIKE THIS: [4, 3, 2, 1]:  ", reverseArrayInPlace([1, 2, 3, 4]))


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


//creates a function that takes an array as a parameter
function arrayToList(array) {
  //create a list obejct to return
  retList = {};
  //loop backwards through the array starting at the last index
  for (let i = array.length - 1; i >= 1; i--){
    // console.log(i);

    //check if this is first iteration
    if (i === array.length - 1){
      //if it is, set the value to the iterated array element, and the rest to null
      retList = {'value': array[i], 'rest': null}
    }
    //if not the first iteration, assign the return object list to a value of an object with value keys of the NEXT iteration, and a rest set to the existing retList (starting with the one containing the null value)
    retList = {'value': array[i - 1], 'rest': retList}

    // console.log(retList);


    }
    //send it to the customer
    return retList;
}

// console.log("***", arrayToList([1, 2, 3, 4]));

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//funciton takes a list object as a parameter
function listToArray(list) {
  
  //array to push to and return later
  let retArr = [];

  //we're going to loop through the input list, for as long as the iterator exists (i.e. not  assigned to null), and each iteration reassign it to the nested "rest" object (which will eventually be assigned to null)
  for (let i = list; i; i = i.rest){
    //push the value property of the current sub-object to the return array
    retArr.push(i.value);
  }

  return retArr;

}




// console.log("** ** **", listToArray(arrayToList([1, 2, 3, 4])));


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



//takes an element and a list and creates a new list that adds the element to the front of the input list

let prepend = (elem, list) => {

  // console.log(arrayToList(listToArray(list).unshift(elem)));
  
  //change the list to an array
  valArr = listToArray(list);

  //unshift the new element into the array
  valArr.unshift(elem);

  //change the array back into a list
  return arrayToList(valArr);




}



//takes a list and a number and returns the element at the given position in the list 
//(with zero referring to the first element) or undefined when there is no such element.



////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, numba) {

for (let i = list; i; i = i.rest){

  //check if numba is equal to i.value
  // console.log(numba, i.value)
  if (numba  === i.value - 1){
    return i.value;
  }
  
}
return undefined

}

// console.log(nth(arrayToList([1, 2, 3, 4, 5]), 2));

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////






//takes two values and returns true only if they are the same value or are objects with the same properties, 
//where the values of the properties are equal when compared with a recursive call to deepEqual.

let deepEqual = (val1, val2) => {

//check if not objects
  if (typeof val1 !== "obejct" && typeof val2 !== 'object'){
  //return boolean comparison of the two values
    return val1 === val2;

  }

  if (typeof val1 !== 'object' || typeof val2 !== 'object'){
    return false;
  }

  let val1Keys = Object.keys(val1);
  let val2Keys = Object.keys(val2);

  // console.log("KEYS:  ", val1Keys)

  if (val1Keys.length !== val2Keys.length){
    return false;
  }


  //iterate through arrays
  for (let i = 0; i < val1Keys.length; i++){


    console.log("val1[val1Keys[i]]:   ", val1[val1Keys[i]]);
    //determine if the current key is NOT in the other keys array
    if (!val2Keys.includes(val1Keys[i]) || !deepEqual(val1[val1Keys[i]], val2[val1Keys[i]])){
      return false
    }



  }


return true





}

  // //iterate through val1 and check against val2
  // for (let i = 0; i < val1Keys.length; i++){

  //   console.log("ITERATE:   ", val1Keys[i])

  //   //check if each key is not equal to the other value's corresponding key.
  //   if (val1Keys[i] !== val2Keys[i] || val1Keys[i] === val2Keys[i] && val1[val1Keys[i]] !== val2[val2Keys[i]]){
  //     return false;
  //   }

  //   console.log("***  ", val1[val1Keys[i]]);





  //   if (val1[val1Keys[i]] && val2[val2Keys[i]]){
      
  //     if (val1[val1Keys[i]] !== val2[val2Keys[i]]){
  //       return false;
  //     }
      

      
      
  //   }  
  //   return true;
  // }

   


/////TESTING

let obj = {here: {is: "an"}, object: 2, 3: ['A', 'B', 'C']};
let objz = {here: {is: "an"}, object: 2, 3: ['A', 'B', 'C']};

// console.log("FUNCTION CALL:   ", deepEqual(obj, objz));
  
console.log("DEQU FUNCTION CALL:     ", deepEqual({
  test: {
    test2: [1, 2, 3]
  }
}, {
  test: {
    test2: [1, 2, 3]
  }
}));






















////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};