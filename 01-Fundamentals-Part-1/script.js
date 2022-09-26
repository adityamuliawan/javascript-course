// Data Type
/*
// Data type
let javascriptIsFun = true;
console.log(javascriptIsFun);

// Typeof berfungsi untuk menentukan jenis data type
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

// Let, Const, and Var
/*
let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;
*/

// Operator
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1

console.log(x);

// Comparison Operator
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

// Operator Presedence
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// Coding Challenge #1
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
*/

// String and Template Literal
/*
const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

// Template String
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

// Regular Multiple String
console.log("String with \n\
multiple \n\
lines");

// Template Literal Multiple String
console.log(`String with 
multiple
lines`);
*/

// Decision
/*
const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving license 🚙");
} else {
  const yeasLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yeasLeft} years`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

// Coding Challenge #2
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}
*/

// Type Conversion and Coercion
/*
// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");

console.log("2" + 2); // Tipe data number dianggap sebagai string
console.log("23" - "10" - 2);
console.log("23" / 2);

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

// Truthy and Falsy

// Falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

// Equality Operators
/*
const age = "18";
if (age === 18) console.log("You just became a adult (strict)");

if (age == 18) console.log("You just became a adult (loose)");

const favourite = Number(prompt("What's is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) {
  console.log("Why not 23?");
}
*/

// Boolean Logic and Logical Operatore
/*
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || hasGoodVision); // OR
console.log(!hasDriversLicense); // NOT
console.log(!hasGoodVision); // NOT

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

// Coding Challenge #3
/*
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log(`Dolphins win the trophy 🏆`);
// } else if (scoreKoalas > scoreDolphins) {
//   console.log(`Koalas win the trophy 🏆`);
// } else if (scoreDolphins === scoreKoalas) {
//   console.log(`Both win the trophy!`);
// }

const scoreDolphins = (100 + 100 + 100) / 3;
const scoreKoalas = (100 + 100 + 100) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log(`Dolphins win the trophy 🏆`);
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log(`Koalas win the trophy 🏆`);
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log(`Both win the trophy!`);
} else {
  console.log(`No one wins the trophy 😭`);
}
*/

// Switch Statement
/*
const day = "monday";
switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log(`Go to coding meetup`);
    break;
  case "tuesday":
    console.log(`Prepare theory videos`);
    break;
  case "wednesday":
  case "thursday":
    console.log(`Write code examples`);
    break;
  case "friday":
    console.log(`Record videos`);
    break;
  case "saturday":
  case "sunday":
    console.log(`Enjoy the weekend :D`);
    break;
  default:
    console.log(`Not a valid day!`);
}

// Switch in If Else
if (day === "monday") {
  console.log("Plan course structure");
  console.log(`Go to coding meetup`);
} else if (day === "tuesday") {
  console.log(`Prepare theory videos`);
} else if (day === "wednesday" || day === "thursday") {
  console.log(`Write code examples`);
} else if (day === "friday") {
  console.log(`Record videos`);
} else if (day === "saturday" || day === "sunday") {
  console.log(`Enjoy the weekend :D`);
} else {
  console.log(`Not a valid day!`);
}
*/

// Ternary Operator
/*
const age = 23;
age >= 18
  ? console.log(`I like to drink wine 🍷`)
  : console.log(`I like to drink water 💧`);

const drink = age >= 18 ? "wine 🍷 " : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/

// Coding Challenge #4
/*
const tip1 = 15 / 100;
const tip2 = 20 / 100;
const bill = 275;

const getTip = bill >= 50 && bill <= 300 ? bill * tip1 : bill * tip2;

console.log(
  `The bill was ${bill}, the tips was ${getTip}, and the total value ${
    bill + getTip
  }`
);
*/
