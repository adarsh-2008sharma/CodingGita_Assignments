// Part - F // logical Operators  

// 1. Logical and &&

// Q1

let username = "admin"
let password = 1234
console.log(username=="admin"&&password==1234)

// Q2

let isloggedIn = true
let hasPermission = true
console.log(loggedIn&&hasPermission)

// Q3 

let instock = true
let price = 800
console.log(instock&&price)

// Q4

let marks = 75
let attendence = 80 
console.log(marks>65&&attendence>70)

// Q5 

let isWeekend = true
let isHoliday = false
console.log(isWeekend&&isHoliday)

// Q6 

let a = 0;
let b = 10;
let result = a && b;
console.log(result); // 0 

// Q7

let x = 5;
let y = 10;
let result = (x > 3 && y) || 0;
console.log(result); // 10

// Q8

let p = "Hello";
let q = "";
let r = "World";
let result = p && q && r;
console.log(result); // ""

// Q9

let val = 5;
let condition = val && (val = 0);
console.log(condition);  // 0
console.log(val);  // 0 

// Q10 

let x = 10;
let y = 20;
let result = (x && y) && (x > y);
console.log(result); // false

// 2. Logical OR ||

// Q1

let passCorrect = true
let otpValid = false
console.log(passCorrect||otpValid)

// Q2

let isMember = false
let hasCoupon = true
console.log(isMember||hasCoupon)

// Q3

let age = 16
let height = 155
console.log(age>18||height>150)

// Q4

let emailGiven = true
let phoneGiven = false
console.log(emailGiven||phoneGiven)

// Q5 

let score = 900 
let timeBonus = true
console.log(score>1000||timeBonus)

// Q6 

let a = 0;
let b = false;
let c = "";
let d = null;
let e = 42;
let result = a || b || c || d || e;
console.log(result); // 42

// Q7 

let x = "Hello" || 0;
let y = 0 || "Hi";
console.log(x, y); // Hello HI

// Q8 

let a = 10;
let b = 20;
let result = (a < 5) || (b > 15);
console.log(result); // true

// Q9 

let val = 5;
let condition = val || (val = 0);
console.log(condition); // 5
console.log(val); // 5

// Q10 

let x = "" || 0 || false || null || undefined || "OK";
console.log(x); // Ok

//Logical NOT !)

//question No.---------6
// let a = 0;
// let b = false;
// let c = "";
// let d = null;
// let e = 42;
// let result = a || b || c || d || e;
// console.log(result); // 42

// //question No.---------1
//  let isBanned = false;
//  let login = !isBanned;
//  console.log("is user can login ?", login)

// //question No.---------2
//  let isCompleted = false;
//  let taskPending = !isCompleted;
//  console.log("if the task is pending?",taskPending)

// //question No.---------3
//  let isOn = true;
//  let lightOff = !isOn;
//  console.log("is light is off ?", lightOff)

// //question No.---------4
// let isActive = false;
// let canAccess = !isActive;
// console.log("if the user cannot access premium content ?",canAccess)


// //question No.---------5
// let isReadOnly = false;
// let itCanBeEdited = !isReadOnly;
// console.log("if it can be edited using ?",itCanBeEdited)

// //Additional Questions (Logical NOT !)

// //question No.---------6
// let a = 0;
//  let b = 1;
//  console.log(!a, !b); //true , false

//  //question No.---------7
// let x = "Hello";
// let y = "";
// console.log(!x, !y);//false, true

 //question No.---------8
// let val = 5;
// let result = !val;
// console.log(result);//false

 //question No.---------9
let a = 10;
let b = 20;
let result = !(a && b);
console.log(result); // false


 //question No.---------10
let x = 0;
let y = 1;
let result = !(x || y);
console.log(result); // false
