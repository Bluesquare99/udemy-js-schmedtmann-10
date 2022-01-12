'use strict';

/* LECTURE 1

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 code where you're setting default values through short-circuiting
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// Here we use undefined to skip over the requirement to
// pass a value into the numPassengers variable
createBooking('LH123', undefined, 1000);
 
*/

/* LECTURE 2 
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  // Here, we think we're altering the flight variable
  // but it's not having an effect on the primitive variabe
  flightNum: 'LH999';

  // When we pass a reference type to a function, what's passed
  // is a reference to the address in the memory heap.
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

console.log(jonas);
newPassport(jonas);
console.log(jonas);
// checkIn(flight, jonas);

*/

/* LECTURE 3 

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  // Functions have methods that can act on them too
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   alert('👋');
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

let timeOriginal = 7000;

const redLight = function (tripTime) {
  return (tripTime += 120);
};

const shortCut = function (tripTime) {
  return (tripTime -= 600);
};

const adjustTrip = function (time, fn) {
  timeOriginal = fn(time);
  console.log(`Time went from ${time} to ${timeOriginal}`);
};

adjustTrip(timeOriginal, redLight);
adjustTrip(timeOriginal, redLight);
adjustTrip(timeOriginal, shortCut);

*/

/* LECTURE 4 

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const welcome = greeting => person => console.log(`${greeting} ${person}`);

welcome('Sup')('Jasper');

*/

/* LECTURE 5 

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// We are taking the function value in the Lufthansa object
// and use that for other purposes.
const book = lufthansa.book;

// This will return undefined because it's no longer a method but a function.
// Therefore, it won't work with the .this keywords
// book(23, 'Sarah Williams');

// Call method will call the 'book' function with the 'this' keyword
// set to the eurowings object.
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// This binds the book function to the eurowings object
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With event listeners
// When we click on the button, an extra plane will be added to the fleet
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// We place 'null' here because there's not an object that we're
// binding addTax to
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));

const addVAT2 = function (tax) {
  return function (value) {
    return value + value * tax;
  };
};

console.log(addVAT2(0.23)(200));

*/

/* LECTURE 6 on IIFE 

// Standard function definition
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// Two ways to write IIFE's
// 1
(function () {
  console.log('This will never run again');
})();

// 2
(() => console.log('This will ALSO never run again'))();

*/

/* LECTURE 7 (Closures part 1)

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
 */

/* LECTURE 8 (Closures part 2) 

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

// As the b variable was reborn it remembered the context of its birthplace
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // The a variable is inside the backpack of the f() function.
console.dir(f);
// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};


boardPassengers(180, 3);

*/
