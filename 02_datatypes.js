// 1.  What are the two main categories of data types in JavaScript?

// In JavaScript, the two main categories of data types are:
// 1. Primitive Data Types
// 2. Non-Primitive Data Types

// 2. What is a primitive data type? List all the primitive data types in JavaScript.

// Primitive Data Types: These are the basic data types that are built into the language.
// 1. Number: represents numeric values, 1, 2, 3, -1, -2, -3 etc.
// 2. String: represents a sequence of characters,  "hello", 'hello', etc. Strings can be enclosed in single quotes or double quotes.
// 3. Boolean: represents a true or false value.
// 4. Null: represents null value.
// 5. Undefined: represents an uninitialized variable or a variable that has not been declared.
// 6. Symbol: represents a unique and immutable value that can be used as a property key in an object.
// 7. BigInt: represents a large integer value, 12345678901234567890n. BigInt is a new primitive data type introduced in ECMAScript 2020.


// 3. What is the difference between `null` and `undefined` in JavaScript?

// Null: This is a primitive data type that represents the intentional absence of any object value.
// Undefined: This is a primitive data type automatically assigned to variables that have been declared but not assigned a value.
// typeof undefined returns "undefined", while typeof null returns "object".

// 4. How do you check the type of a variable in JavaScript?**

// We can check the type of a variable using the typeof operator.
// let name = "Afzal";
// console.log(typeof name); // Output: string


// 5. What will the following code output?

console.log(typeof 42); // output: number
console.log(typeof 'Hello'); // output: string
console.log(typeof true); // output: boolean
console.log(typeof { name: 'John' }); // output: object
console.log(typeof [1, 2, 3]); // output: object


// 6. What data type is returned by the expression `3 + '3'`?

// let number = `3 + '3'`;
// console.log( typeof number); // output: string


// 7. What will be the result of the following code?

let num = 10;
let str = '10';
console.log(num == str); // output: true
console.log(num === str); // output: false


// 8. Explain the difference between `==` and `===` in JavaScript.

// == checks if the values of two operands are equal, but it does not check their data types.
// === checks if the values and data types of two operands are equal.


// 9. What data type is used to represent a sequence of characters in JavaScript?

// In JavaScript, a sequence of characters is represented using the String data type.


// 10. What will be the output of the following code?

let obj = { a: 1, b: 2 };
console.log(typeof obj); // outputs: object
console.log(typeof obj.a); // outputs: number


// 11.What are the datatypes of `a`, `b`, `c`, `d`, `e`, `f`, and `g`?Identify the datatype:

let a = 42; // outputs: number
let b = "JavaScript";  // outputs: string
let c = false; // outputs: boolean
let d = undefined; // outputs: undefined
let e = null; // outputs: onject
let f = { key: "value" }; // outputs: object
let g = [1, 2, 3]; // outputs: object



// 12.What is the datatype of the following values?

console.log(typeof "Hello World"); // outputs: string
console.log(typeof 12345); // outputs: number
console.log(typeof true); // outputs: boolean
console.log(typeof { foo: "bar" }); // outputs: object
console.log(typeof [1, 2, 3]); // outputs: object
console.log(typeof function() {}); // outputs: function
console.log(typeof undefined); // outputs: undefined


// 13.What will be the result of the following code?

let x = 10;
let y = "10";
console.log(typeof x); // outputs: number
console.log(typeof y); // outputs: string


// 14.Determine the datatype of the result of these expressions:

console.log(typeof (10 + 20)); // outputs: number
console.log(typeof (10 - "2")); // outputs: number
console.log(typeof ("5" * 3)); // outputs: number
console.log(typeof ("hello" / 2)); // outputs: number
  