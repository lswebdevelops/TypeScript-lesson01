"use strict";
// index signature >>>
// when we know the props' names
// interface TransactionsObj {
//   Pizza: number, 
//   Books: number, 
//   Job: number,
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza); // -10
let prop = 'Pizza';
console.log(todaysTransactions['prop']); //undefined
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions)); // 35
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
/*
name: Doug
main.js:33 GPA: 3.5
main.js:33 classes: 100,200

*/
// or > using map 
Object.keys(student).map(key => {
    console.log(student[key]);
});
/*
Doug
VM383 main.js:43 3.5
VM383 main.js:43 (2) [100, 200]
*/
// 2:54 ,min
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA'); // Student GPA: 3.5
logStudentKey(student, 'classes'); // Student GPA: 100, 200
logStudentKey(student, 'name'); // Student GPA: Doug
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
console.clear();
for (const Revenue in monthlyIncomes) {
    console.log(monthlyIncomes[Revenue]);
}
/*

500
100
250

*/
