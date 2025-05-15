
// ****** Normal Function *******'

function fnName(parameter) {
   // code
}
fnName(parameter)  // calling

function square(n) {
   return n * n;
}
console.log(square(7));


// ******* Function Expression ********

const fnVariable = function (para) {
   // code
}
console.log(fnVariable(para)); // calling
const cube = function (n) {
   return n * n * n;
}
console.log(cube(7));


// ******* IIFE - Immediately Invoked Function Expression *********

(function () {
   // statements…
})();

(function (x) {
   console.log(x * x * x * x);  // ***DON'T RETURN!!***
})(3);


// ********* Arrow Functions **********

() => {
   // code
};

(() => {
   console.log('foobar')
})();
// OR
const smtg = () => {
   console.log('something is logged');
}
smtg();