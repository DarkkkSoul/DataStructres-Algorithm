let random = ['Seed', 'rain', 'water', 'snow'];

// we use both STACK and QUEUE -- DEQUEUE

// ********* QUEUE - FIFO **********
// 2 operations
// PUSH - pushing the element to the last
// SHIFT - extracting the first element
// UNSHIFT - pushing the element at first
random.shift();
console.log('\nSHIFT operation (queue):', random);
random.unshift('laptop');
console.log('\nUNSHIFT operation (queue):', random);

// push and pop are faster than others

// ********* STACK - FILO **********
// 2 operations
// PUSH - Pushing the element to the last
// POP - extracting the last element
random.pop();
console.log('\nPOP operation (stack):', random);
random.push('gun');
console.log('\nPUSH operation (stack):', random);

//  read internals section in  https://javascript.info/array


// ********* SPLICE **********
// Swiss army knife for arrays. It can do everything: insert, remove and replace elements.

// arr.splice(start, deleteCount, elem1, ..., elemN])

const movies = ['Snow White', 'Mufasa', 'Frozen', 'Flow', 'Lilo & Stitch'];

movies.splice(0, 3); // starting from 0th index, delete three elements
console.log('\n', movies);

movies.splice(0, 1, 'Snow White', 'Mufasa', 'Frozen');  // from 0th index delete one element, then add following elements.
console.log('\n', movies);

movies.splice(3, 0, 'Flow');  // at 3rd index add the element without deleting anything.
console.log('\n', movies);
// negative indexing is also allowed!


// ********* SLICE **********
// similar to SPLICE, but it will return a whole new array retaining the original array, doesnot include end.

// arr.slice([start], [end]);

const arr3 = ['s', 'l', 'i', 'c', 'e'];

console.log('\n', arr3.slice(2, 5));
