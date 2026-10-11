// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);
// always try to do in smae data type for good result;
// tyscript not allow different datatype;

console.log(null > 0);// false
console.log(null == 0);// <>,== works differently false
console.log(null >= 0);// true treat as 0

console.log(undefined == 0);// f
console.log(undefined > 0);//f

console.log(undefined < 0);// f

// === 

console.log("2" === 2); // f chek datatype;



// .... some more javascript is dynamic language

//  Primitive call by value by copying changes in copy

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')// uniqueness
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ // in javascript we put function in variables
    console.log("Hello world");
} // return function datatype but we called object function

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3