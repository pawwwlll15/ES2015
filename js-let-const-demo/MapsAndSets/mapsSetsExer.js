/* Quick Question #1
What does the following code return?
new Set([1,1,2,2,3,4])

It will return (1,2,3,4)

Quick Question #2
What does the following code return?
[...new Set("referee")].join("")

returns 'ref' because maps and sets do not contain duplicates




Quick Questions #3
What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);


*****EVEN THOUGH THESE ARRAYS LOOK IDENTICAL, THEY BOTH HAVE DIFFERENT REF POINTS
    WHICH MAKES IT UNIQUE FROM EACH OTHER
    
    EACH SET IS GIVING AN INDEX JUST LIKE AN ARRAY. ********
Map{
    0: {Array(3) => true}
    1: {Array(3) => false}
};


hasDuplicate
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false
*/

/* NOTICE Set HAS TO BE CAPITALIZED!!!!
    MAPS/SETS REMOVES ARRAY DOUBLES WHICH RESULTS IN A DIFFRENT LENGTH
    FROM THE ORIGINAL ARRAY!! */
const hasDuplicate = arr => new Set(arr).size !== arr.length;


/* VOWEL COUNT FUNCTION */

function vowelCount(str){
    function isVowel(char){
        return "aeiou".includes(char);
      }
    const vowelMap = new Map();
    for(let char of str){
        /* setting char to lowercase to avoid errors with uppercase letters */
        let lowerCaseChar = char.toLowerCase();
        /* if char is a vowel */
        if(isVowel(lowerCaseChar)){
            /* if char already exists in map add 1 to value */
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar) + 1);

            }
            /* if it does not exist in the map, create a set with vowel as key and 1 as value */ 
            else{
                vowelMap.set(lowerCaseChar, 1);
            }
        }

    }
    return vowelMap;
}