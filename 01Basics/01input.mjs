import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// Taking direct input

// const answer = await rl.question('What is your name');
// console.log(`Thank you for your valuable feedback: ${answer}`);


// Taking array input

let array = [];
let n = await rl.question('Enter the total elements of array: ');
console.log('Enter the elements: ');

for (let i = 0; i < n; i++) {
   const ele = await rl.question(''); // this gives string format
   array[i] = Number(ele);
}
console.log('the Array is: ', array);

rl.close();