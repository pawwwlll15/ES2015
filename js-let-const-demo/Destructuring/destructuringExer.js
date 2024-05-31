/*1. What does the following code return/print?
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ? answer: 8
console.log(yearNeptuneDiscovered); // ? answer: 1846 */

/* 2. Object Destructuring 2
What does the following code return/print?
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ? answer = {yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659}  */


/* 3. Object Destructuring 3
What does the following code return/print?
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ? 'Your name is Alejandro and you like purple'
getUserData({firstName: "Melissa"}) // ? 'Your name is Melissa and you like green'
getUserData({}) // ? 'Your name is 'undefined' and you like green' */ 

/*4. Array Destructuring 1
What does the following code return/print?
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?'Maya'
console.log(second); // ?'Marisa'
console.log(third); // ? 'Chi'*/

/* 5. Array Destructuring 2
What does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // ? 'Raindrops on roses'
console.log(whiskers); // ? 'whiskers on kittens'
console.log(aFewOfMyFavoriteThings); // ? ['bright copper kettles','warm wollen mittens,'Brown paper packages tied up with strings'] */


/* 6. Array Destructuring 3
What does the following code return/print?
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ? [10,30,20] */

/* ES5 Assigning Variables to Object Properties
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;
​
ES2015 Object Destructuring
/* Write an ES2015 Version */

const obj = {numbers: {a: 1, b: 2}};
let {a, b} = obj.numbers;

/*
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
```

## **ES2015 One-Line Array Swap with Destructuring**

/* Write an ES2015 Version */

const arr = [1,2];

[arr[0],arr[1]] = [arr[1],arr[0]];

function raceResults(arr){
    /* note the array brackets for destructuring the array and extracting the values */
    let [first,second,third,...rest] = arr;
    /* assigning values in arr to matching keys in new object */
    const newObj = {first,second,third,rest};
    return newObj;
}