"use strict";
// assertion :
// convert to more or less specific
let a = "hello";
let b = a; // less specific type
let c = a; // more specific
let d = "world"; // cannot be used in react <>  angle brackets
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
// we are telling the TS to return a string here
let myVal = addOrConcat(2, 3, "concat");
let nextVal = addOrConcat(2, 2, "concat"); // be carefull ts sees no problem - but a string is returned << this is wrong. 
// unkown type 
// 10 as string >> this is not allowed. be carefull
10;
// where assertions can be very usefull. 
// the DOM
const img = document.querySelector('img');
img.src; // ! at the end>  using that ts can now know what we are talking : const img: HTMLImageElement
const myImg = document.getElementById('#img');
myImg.src; // const myImg: HTMLImageElement > 
