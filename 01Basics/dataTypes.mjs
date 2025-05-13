// Variables
var n = 9;
let m = 10; // can change,  no redeclaration
const p = 12; // can't change

// DataTypes

// ****** Primtive DT ******
const num = 12345; // Number
const str = 'DarkSoul' // String
const bool = true || false; // Boolean
const noValue = null; // null
let notAssigned; // undefined (remember to use 'let')

// ****** Symbol ******
let sym = Symbol('id'); // Symbol, is a unique and hidden key used in objects, they avoid naming conflicts,
// the data wont show  up in the loop or indexing.
let sym2 = Symbol('id'); // here a !== b even though both the descriptions are same.
// this is how you assign value into the sym.
const obj = {
   name: 'Dyan',
   [sym]: 56,
}
// obj[sym] = 56;  another way of assigning values.
// accessing the symbol.
console.log(obj[sym]);

