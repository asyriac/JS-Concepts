/*
 * Implement a function sum() in the following way such that it gives the sum of two numbers
 */

/*
 *    Concept : Currying
 *  - Functional programming concept that allows to transform a function with multiple parameters into a sequence of function with single arguments.
 *  - Instaed of taking all arguments at once, takes the first argument and returns a function that takes the second argument and so on till all the
 *    arguements are used.
 *
 */
function sum(x) {
  return function (y) {
    return x + y;
  };
}

console.log(sum(1)(2)); // should output 3
console.log(sum(10)(2)); // should output 12
