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
