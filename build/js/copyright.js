"use strict";
// original JS code
// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear();
// year.setAttribute("datatime", thisYear);
// year.textContent = thisYear;
// 1st variation
// let year: HTMLElement | null
// year = document.getElementById('year');
// let thisYear: string
// thisYear = new Date().getFullYear().toString();
// if(year) {
//     year.setAttribute("datatime", thisYear);
//     year.textContent = thisYear;
// }
//Copyright © 2023
// 2nd variation using assertion
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datatime", thisYear);
year.textContent = thisYear;
