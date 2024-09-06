// 1. Here are the declarations of variables using let, var, and const:

let name = "Afzal";
var age = 18;
const favoriteColor = "black";


// 2.Here are the declarations of variables inside and outside a block using let and const:

let outerLet = 'outer let';
const outerConst = 'outer const';

{
  let innerLet = 'inner let';
  const innerConst = 'inner const';
  console.log(outerLet); // outputs: outer let
  console.log(outerConst); // outputs: outer const
}

console.log(innerLet); // Error: innerLet is not defined
console.log(innerConst); // Error: innerConst is not defined


// 3.Here are the declarations of variables following JavaScript naming conventions:

let username = "Afzal";
let emailAddress = "afzal@example.com";
let password = 55667;


// 4. Here is the declaration of a variable inside a block using let and trying to access it outside:

{
  let blockLet = 'block let';
  console.log(blockLet); // outputs: block let
}

console.log(blockLet); // Error: blockLet is not defined


// 5. Here is the declaration of a constant variable for the value of Pi (π) and attempting to reassign a new value to it:

const PI = 3.14159;
PI = 45; //  you cannot reassign a value to a constant variable.

console.log(PI);


// 6. Here are the declarations of a global variable and a local variable with the same name inside a block:

let count = 10; // global variable

{
  let count = 20; // local variable
  console.log(count); // outputs: 20
}

console.log(count); // outputs: 10


// 7. Here is the declaration of a variable with let for a number and then assigning it a string value:

let num = 10;
num = 'ten';
console.log(num); // outputs: "ten"


// 8. Here are some attempts to create variables with names that start with numbers or contain special characters:

let 1stVariable = 'first variable'; 
let $variable = 'dollar variable'; 
let variable@ = 'at variable'; 

// The names 1stVariable and variable@ are invalid because they do not follow JavaScript's naming conventions.
// Variable names cannot start with numbers, and they cannot contain special characters except for $ and _.


// 9. Here are the declarations of variables with let and const in different scopes:

let globalLet = 'global let';
const globalConst = 'global const';

{
  let blockLet = 'block let';
  const blockConst = 'block const';
  console.log(globalLet); // outputs: global let
  console.log(globalConst); // outputs: global const
}

console.log(blockLet);
console.log(blockConst); 

// The variables globalLet and globalConst are visible within the block, but the variables blockLet and blockConst are only visible within the block they were declared in.


// 10. Here is the declaration of a variable without assigning a value:

let empty;
console.log(empty);
// outputs: The variable epmty is declared but not initialized, so it has a value of undefined.


// 11. Here are the declarations of variables for a first name, last name, and age using camelCase naming convention:

let firstName = "Afzal";
let lastName = "Malik";
let age = 18;