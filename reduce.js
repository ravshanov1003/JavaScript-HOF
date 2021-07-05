// node reduce.js
let sum = 0;
let arr = [23, 45, 67, 88]
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
// const callBack = (acc, curr) => acc+curr;
function callBack(acc, curr) {
    return acc + curr;
}
let res = arr.reduce(callBack, 0);
console.log(res);


let person = [{
    firstName: "Ali",
    budget: 1000
}, {
    firstName: "Ali",
    budget: 1500
}, {
    firstName: "Ali",
    budget: 500
}, {
    firstName: "Ali",
    budget: 2000
}]

function reducer(acc, value) {
    return acc + value.budget
}
let sumBudget = person.reduce((acc, val) => acc + val.budget, 0)
console.log(sumBudget)