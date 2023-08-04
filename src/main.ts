// assertion :

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific type
let c = a as Three; // more specific

let d = <One>"world"; // cannot be used in react <>  angle brackets
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};
// we are telling the TS to return a string here
let myVal: string = addOrConcat(2, 3, "concat") as string;

let nextVal: number = addOrConcat(2, 2, "concat") as number; // be carefull ts sees no problem - but a string is returned << this is wrong. 

// unkown type 
// 10 as string >> this is not allowed. be carefull
(10 as unknown) as string

// where assertions can be very usefull. 
// the DOM
const img  = document.querySelector('img')!
img.src // ! at the end>  using that ts can now know what we are talking : const img: HTMLImageElement


const myImg = document.getElementById('#img') as HTMLImageElement;
myImg.src // const myImg: HTMLImageElement > 





