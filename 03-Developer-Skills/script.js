// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//* Using Google, StackOverflow, and MDN
/*
// 1
const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = temps => {
  let max = tempratures[0];
  let min = tempratures[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      continue;
    }

    if (temps[i] > max) {
      max = temps[i];
    }

    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(tempratures);
console.log(amplitude);

// 2
const calcTempAmplitudeNew = (temps1, temps2) => {
  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = tempratures[0];
  let min = tempratures[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') {
      continue;
    }

    if (temps[i] > max) {
      max = temps[i];
    }

    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([-3, -2, -1], [1, 2, 3]);
console.log(amplitudeNew);
*/

//* Coding Challenge #1
/*
// 1) Understanding the problem
// - Array transformed to string, separated by...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecast(data1);
printForecast(data2);
*/
