import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });


// if condition (single condition)
if (condition) {
   // code
}

// if - else condition (two conditions)
if (condition) {
   // code
} else {
   // code
}

// else-if condition (multiple condition)
if (condition) {
   //code
} else if (condition) {
   //code
} else {
   //code
}

// switch (will execute based on condition)
// swtich cant be used for range checking (<,>), only used for exact matching, it works on true or false ONLY!!

console.log('Pick your age');
console.log('1.Below 18\n2.Btw 19 & 22\n3.Btw 23 & 40\n4.Btw 41 & 60\n5.Btw 60 & 100\n');
let choice = await rl.question("Enter your choice: ");
let age = Number(choice);
switch (age) {
   case 1:
      console.log('You are a teenager studying in college!');
      break;

   case 2:
      console.log('You are an adult, might be looking for a job!');
      break;

   case 3:
      console.log('You got a job,and got settled in your life');
      break;

   case 4:
      console.log('You are a senior citizen, you lived a good life.');
      break;

   default:
      console.log('You might be some kind of monstor');
      break;
}
rl.close();