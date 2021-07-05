// node reduce2.js
var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// create sentence
let sentence = epic.reduce((acc, curr) => acc + curr + ' ', '')
    //console.log(sentence)

// userSelect: 
var users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];
let newUsers = users.reduce((acc, curr) => {
    let key = `${curr.firstName}  ${curr.lastName}`;
    acc[key] = curr.role
    return acc;
}, {})
console.log(newUsers)