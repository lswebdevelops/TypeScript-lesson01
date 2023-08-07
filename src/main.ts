// generics
// https://github.com/gitdagray/typescript-course/blob/main/lesson08/src/main.ts

// sometimes we don't know what kind of types we are using 

// const stringEcho = (arg: string): string => arg; >> this would just work with string 
// we can use <and any letter here, usually T>
 const echo = <T>(arg: T): T => arg;

 //checking if it is an object 
 const isObj = <T>(arg: T): boolean => {
  return (typeof arg === 'object' && !Array.isArray
  (arg) && arg !==null)
 }

 console.log(isObj(true)); // boolean> so false
 console.log(isObj("Davi")); // > string> false
 console.log(isObj([1,2,3])); // number array> false
 console.log(isObj({name: 'John'})); // true >> it is an object
 console.log(isObj(null)); // null, so false


const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
  
  if(Array.isArray(arg) && !arg.length) {
    return{ arg, is: false}
  }
  // if empty
  if(isObj(arg) && !Object.keys(arg as keyof T).length){
    return { arg, is: false}
  }
    //!!arg> returns a boolean : false or true
  return { arg, is: !!arg}
}

console.log(isTrue(true)); //{arg: true, is: true}
console.log(isTrue("Davi"));//{arg: 'Davi', is: true}
console.log(isTrue([1,2,3]));//{arg: Array(3), is: true}
console.log(isTrue({name: 'John'})); //{arg: {…}, is: true}
console.log(isTrue(null)); //{arg: null, is: false}
console.log(isTrue([]));//{arg: Array(0), is: false}
console.log(isTrue({}));//{arg: {...}, is: false}
console.log(isTrue(1));// true
console.log(isTrue(0));// false
console.log(isTrue(-0));// false

// rewriting the function using interface: 
interface BoolCheck<T> {
  value: T,
  is: boolean,
}
const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  
  if(Array.isArray(arg) && !arg.length) {
    return{ value:arg, is: false}
  }
  // if empty
  if(isObj(arg) && !Object.keys(arg as keyof T).length){
    return { value:arg, is: false}
  }
    //!!arg> returns a boolean : false or true
  return {value:arg, is: !!arg}
}


console.log(checkBoolValue(true)); //{arg: true, is: true}
console.log(checkBoolValue("Davi"));//{arg: 'Davi', is: true}
console.log(checkBoolValue([1,2,3]));//{arg: Array(3), is: true}
console.log(checkBoolValue({name: 'John'})); //{arg: {…}, is: true}
console.log(checkBoolValue(null)); //{arg: null, is: false}
console.log(checkBoolValue([]));//{arg: Array(0), is: false}
console.log(checkBoolValue({}));//{arg: {...}, is: false}
console.log(checkBoolValue(1));// true
console.log(checkBoolValue(0));// false
console.log(checkBoolValue(-0));// false
console.clear();

interface HasId {
  id: number,
}
console.clear();

const processUser = <T extends HasId>(user: T): T => {
  // process the user with logic here 
  return user
}

console.log(processUser({id:1, name: 'Dave'}));
console.log(processUser({id:2, name: 'Dave M'}));
// console.log(processUser({ name: 'Dave J'}));  brings an error



const getUsersProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
  return users.map(user => user[key])
}

const usersArray = [
  {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
          }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
      }
  },
  {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
          }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
      }
  },
]

console.clear();
console.log(getUsersProperty(usersArray, "email"));//['Sincere@april.biz', 'Shanna@melissa.tv']
console.log(getUsersProperty(usersArray, "username"));// (2) ['Bret', 'Antonette']

class StateObject<T> {
  private data: T

  constructor(value: T) {
    this.data = value;
  }
  get state(): T {
    return this.data
  }
  set state(value: T) {
    this.data = value;
  }
}
console.clear();
const store = new StateObject("John")
console.log(store.state); // John
store.state = "Dave" 
console.log(store.state); // Dave
//  store.state = 12// error>> string it should be

const myState = new StateObject<(string | number| boolean)[]>([15]) 
myState.state = (["Dave", 42 , true])


