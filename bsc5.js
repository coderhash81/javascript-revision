//****************************************string******************** */
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); old method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')//  new method

// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
 console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);  // slice take negative value but substring not

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); // array

// Note real string not changed

// 2.---------********maths***----------//


const score = 400
// console.log(score);

const balance = new Number(100)// Numberused property
// console.log(balance);

// console.log(balance.toString().length); convert string
// console.log(balance.toFixed(1)); // give .value according

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));// use comma

// +++++++++++++ Maths +++++++++++++++++++++++++++++

 console.log(Math);
console.log(Math.abs(-4)); // - to + value
console.log(Math.round(4.6));
 console.log(Math.ceil(4.2));// top
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));// array
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // 0 to 1
console.log((Math.random()*10) + 1);/// avoid 0 to 1 to 10
console.log(Math.floor(Math.random()*10) + 1);// avoid point

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)