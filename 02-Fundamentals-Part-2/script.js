"use strict"; // Strict mode

//* Function
/*
//? Function adalah potongan kode yang dapat dipanggil berkali-kali
function logger() {
  console.log("My name is Adit"); //? Isi di dalam kurung kurawal function bernama "Function Body"
}

logger(); //? Baris ini berfungsi untuk memanggil function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; //? Keyword return berfungsi untuk menangkap value di dalam function agar dapat digunakan kembali, dan untuk menangkapnya perlu disimpan di dalam sebuah variabel
}

fruitProcessor(5, 3); //? Value dalam parameter setelah function dipanggil disebut dengan "Argument"

const appleJuice = fruitProcessor(3, 5); //? Menyimpan value return pada function fruitProcessor
console.log(appleJuice);

const orangeJuice = fruitProcessor(2, 2);
console.log(orangeJuice);
*/

//* Function Declaration vs. Expression
/*
//? Di bawah ini disebut "Function Declaration"
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(2000);
console.log(age1);

//? Di bawah ini disebut "Function Expression"
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(2001);
console.log(age2);
*/

//* Arrow Function
/*
const calcAge3 = (birthYear) => 2037 - birthYear; //? Arrow function tidak perlu kurung kurawal dan dapat me-return value secara langsung tanpa keyword return jika function hanya satu baris
const age3 = calcAge3(2000);
console.log(age3);

//? Jika arrow function lebih dari satu baris maka kurung kurawal dan keyword return diperlukan
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 60 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(2000, "Adit"));
console.log(yearsUntilRetirement(1999, "Siman"));
*/

//* Function Calling Other Function
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 4)); //? Tidak perlu menyimpan value return dalam variabel jika hanya menggunakan console.log
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
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2000, "Adit"));
console.log(yearsUntilRetirement(1950, "Sule"));
*/

//* Codling Challenge #1
/*
//TODO 1
const calcAverage = (x, y, z) => (x + y + z) / 3;

//TODO 2
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const scoreDolphins1 = calcAverage(85, 54, 41);
const scoreKoalas1 = calcAverage(23, 34, 27);

const scoreDolphins2 = calcAverage(23, 34, 30);
const scoreKoalas2 = calcAverage(85, 54, 44);

//TODO 3
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

//TODO 4
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins1, scoreKoalas1);
checkWinner(scoreDolphins2, scoreKoalas2);
*/

//* Array
/*
const friend1 = "Guntur";
const friend2 = "Juli";
const friend3 = "Andika";

//? Array merupkan salah satu "Data Structure". Array memiliki kemampuan untuk menampung data yang banyak
const friends = ["Guntur", "Juli", "Andika"];
console.log(friends);

//? Array dapat dipanggil menggunakan function Array(). Untuk memanggilnya diperlukan keyword new, apabila tidak maka kode tidak dapat dijalankan
const year = new Array(1998, 1999, 2000, 2001);

//? Untuk memanggil salah satu dari isi array, maka perlu memanggil namaArray[nomor urut value yang ingin dipanggil]
console.log(friends[0]); //? Array berbasis 0(dimulai dari index 0)
console.log(friends[2]);

//? Property length berfungsi untuk mehitung jumlah value dari sebuah array
console.log(friends.length); //? Property length berbasis 1(dimulai dari index 1)
console.log(friends[friends.length - 1]);

//? Value pada array masih dapat diubah meski array dideklarasikan menggunakan keyword const. Itu karena array merupakan tipe value non primitif
friends[2] = "Sule";
console.log(friends);
// friends = ["Rika", "Sisi", "Sasha"]; //! Tidak dapat mengubah isi array dengan cara seperti ini

const firstName = "Aditya";
const adit = [firstName, "Muliawan", 2037 - 2000, "Freelancer", friends];
console.log(adit);
console.log(adit.length);

//TODO Latihan
const calcAge = (birthYear) => 2037 - birthYear;
const years = [1998, 1999, 2000, 2001, 2002];

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
const friends = ["Siman", "Tude", "Andika"];

//? Untuk menambahkan elemen baru ke array dapat menggunakan method push dan unsift
friends.push("Yoga"); //? Method push akan menambahkan elemen baru dari belakang array
console.log(friends);

friends.unshift("Alan"); //? Method unshift akan menambahkan elemen baru dari depan array
console.log(friends);

//? Untuk mengeluarkan elemen dapat menggunakan method pop dan shift
friends.pop(); //? Method pop akan mengeluarkan elemen dari belakang array
console.log(friends);

friends.shift(); //? Method shift akan mengeluarkan elemen dari depan array
console.log(friends);

//? Untuk mengetahui posisi sebuah elemen berada dapat menggunakan method indexOf
console.log(friends.indexOf("Siman"));
console.log(friends.indexOf("Andika"));

//? Method includes berfungsi untuk me-return value true (jika elemen ada di dalam array) dan false jika sebaliknya
console.log(friends.includes("Siman"));
console.log(friends.includes("Dompol"));

if (friends.includes("Siman")) {
  console.log("You have friend called Siman");
} else {
  console.log("You don't have friend called Siman");
}
*/

