// Find the factorial of a number.

const factorial = function (n) {
   if (n === 1 || n === 0) return n;
   else {
      return n * factorial(n - 1);
   }
}

const result = factorial(3);
console.log(result);
