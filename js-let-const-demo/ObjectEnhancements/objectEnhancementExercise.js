/* Same keys and values
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }
  ​

 1. Same keys and values ES2015
   Write an ES2015 Version */

   function createInstructor(firstName,LastName){
    return{
        firstName,
        LastName
    }
   }



/* ## **Computed Property Names**

```jsx
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
```

/*2. Write an ES2015 Version */
/* NOTE! IF VALUE IS A NUMBER ACCESS KEY WITH instructor[] OTHERWISE, 
ACCESS with instructor.variableName */
let favoriteNumber = 42;
let instructor = {
    firstName: 'colt',
    [favoriteNumber]: 'that is my favorite'
}

/* Object Methods
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
​
Object Methods ES2015
/*3. Write an ES2015 Version */
let instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }


/* createAnimal function
Write a function which generates an animal object. The function should accepts 3 arguments:
species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered.
const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa" */

const animal = (species,verb,noise)=>{
    let animalObj = {species: species, [verb]: ()=>{console.log(noise)}, noise: noise};
    return animalObj;
}

