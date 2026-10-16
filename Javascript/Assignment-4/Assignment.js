
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


// C] if...else if...else Statement

// 1.
 let month = 9;
 if (month==12 || month==1 || month==2) {
     console.log("Winter")
 } else if (month==3 || month==4 || month==5) {
     console.log("Summer")
 } else if (month==6 || month==7 ||month==8) {
     console.log("Monsoon")
 } else if (month==9 || month==10 || month==11) {
     console.log("Autumn")
 } else {
     console.log("Invalid")
 }

// 2.
 let income= 500000;
 if (income<300000) {
     console.log("no Tax")
 } else if (income>300000 && income<700000) {
     console.log("5% Tax")
 } else if (income>700000 && income<1000000) {
     console.log("10% Tax")
 } else {
     console.log("15% Tax")
 }

// 3.
 let studentMarks = 89;
 if (studentMarks>=90 && studentMarks<=100) {
     console.log("Outstanding")
 } else if (studentMarks>=70 && studentMarks<=89) {
     console.log("Good")
 } else if (studentMarks>=40 && studentMarks<=69) {
     console.log("Average")
 } else if (studentMarks<=40 && studentMarks>=0) {
     console.log("Needs Improvement")
 } else {
     console.log("Invalid")
 }

// 4.
 let speedOfVehicle = 79;
 if (speedOfVehicle>=80) {
     console.log("Fast")
 } else if (speedOfVehicle>=40 && speedOfVehicle<=79) {
     console.log("Average")
 }
// 5.
 let personHeight = 170;
 if (personHeight>=170) {
     console.log("Tall")
 } else if (personHeight>=150 && personHeight<=169) {
     console.log("Average")
 } else if (personHeight<=149) {
     console.log("Short")
 } else {
     console.log("invalid")
 }

// 6.
 let dayNumber = 2;
 if (dayNumber==1 || dayNumber==2 || dayNumber==3 || dayNumber==4 || dayNumber==5) {
     console.log("Weekday")
 } else if (dayNumber==6 || dayNumber==7) {
     console.log("Weekend")
 }

// 7.
 let electricityBillOnUnits = 46;
 if (electricityBillOnUnits>=0 && electricityBillOnUnits<=50) {
     console.log("2Rs per Unit")
 } else if (electricityBillOnUnits>=51 && electricityBillOnUnits<=150) {
     console.log("4Rs per Unit")
 } else {
     console.log("6Rs per Unit")
 }

// 8.
 let studentsPercentage = 92;
 if (studentsPercentage>=90 && studentsPercentage<=100) {
     console.log("Excellent")
 } else if (studentsPercentage>=75 && studentsPercentage<=89) {
     console.log("Good")
 } else if (studentsPercentage>=50 && studentsPercentage<=74) {
     console.log("Satisfactory")
 } else if (studentsPercentage<=50 && studentsPercentage>=0) {
     console.log("Poor")
// }

// 9.
 let subject1 = 75;
 let subject2 = 56;
 let subject3 = 92;
 if (subject1>subject2 && subject1>subject3) {
     console.log("largest subject is: ", subject1)
 } else if (subject2>subject1 && subject2>subject3) {
     console.log("largest subject is: ", subject2)
 } else if (subject3>subject1 && subject3>subject2) {
     console.log("largest subject is: ", subject3)
 }

// 10.
 let num = 12;
 if (num==0) {
    console.log("Zero")
 } else if (num>0 && num%2==0) {
     console.log("Positive & Even")
 } else if (num>0 && num%2!=0) {
     console.log("Positive & Odd")
 } else if (num<0 && num%2==0) {
     console.log("Negative & Even")
 } else if (num<0 && num%2!=0) {
     console.log("Negative & odd")
 } else {
     console.log("invalid")
 }
 console.log("================================================================================")

// D] Nested if Statement

 1.
 let num = -12;
 if (num>10) {
     console.log("number is positive")
     if (num%3==0) {
         console.log("Divisible by 3")
     } else {
         console.log("Not Divisible by 3")
     }
 } else {
     console.log("invalid")
 }

// 2.
 let age = 19;
 let voterID = true
 if (age>=18) {
     console.log("yes person is 18+")
     if (voterID==true) {
         console.log("Can Vote")
     } else {
         console.log("cannot vote")
     }
 } else {
     console.log("not 18 or 18+")
 }
 
    // 3.
let scoredMarks = 80;
 if (scoredMarks>=40) {
     if (scoredMarks>=80) {
         console.log("Passed with Distinction")
     } 
 }

// 4.
 let atmPin = 12345;
 let balance = true;
 if (atmPin==12345) {
     if (balance==true) {
         console.log("balance is sufficient for withdrawal")
     }
 }

// 5.
 let num = 2000;
 if (num%4==0) {
     if (num%100==0) {
         if (num%400==0) {
             console.log("confirmed it's a leap year")
         }
     }
 }

// 6.                              ------------------------------------- DOUBT
 let userEmail = "user@123.com";
 if (userEmail=="user@123.com") {
     if (".com" = userEmail ) {
     }
 }

// 7.
 let onlineShopping = 1100;
 let user = "premium member"
 if (onlineShopping>=1000) {
     if (user=="premium member") {
         console.log(onlineShopping/20, "final amount:", onlineShopping)
         }
     }
     if (user!="premium member") {
             console.log(onlineShopping/10, "final amount:", onlineShopping)
         }

// 8.
 let num = 80;
 if (num>0) {
     if (num%2==0) {
         if (num%4==0) {
             console.log("Positive Even and Divisible by 4")
         }
     }
 }

// 9.
 let age = 24;
 let graduationDegree = "present";
 let userExperience = 4;
 if (age>=21 && age<=30) {
     if (graduationDegree=="present") {
         if (userExperience>=2) {
             console.log("Eligible for Interview")
         }
     }
 }

// 10.
 let student = "present";
 let studentInternalMarks = 35;
 let studentExternalMarks = 45;
 if (student=="present") {
     if (studentInternalMarks>=30) {
         if (studentExternalMarks>=35) {
             console.log("Eligible for Final Exam")
         }
     }
 }

 console.log("=======================================================================================================")
    } else {
        console.log("Zero");
    }
}


