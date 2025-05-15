// Count digits in a number.

function countDigits(n) {
   let digitCount = 0;
   let digit;
   while (n > 0) {
      digit = n % 10;
      digitCount++;
      n = Math.floor(n / 10);
   }
   return digitCount;
}
console.log('Number of digits:', countDigits(72));


// Find the sum of digits of a number.

function sumOfDigits(n) {
   let sum = 0;
   let digit;
   while (n > 0) {
      digit = n % 10;
      sum += digit;
      n = Math.floor(n / 10);
   }
   return sum;
}
console.log('Sum of digits:', sumOfDigits(72));
