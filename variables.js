// //////////////////PROBLEM 1////////////////////
// /* Create a variable called 'myName' with a value that is your name as a string. */

// //CODE HERE 

let myName = "DannyRamirez"

// //////////////////PROBLEM 2////////////////////
// /* Create a variable called 'faveNum' with a value that is your favorite number. */

// //CODE HERE

let faveNum = 11

// //////////////////PROBLEM 3////////////////////
// /* Create a variable called 'lovesCode' and assign it a boolean value. */

// //CODE HERE

let lovesCode = true

// //////////////////PROBLEM 4////////////////////
// /*
//   Write an if-statement that checks if the faveNum variable is 
//   equal to 13. If it is, console.log('lucky 13!'). 
//   If it's not, console.log('not lucky 13').
// */

// //CODE HERE


// Checking idf faveNum is equal to 13 and if so i am logging a success message and if not i will log an unsuccess message
if (faveNum === 13){
  console.log(`Lucky 13`)
} else {
  console.log(`Not Lucky 13`)
}

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE

// Writing out my faveNum 5 times using a for loop

for (let i = 0; i < 5; i++) {
  console.log(faveNum)
}