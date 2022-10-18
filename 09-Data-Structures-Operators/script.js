'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (
    starterIndex = 1,
    mainIndex = 0,
    time = '22:00',
    address
  ) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

//* Destructuring Arrays
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // Membongkar array ke variabel terpisah (destructuring)
console.log(x, y, z);
console.log(arr);

const [main, secondary] = restaurant.categories; // Membongkar array ke variabel terpisah (destructuring)
console.log(main, secondary);

// Menerima 2 nilai return dari sebuah method
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested; // Destructuring bersarang
console.log(i, j, k);

// Nilai default
const [p = 1, q = 1, r = 1] = [9, 10]; // Variabel = 1; berfungsi untuk mencegah nilai tidak terdefinisi (undifined)
console.log(p, q, r);
*/

//* Destructuring Objects
/*
const { name, openingHours, categories } = restaurant; // Nama properti harus sama dengan properti di dalam objek
console.log(name, openingHours, categories);

const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = restaurant; // Mengganti nama properti
console.log(resturantName, hours, tags);

// Nilai default
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutasi variabel
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // Harus ditutup dengan ()
console.log(a, b);

// Objek bersarang
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

//* Spread Operator
/*
const arr = [7, 8, 9];

// Spread konfensional
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Pemakaian spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); // Menampilkan elemen indiviual dari array

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Menggabungkjan 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Strings spread
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

// Function spread
const ingredients = [
  prompt(`Let's make pasta! Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3`),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // Cara konfensional
restaurant.orderPasta(...ingredients); // Cara menggunakan spread operator

// Objects spread
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Gueseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

//* Rest Pattern and Parameters
/*
// 1) Destructering rest
// Spread syntax
const arr = [1, 2, ...[3, 4]];

// Rest syntax
const [a, b, ...others] = [1, 2, 3, 4, 5]; // Rest berfungsi untuk menyimpan elemen array yang tersisa
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects rest
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Function rest
const add = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');
restaurant.orderPizza('Mushrooms');
*/
