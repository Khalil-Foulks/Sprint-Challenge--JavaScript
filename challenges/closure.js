// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//nestedFunction can access the variable internal because functions look within themselves for context and when they cannot find what they are looking for they then looks above to the parent function for context. 
// The variable internal was not found in nestedFunction so it looked outside at the parent function myFunction and found the variable internal. 


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(num){
  let sum = 0;
  for(let i=1; i <= num; i++){
    sum += i;
  }
  return sum;
}

console.log(sumation(4))