/*
Print the following: -
 “Hello after 4 seconds”
 “Hello after 8 seconds” 
*/

function myFunc(arg) {
  console.log(`Hello after ${arg} seconds`);
}
//setTimeout() used to schedule code execution after 4sec & 8sec
setTimeout(myFunc, 4000, 4);
setTimeout(myFunc, 8000, 8);

