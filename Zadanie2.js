let a = 13.890123;
let b = 2.891564;
let n = 3;

let odin = Math.round(a % 1* Math.pow(10,n));
let dva = Math.round(b % 1* Math.pow(10,n));

console.log(odin, dva);

console.log('исходные числа = ?', a === b);
console.log('оба числа = ?', odin === dva);
console.log('первое число > ?', odin > dva);
console.log('первое число < ?', odin < dva);
console.log('первое число не = второму ?', odin != dva);
console.log('первое число > либо = второму ?', odin >= dva);
console.log('первое число < либо = второму ?', odin <= dva);