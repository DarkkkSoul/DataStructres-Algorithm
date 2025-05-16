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