//* Coding Challenge #2
/*
//TODO 1
function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return (15 / 100) * bill;
  } else {
    return (20 / 100) * bill;
  }
}
console.log(calcTip(100));

//TODO 2
const bills = [125, 555, 44];
console.log(bills);

//TODO 3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

//TODO 4
function calcTotals(bill, tip) {
  return bill + tip;
}

const totals = [
  calcTotals(bills[0], tips[0]),
  calcTotals(bills[1], tips[1]),
  calcTotals(bills[2], tips[2]),
];
console.log(totals);
*/

//* Object
/*
//? Array
const aditArray = [
  "Aditya",
  "Muliawan",
  2037 - 2000,
  "Freelancer",
  ["Guntur", "Andika", "Juli"],
];

//? Object
const adit = {
  firstName: "Aditya", //? "firstName:" disebut "Key/Property". "Aditya" disebut "Property Value"
  lastName: "Muliawan",
  age: 2037 - 2000,
  job: "Freelancer",
  friends: ["Guntur", "Andika", "Juli"],
};
*/

//* Dot vs. Bracket Notation
/*
const adit = {
  firstName: "Aditya",
  lastName: "Muliawan",
  age: 2037 - 2000,
  job: "Freelancer",
  friends: ["Guntur", "Andika", "Juli"],
};

//? Untuk memanggil property dapat menggunakan notasi "." dan "[]". Bedanya, notasi "[]" dapat menampung expression
console.log(adit.firstName); //? Baris ini berfungsi untuk memanggil property firstName dengan menggunakan notasi "."
console.log(adit["firstName"]); //? Baris ini berfungsi untuk memanggil property firstName dengan menggunakan notasi "[]"

const nameKey = "Name";
console.log(adit[`first${nameKey}`]); //? Dapat diketahui penggunaan notasi "[]" dalam pemanggilan property memungkinkan untuk menampung expression
console.log(adit[`last${nameKey}`]);

// console.log(adit.'last' + nameKey); //! Tidak dapat menampung expression jika menggunakan notasi "."

const interestedIn = prompt(
  "What do you want to know about Adit? Choose between firstName, lastName, age, job, and friends"
);
console.log(adit[interestedIn]);

//? Untuk mencegah munculnya value undefined dapat menggunakan if else statement
if (adit[interestedIn]) {
  console.log(adit[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

adit.location = "Indonesia"; //? Untuk menambahkan property baru menggunakan notasi "."
adit["twitter"] = "adityamuliawan_"; //? Untuk menambahkan property baru menggunakan notasi "[]"
console.log(adit);

//TODO Latihan
console.log(
  `${adit.firstName} has ${adit.friends.length} friends, and his best friend is called ${adit.friends[0]}`
);
*/

//* Object Methods
/*
const adit = {
  firstName: "Aditya",
  lastName: "Muliawan",
  birthYear: 2000,
  job: "Freelancer",
  friends: ["Guntur", "Andika", "Juli"],
  hasDriversLicense: true,

  //? Function yang berada di dalam object disebut dengan "Method", dan method hanya dapat menggunakan function expression
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  //? Untuk mengakses semua property pada object ke method dapat menggunakan variabel special "this"
  // calcAge: function () {
  //   console.log(this); //? Variabel/Keyword this akan memanggil semua object property dan methodnya
  //   return 2037 - this.birthYear; //? this.birthYear akan memanggil property birthYear pada object adit
  //   return 2037 - adit.birthYear; //! Dapat memanggil property dengan cara seperti ini tapi akan mengalami error jika mengganti nama objectnya dan juga melanggar prinsip clean code (DRY)
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear; //? Cara untuk membuat property baru melalui method
    return this.age;
  },

  //TODO Latihan
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

//? birthYear sudah didefinisikan pada object, jadi lebih baik untuk mengaksesnya melalui method untuk membuat kode lebih clean
// console.log(adit.calcAge(2000));
// console.log(adit["calcAge"](2000));

console.log(adit.calcAge());

//? Mengakses property baru yang telah dibuat melalui method
console.log(adit.age);
console.log(adit.age);
console.log(adit.age);

//TODO Latihan
console.log(adit.getSummary());
*/

//* Coding Challenge #3
/*
//TODO 1 & 2
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

//TODO 3
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
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
