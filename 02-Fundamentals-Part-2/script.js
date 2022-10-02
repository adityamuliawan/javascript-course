"use strict"; // Strict mode

//* Function
/*
function logger() {
  console.log("My name is Jonas");
}

// Calling/running/invoking function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with  ${apples} apples and ${oranges} oranges.`;
  return juice;
}

fruitProcessor(4, 5);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(5, 0);
console.log(appleJuice);
*/

//* Function Declaration vs. Expression
/*
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

//* Arrow Function
/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
console.log(yearsUntilRetirement(2000, "Adit"));
*/

//* Function Calling Other Function
/*
// Function 1
function cutFruitPieces(fruit) {
  return fruit * 4;
}

// Function 2
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with  ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(3, 3));
*/

//* Reviewing Function
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

//* Codling Challenge #1
/*
// 1
const calcAverage = (x, y, z) => (x + y + z) / 3;

// 2
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const scoreDolphins1 = calcAverage(85, 54, 41);
const scoreKoalas1 = calcAverage(23, 34, 27);

// 3
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins!`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins1, scoreKoalas1);
checkWinner(576, 111);
*/

//* Array
/*
const friend1 = "Michael";
const friend2 = "Steven";
const frined3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

// Array Exercise
const calcAge = (birthYear) => 2037 - birthYear;
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

//* Array Methods
/*
const friends = ["Michael", "Steven", "Peter"];

// Add element
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove element
friends.pop(); // Remove last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Remove first element
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/

//* Coding Challenge #2
/*
// 1
const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return (15 / 100) * bill;
  } else {
    return (20 / 100) * bill;
  }
};
console.log(calcTip(100));

// 2
const bills = [125, 555, 44];
console.log(bills);

// 3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

// 4
const totalBill = (bill, tip) => {
  return bill + tip;
};

const totals = [
  totalBill(bills[0], tips[0]),
  totalBill(bills[1], tips[1]),
  totalBill(bills[2], tips[2]),
];
console.log(totals);
*/

//* Objects
/*
// Array
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "Teacher",
  ["Michael", "Peter", "Steven"],
];

// Objects
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};
*/

//* Dot vs. Bracket Notation
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
*/

//* Object Methods
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummery: function () {
    return `${this.firstName} is a ${jonas.age}-year old teacher, and he has ${
      this.hasDriversLicense ? "a" : "no"
    } driver's license`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);

// Challenge
console.log(jonas.getSummery());
*/

//* Coding Challenge #3
/*
// 1 & 2
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(mark.calcBMI(), john.calcBMI());
console.log(mark.bmi, john.bmi);

// 3
if (mark.bmi > john.bmi) {
  console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
  console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`);
}
*/

//* For Loop
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/

//* Looping Array, Breaking, and Continuing
/*
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  // Filling types array
  // types[i] = typeof jonasArray[i];

  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[0]);
}
console.log(ages);

// Continue and Break
// Continue
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue; // Hanya menampilkan data string
  console.log(jonasArray[i], typeof jonasArray[i]);
}

// Break
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break; // Selesai melakukan perulangan jika menemukan tipe data number
  console.log(jonasArray[i], typeof jonasArray[i]);
}
*/

//* Loops Backward and Loops in Loops
/*
// Loops backward
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

// Loops in loops
for (let excercise = 1; excercise < 4; excercise++) {
  console.log("----- Starting Exercise " + excercise + "-----");

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${excercise}: Lifting weight repetition ${rep}`);
  }
}
*/

//* While Loop
/*
// For Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// While Loop
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end...`);
  }
}
*/

//* Coding Challenge #4
/*
// 1
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2
const tips = [];
const totals = [];

// 3
const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return (15 / 100) * bill;
  } else {
    return (20 / 100) * bill;
  }
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}
console.log(tips, totals);

// 4
const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
*/
