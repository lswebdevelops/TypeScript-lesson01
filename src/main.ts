// index signature >>>

interface TransactionsObj {
  [index: string]: number
     Pizza: number, 
    Books: number, 
    Job: number,
}
 
// when we know the props' names
// interface TransactionsObj {
  //   Pizza: number, 
  //   Books: number, 
  //   Job: number,
  // }
  
const todaysTransactions: TransactionsObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,

}
console.log(todaysTransactions.Pizza); // -10

let prop: string = 'Pizza'

console.log(todaysTransactions['prop']); //undefined

const todaysNet  = (transactions: TransactionsObj):
number => {
  let total = 0
  for (const transaction in transactions) {
    total += transactions[transaction]
  }
  return total;
}

console.log(todaysNet(todaysTransactions));// 35
/////////////////////////////

interface Student {
  // [key: string] : string | number | number[]| undefined
  name: string,
  GPA: number,
  classes?: number[],

}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100,200],

}

// console.log(student.test);
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

/*
name: Doug
main.js:33 GPA: 3.5
main.js:33 classes: 100,200

*/

// or > using map 

Object.keys(student).map(key => {
  console.log(student[key as keyof typeof student]);
})
/*
Doug
VM383 main.js:43 3.5
VM383 main.js:43 (2) [100, 200]
*/
// 2:54 ,min

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'GPA')// Student GPA: 3.5
logStudentKey(student, 'classes')// Student GPA: 100, 200
logStudentKey(student, 'name')// Student GPA: Doug

/////////////////////////////

// interface Incomes {
  //   [key: string]: number
  
  // }

type Streams = 'salary'| 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
}

console.clear();

for (const Revenue in monthlyIncomes){ 
  console.log(monthlyIncomes[Revenue as keyof Incomes]);
}

/*

500
100
250

*/
