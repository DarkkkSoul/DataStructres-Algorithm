// Stores ordered collections of items, Which we can perform different operations on.
// Two ways of declaring an array, arrays can contain different data types

const arr1 = []; // literal
const arr2 = new Array(); // constructor

// Initialising
const fruits = ['Mango', 'Orange', 'Apple'];
// Indexing =  [  0    ,    1    ,    2    ] always starts from 0!

// Accessing
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// replace & add new elements
fruits[0] = 'Strawberry';
fruits[3] = 'Mango';

console.log(fruits[0]);
console.log(fruits[3]);


