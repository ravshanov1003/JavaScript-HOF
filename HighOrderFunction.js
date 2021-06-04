 // node hof.js

 let arr = [1, 2, 3, 4];

 let newArray = arr.map((input) => input ** 2)
     //  let newArray = arr.map(function(input){
     //      return input*2
     //  });

 function multiplyByTwo(input) {
     return input * 2;
 }
 // console.log(newArray)

 let ab = [{
         key: 1,
         value: 10
     },
     {
         key: 2,
         value: 20
     },
     {
         key: 3,
         value: 30
     }
 ];
 let res = {};
 let newAb = ab.map((obj) => {
     res[obj.key] = obj.value // res["1"]=10
     return res
 })
 console.log(res)
     // arr.obj
 function convert(obj) {
     let newObject = {}
     newObject[obj.key] = obj.value; // newObject["1"]=10
     return newObject;
 }
 let newArr = ab.map(convert);
 console.log(newArr);