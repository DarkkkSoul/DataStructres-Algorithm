// Write a function to check if a number is prime.

function isPrime(n) {
   for (let i = 1; i <= n; i++) {
      if (i === 1 || i === n) continue;

      if (n % i === 0) {
         console.log(n, 'is not a prime number');
         return;
      }
   }
   console.log(n, 'is a prime number');
}
isPrime(9);