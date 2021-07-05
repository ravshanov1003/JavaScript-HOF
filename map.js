// node map.js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// AddBy7
let arrAddBy7 = arr.map((val) => val + 7)
    //console.log(arrAddBy7);

// DropBy3
let arrDropBy3 = arr.map((val) => val / 3)
    //console.log(arrDropBy3);

// Kv
let arrKv = arr.map((val) => val ** 2)
    //console.log(arrKv);

// users
var users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

function filter(fname) {
    let newObj = fname.firstName
        // console.log(newObj)
}
let fName = users.filter(filter)

// role = Full Stack Resident -> console(firstName)
let role = users.filter((resident) => resident.role === 'Full Stack Resident').map((name) => name.firstName)
console.log(role)