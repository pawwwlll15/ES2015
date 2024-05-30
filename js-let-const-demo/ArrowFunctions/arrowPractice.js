/* 
Arrow Functions Exercise
In this exercise, you’ll refactor some ES5 code into ES2015.
ES5 Map Callback
function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}
​
1. ES2015 Arrow Functions Shorthand
Refactor the above code to use two arrow functions. Turn it into a one-liner.
 Write an ES2015 Version
​
2. Refactor the following function to use arrow functions:
Replace ALL functions with arrow functions:
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

*/

/* 1. */ 
const double = arr => {
    return arr.map((val) => {
        return val * 2;
    });
};


/* 2. */
const squareAndFindEvens = numbers => {
    let squares = numbers.map((num) => {
        return num **2;
    });
    let evens = squares.filter((square) => {
        return square % 2 === 0;
    });
    return evens;
}

