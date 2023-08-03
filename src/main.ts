// type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

// type Guitarist = {
//     name: string;
//     active: boolean;
//     albums: (string | number)[];
//   };

type Guitarist = {
  name: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;
// interface PostId = stringOrNumber; //>> that can't be done using interface

//literal types

let nyName: "Dave";

let userName: "Dave" | "John" | "Amy";
userName = "John";
userName = "Amy";
// userName = 'Luciano' > that is not allowed .




// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any) => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(2, 3));
logMsg("hi");

const multiply = (a: number, b: number): number => {
  return a * b;
};

const consoleLog = (message: any) /* :void > could be added*/ => {
  console.log(message);
};
console.clear();
consoleLog("Test");
consoleLog(multiply(3, 3));
console.log(add(3, 5));

let subtract = function (a: number, b: number): number {
  return a - b;
};

consoleLog(subtract(3, 54)); // -51

type mathFunction = (a: number, b: number) => number;
// or 
// interface mathFunction {
//     (a: number, b: number):number;

// }


let multiply2: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply2(3,4)); // 12



