"use strict";
let stringArr = ['one', 'hey', 'Dave']; // let stringArr: string[]
let guitars = ['Strat', 'Les Paul', 5150]; // let guitars: (string | number)[]
let mixedData = ['EVH', 1984, true]; // let mixedData: (string | number | boolean)[]
stringArr[0] = "Luciano";
stringArr.push("0");
guitars.unshift(9);
console.log(guitars); //[9, 'Strat', 'Les Paul', 5150]
console.log(stringArr); //['Luciano', 'hey', 'Dave', '0']
// stringArr = mixedData;
mixedData = stringArr;
// creating a any array type: 
let test = [];
// now a string array
let bands = [];
bands.push("Van Halen");
// tuples
// here you have to have the exactly order and length: 
let myTuple = ['Dave', 42, true];
let mixed = ['Dave', 42, true];
mixed = myTuple; // no problem here 
//myTuple = mixed // not assignable
myTuple[0] = "Luciano";
myTuple[2] = false;
// myTuple[1]  ="2" // cannot be done
console.log(myTuple); // ['Luciano', 42, false]
//objects
let myObj;
myObj = [];
console.log(typeof (myObj));
myObj = {};
const exampleObj = {
    prop1: 'Davi',
    prop2: true
};
exampleObj.prop2 = false;
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1934, 234, "Ou32"],
};
let JP = {
    name: 'Jimmy',
    active: true,
    albums: ["I", "II", 'IV'],
};
// https://www.youtube.com/watch?v=gieEQFIfgYc&t=17s 1:00:31
//evh = JP // as soon  they have the same properties .. 
// 
//one property in an object can also be optional > use ?:
//    active?: boolean,
// using it in a function 
console.clear();
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(JP));
