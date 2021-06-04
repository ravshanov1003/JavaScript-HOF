// node hof.js
// high order function
function multiplyBy2(num) {
    return num * 2
}

function divideBy2(num) {
    return num / 2
}

function addBy2(num) {
    return num + 2
}

function dropBy2(num) {
    return num - 2
}

function copyArrayAndManipulate(arr, instructions) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(instructions(arr[i]))
    }
    return output;
}
let mult = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
let div = copyArrayAndManipulate([1, 2, 3], divideBy2);
let PlusSum = copyArrayAndManipulate([1, 2, 3], addBy2);
let dropSum = copyArrayAndManipulate([1, 2, 3], dropBy2);
console.log(mult)
console.log(div)
console.log(PlusSum)
console.log(dropSum)