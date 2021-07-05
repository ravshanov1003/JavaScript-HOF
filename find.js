// node find.js
let arr = [45, 67, 34, 89];

const target = arr.find((elem) => elem >= 75);
console.log(target);

const exists = arr.includes(89, 2);
console.log(exists)