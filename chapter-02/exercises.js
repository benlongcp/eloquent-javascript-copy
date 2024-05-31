
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/
//function triangles takes a single number parameter
function triangles(num) {
  let stackLevel = "#";
  //loop through the values of num starting at 1
  for (let i = 1; i <= num; i++){
    console.log(stackLevel);
    stackLevel += "#";
    
  }
  
}
console.log(triangles(5));


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  //loop through number range
  for (let i = start; i <= end; i++){
    //check if the index is divisible by 3 AND 5
    if (i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz");
      //check if index is divisible by 3 only
    } else if (i % 3 === 0){
      console.log("fizz");
      //check if index is divisible by 5 only
    } else if (i % 5 === 0){
      console.log("buzz");
    } else {
      //or else just print the index
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

console.log("string");

function drawChessboard(x) {


  //assign square "colors" to variables

  let wRow = [];
  let bRow = [];

  //iterate x times to create rows
  for (let i = 0; i < x; i++){
    //check if i is even
    if (i % 2 === 0){
      wRow.push(" ");
      bRow.push("#");
    } else {
      wRow.push("#");
      bRow.push(" ");
    }
  }
  
  // console.log("wRow:  " + wRow);
  // console.log("bRow:  " + bRow);
  
  //empty string
  let retStr = "";
  //iterate x times to stack rows
  for (let i = 0; i < x; i++){
    if (i % 2 === 0){
      retStr += wRow.join("") + "\n";
  } else {
      retStr += bRow.join("") + "\n"
  }
}
  console.log(retStr);
  // return retStr;
}

console.log(drawChessboard(4));
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}