const rapid = (myString) => {
    // Your code goes here
    let newString ="" 
    const wow = ["a", "e", "i", "o", "u",] 
    for (let i=0; i<myString.length; i++){
        const letter = myString[i].toLowerCase()
        if (wow.includes(letter)){
            continue;
        }else {
            newString += letter.toUpperCase();
        }
    }
    return newString;
};


// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));



let ages = [2, 5, 6, 20, 54, 32, 84, 22, 31, 53] 

// for loop equivalent
let ageSum = 0
for (let i = 0; i<ages.length; i++){
    ageSum += ages[i];
}

// reduce 
const ageSum2 = ages.reduce(function(accumulator, item){
    return accumulator + item ;
}, 0)

// reduce Arrow 
const ageSum3 = ages.reduce( (accumulator, item) =>  accumulator + item,  0)


console.log(ageSum)
console.log(ageSum2)
console.log(ageSum3)

/// Combined
console.log(ages);

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40);

console.log(combined);

const combined2 = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort( (a, b) => b - a);

console.log(combined2);

const combined3 = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort( (a, b) => b - a)
    .reduce( (a, b) => a + b, 0);

console.log(combined3);