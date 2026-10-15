
// Assignment : Conditional Statements

// A] if Statement

// Q1

let num = 25;

if (num % 5 == 0) {
    console.log("Divisible by 5");
}

// Q2

let age = 65;

if (age >= 60) {
    console.log("Senior Citizen");
}

// Q3

let num = 150;

if (num > 100) {
    console.log("Big Number");
}

// Q4

let temperature = 5;

if (temperature < 10) {
    console.log("Very Cold");
}

// Q5

let marks = 100;

if (marks === 100) {
    console.log("Perfect Score");
}

// Q6

let num = -10;

if (num < 0) {
    console.log("Negative Number");
}

// Q7

let text = "";

if (text === "") {
    console.log("No input provided");
}

// Q8

let year = 2000;

if (year % 100 === 0) {
    console.log("Century Year");
}

// Q9

    let num = 8;

    if (num > 0 && num % 2 === 0) {
        console.log("Positive Even Number");
    }

    // Q10

    let marks = 75;

    if (marks >= 35 && marks <= 100) {
        console.log("Valid Marks");
    }


// B] if...else Statement

// Question-1


 let num =20;

 if (num%2==0){
     console.log("Even")
 }else{
     console.log("Odd")
 }



 Question-2


 let age =18;

 if (age>=18){
     console.log("Eligible")
 }else{
     console.log("Not Eligible")
 }


 Question-3


 let num =77;

 if (num>0){
     console.log("Positive")
 }else{
     console.log("Negative")
 }


// Question-4


 let marks =77;

 if (marks>=35){
     console.log("Passed")
 }else{
     console.log("Failed")
 }


 Question-5


 let ch ="F";

 if (ch >="A" && ch<="Z"){
     console.log("UpperCase Letter")
 }else{
     console.log("Not a UpperCase Letter")
 }


// Question-6


 let num = 9;

 if (num%3==0){
     console.log("Divisible By 3")
 }else{
     console.log("Not Divisible By 3")
 }


// Question-7


 let password = prompt("Enter password:-");

 if (password=="admin123"){
     console.log("Login Successful")
 }else{
     console.log("Incorrect Password")
 }


// Question-8


 let num = 2024;

 if (num%4==0){
     console.log("Leap Year")
 }else{
     console.log("Not Leap Year")
 }


 Question-9


 let num1 = 24;
 let num2 = 26;

 if (num1>num2){
     console.log(num1)
 }else{
     console.log(num2)
 }


 Question-10


 let num = 24;

 if (num>0){
     console.log("Positive")
 }else{
 if (num<0){
     console.log("Negative")
 }else{
     console.log("zero")
 }

// B. if...else Statement

//1.
let newNum = 4;
if (newNum % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

//2.
let Age = 20; 
if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

//3.
let numNew = -5;
if (numNew >= 0) {
    console.log("Positive Number");
} else {
    console.log("Negative Number");
}

//4.
let mark = 40; 
if (mark >= 35) {
    console.log("Passed");
} else {
    console.log("Failed");
}

//5.
let char = 'A'; 
if (char >= 'A' && char <= 'Z') {
    console.log("Uppercase Letter");
} else {
    console.log("Not an Uppercase Letter");
}

//6.
let num3 = 9; 
if (num3 % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not Divisible by 3");
}

//7.
let password = "admin123"; 
if (password === "admin123") {
    console.log("Login Successful");
} else {
    console.log("Incorrect Password");
}

//8.
let Year = 2024;

if (Year % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

//9.
let num1 = 10, num2 = 25; 
if (num1 > num2) {
    console.log(num1 + " is greater");
} else {
    console.log(num2 + " is greater");
}

//10.
let Num = 0;
if (Num > 0) {
    console.log("Positive Number");
} else {
    if (num < 0) {
        console.log("Negative Number");
    } else {
        console.log("Zero");
    }
}