let month = 2
switch(month){
    case 1:case 3: case 5:case 7:case 8:case 10: case 12:
        console.log("31 Days")
        break
    case 4: case 6: case 9: case 12:
        console.log("30 Days")
        break
    case 2:
        console.log("28 Days")
        break
    default:
        console.log("Invalid Month")
}

// Q2

let ch = "o"
switch(chr){
    case "a":case "e": case "i": case "o" : case "u":
        console.log("Vowels")
        break
    default:
        console.log("Consonant")
}

// Q3

 let num = 1
 switch(true){
     case num == 1 || num == 2:
         console.log("Winter")
         break
     case num == 3||num==4:
         console.log("Summer")
         break
     default:
         console.log("Invalid Season")
 }

//  Q4


let marks = 75
switch(true){
    case marks>75&&marks<=100:
        console.log("Distinction")
        break
    case marks>=60:
        console.log("1st Class")
        break
    case marks>=50:
        console.log("2nd Class")
        break
    case marks>=35:
        console.log("3rd Class")
        break
    case marks<35:
        console.log("Failed")
        break
    default:
        console.log("Invalid Marks")
}

// Q5

let role = "admin"
let action = "Create"
switch(role){
    case "admin":
        switch(action){
            case "Create":
                console.log("Start Creating")
                break
            case "edit":
                console.log("start editing")
                break
            case "delete":
                console.log("Are you Confirm?")
                break
            default:
                console.log("invalid Action!!!")
            
        }
        break

    case "User":
        console.log("Limited Access")
    default:
        console.log("Invalid Role!!!!")

}


// Q6 


let fruit = "mango";

switch (fruit) {
  case "apple":
    console.log("Apple is red");
    break
  case "mango":
    console.log("Mango is yellow");
    break
  case "banana":
    console.log("Banana is yellow");
    break
  default:
    console.log("Unknown fruit");
}

// Q7

let value = 0
switch(value){
    case 0:
        console.log("Number Zero")
        break
    case "0": 
        console.log("String Zero")
        break
    case False:
        console.log("Boolean False")
        break
    case null:
        console.log("Null Value")
        break
    case undefined:
        console.log("Undefined Value")
        break
    default:
        console.log("Other Value")
}

// Q8

let num1=10
let num2=5
let operator="%"
switch(operator){
    case "+":
        console.log(num1+num2)
        break
    case "-":
        console.log(num1-num2)
        break
    case "*":
        console.log(num1*num2)
        break
    case "/":
        if(num2==0){
            console.log("division by 0 is invalid")
        }else{
            console.log(num1/num2)
        }
        break
    case "%":
        if (num2==0){
            console.log("Cannot calcualate remainder with zero divisor")
        }else{
            console.log(num1%num2)
        }
        break
    case "**":
        console.log(num1**num2)
        break
    default:
        console.log("Invalid Operator")
}

// Q9

let day = 17;

switch (true) {
  case day >= 1 && day <= 10:
    console.log("Beginning of the month");
    break;

  case day >= 11 && day <= 20:
    console.log("Middle of the month");
    break;

  case day >= 21 && day <= 31:
    console.log("End of the month");
    break;

  default:
    console.log("Invalid day");
}

// Q10










// Ternary Operator Questions

// Q1

let abc = 21
let result = abc %7 === 0 ? "divisible by 7" :"Not divisible by 7" 
console.log(result)

// Q2

let temp = 33
let status = temp>=30 ? "Hot Day" : "Pleasant Day"
console.log(status)

// Q3

let str = ""
let result = str.length===0 ? "Empty String" : "String has content"
console.log(result)

// Q4

let age = 16
let result = age<13 ? "child" : age<=19 ? "teenager" : "Adult"
console.log(result)

// Q5

let a = 25;
let b = 40;
let c = 15;

let greatest = a >= b ? (a >= c ? a : c) : (b >= c ? b : c);

console.log("Greatest:", greatest);

// Q6 

let marks = 82;

let result = marks >= 75 ? "Distinction": marks >= 60 ? "First Class" : marks >= 50 ? "Second Class" : marks? "Pass": "Fail";

console.log(result);

// Q7

let num = -7;

let result = num === 0? "Zero": num > 0? (num % 2 === 0 ? "Positive Even" : "Positive Odd"): (num % 2 === 0 ? "Negative Even" : "Negative Odd");

console.log(result);

// Q8

let year = 2024;

let result = year % 400 === 0 ? "Leap Year" : year % 100 === 0 ? "Not a Leap Year" : year % 4 === 0 ? "Leap Year" : "Not a Leap Year";

console.log(result);

// Q9

let role = "admin";
let action = "edit";

let result = role === "admin" ? (action === "delete" ? "Admin Delete" : action === "edit" ? "Admin Edit"
: "Admin Other") : role === "user" ? (action === "view" ? "User View" : "User Restricted") : "Invalid Role";

console.log(result);

// Q10

let cartTotal = 6000;

let result = cartTotal >= 5000 ? { discount: 20, payable: cartTotal * 0.80 } : cartTotal >= 2000 ? { discount: 10, payable: cartTotal * 0.90 } : cartTotal >= 1000 ? { discount: 5, payable: cartTotal * 0.95 } : { discount: 0, payable: cartTotal };

console.log(result);
