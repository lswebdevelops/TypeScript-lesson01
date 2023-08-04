"use strict";
// interface PostId = stringOrNumber; //>> that can't be done using interface
//literal types
let nyName;
let userName;
userName = "John";
userName = "Amy";
// userName = 'Luciano' > that is not allowed .
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello");
logMsg(add(2, 3));
logMsg("hi");
const multiply = (a, b) => {
    return a * b;
};
const consoleLog = (message) => {
    console.log(message);
};
console.clear();
consoleLog("Test");
consoleLog(multiply(3, 3));
console.log(add(3, 5));
let subtract = function (a, b) {
    return a - b;
};
consoleLog(subtract(3, 54)); // -51
// or
// interface mathFunction {
//     (a: number, b: number):number;
// }
let multiply2 = function (c, d) {
    return c * d;
};
logMsg(multiply2(3, 4)); // 12
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
console.log(addAll(2, 3)); // 5
console.log(addAll(2, 3, 3)); // 8
// default param value 
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
console.log(sumAll(2, 3)); // 7  /> because a + b + c is 7
console.log(sumAll(2, 3, 2)); // 7
// default param value 
const sumAll_2 = (a = 10, b, c = 2) => {
    return a + b + c;
};
console.clear();
;
console.log(sumAll_2(2, 3)); // 7  /> because a + b + c is 7
console.log(sumAll_2(2, 3, 2)); // 7
//   console.log(sumAll_2(3)); this can't be accepted. 
// instead
console.log(sumAll_2(undefined, 3)); //15  > a + b + c=> 10 + 3 + 2
// rest parameters 
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.clear();
logMsg(total(1, 2, 3, 4)); //10
const total_2 = (a, ...nums) => {
    return a /* now we add a here */ + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total_2(1, 2, 3, 4)); // 10
//never parameter 
const createError = (errMsg) => {
    throw new Error(errMsg);
};
console.clear();
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard 
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// user of the never type 
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === "number")
        return 'number';
    return createError('This should never happen!');
};
console.log(numberOrString(5)); // number
