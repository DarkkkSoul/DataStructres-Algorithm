// Stores ordered collections of items, Which we can perform different operations on.
// Two ways of declaring an array, arrays can contain different data types.

const arr1 = []; // literal
const arr2 = new Array(); // constructor

// Initialising
const fruits = ['Mango', 'Orange', 'Apple'];
// Indexing =  [  0    ,    1    ,    2    ] always starts from 0!

// Accessing
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log('\n');


// replace & add new elements
fruits[0] = 'Strawberry';
fruits[3] = 'Mango';

console.log(fruits[0]);
console.log(fruits[3]);
console.log('\n');


console.log(fruits.length); // total elements
console.log(fruits);
console.log('\n');


console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-1));
console.log('\n');


// Looping in array
const Movies = ['Snow White', 'Mufasa', 'Frozen', 'Flow', 'Lilo & Stitch'];
// can use forLoop

// For - of loop
for (const movie of Movies) {
   console.log(movie);
}
console.log('\n');

// For each - loop
Movies.forEach(movie => {
   console.log(movie);

});
