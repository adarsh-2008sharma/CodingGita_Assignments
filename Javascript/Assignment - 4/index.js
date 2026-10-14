// part -G typeof operators

// Part a:

// Q1

let name = "Rahul" 
console.log(typeof(name))

// Q2

let age = 25 
console.log(typeof(age))

// Q3

let isStudent = true
console.log(typeof(isStudent))

// Q4 

let city
console.log(typeof(city))

// Q5

console.log(typeof(null))

// part - b 

// Q6

console.log(typeof 42);  // number
console.log(typeof "Hello"); // string
console.log(typeof true);  // boolean
console.log(typeof undefined); // undefined

// Q7

console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []);  // object

// Q8

console.log(typeof NaN); // number
console.log(typeof Infinity); // number
console.log(typeof function(){}); // function

// Q9

let price = 99.99
let message = "Welcome"
let isActive = false

console.log(typeof(price))
console.log(typeof(message))
console.log(typeof(isActive))

// Q10

let value = null;
console.log(typeof value); // objecyt
console.log(typeof value === "object"); // true

// part - C

// Q11

console.log(typeof typeof 100); // string
console.log(typeof typeof "Hi"); // string
console.log(typeof typeof true);  // string

// Q12

let a = 10;
let b = "10";
console.log(typeof a ===typeof b); // false
console.log(typeof a == typeof b);  // false

// Q13

console.log(typeof null === "object"); // true
console.log(typeof [] === "object");  // true
console.log(typeof {} === "object");  // true

// Q14

let x;
console.log(typeof x); // undefined 
x = null;
console.log(typeof x); // object 
x = 0;
console.log(typeof x); // number

// Q15

console.log(typeof NaN === "number"); // true
console.log(typeof Infinity === "number"); // true
console.log(typeof (1 / 0)); // number

// part-H]. type coersion

// part a:

// Q1

let a = number("25")
console.log(a+10)

// Q2

let result2 = String(100) + " rupees";
console.log(result2); 

// Q3

let result3 = Boolean(0);
console.log(result3); 

// Q4

let result4 = Boolean("Hello");
console.log(result4); 

// Q5

let result5 = +"50" * 2;
console.log(result5);

// Part - b

// Q6

console.log("10" - 5); // 5
console.log("10" + 5); // 105
console.log("10" * 2); // 20 
console.log("10" / 2); // 5 

// Q7

console.log("5" - "2"); // 3
console.log("5" + "2"); //  52
console.log("5" * "2"); // 10 
console.log("5" / "2"); // 2.5

// Q8 

console.log(Number("123")); // 123
console.log(Number("123abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined));  // NaN

// Q9 

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean([]));  // true
console.log(Boolean({})); // true
console.log(Boolean(null)); // false

// Q10

console.log(String(100)); // 100
console.log(String(true)); // true
console.log(String(null)); // null 
console.log(String(undefined));// undefined
console.log(100 + ""); // 100

// part - c 

// Q11

console.log("5" + 3 + 2); // 532
console.log(5 + 3 + "2"); //  82
console.log("5" - 3 + 2); // 4
console.log(5 - "3" + "2"); // 22 

// Q12

console.log(true + true); // 2
console.log(true + false); // 1
console.log(true + "false"); // truefalse 
console.log(false + "true"); // falsetrue

// Q13

console.log(null + 5); // 5
console.log(undefined + 5); //  NaN
console.log(null + "5"); // null5
console.log(undefined + "5"); // undefined5

// Q14

console.log([] + []); 
console.log([] + {}); 
console.log({} + []); 
console.log({} + {}); 

// Q15

let a = "10";
let b = 5;
let c = a + b;
let d = a - b;
let e = +a + b;
console.log(c, typeof c); // 105 string 
console.log(d, typeof d); // 5 number
console.log(e, typeof e); // 15 number

// Q16 

console.log(!!"Hello"); // true
console.log(!!""); // false
console.log(!!0); // false
console.log(!!1); // true
console.log(!!null); //  false
console.log(!!undefined);  // false

// Q17

console.log(Number("")); // 0
console.log(Number(" ")); // 0
console.log(Number("0")); // 0
console.log(Number("  25  ")); // 25 
console.log(Number("25px")); // NaN

// Q18 

let val1 = "5";
let val2 = 2;
console.log(val1 + val2); //  52
console.log(+val1 + val2); // 7
console.log(val1 - val2); //  3
console.log(val1 * val2); //  10
console.log(val1 / val2); //  2.5

/ BONUS - QUESTION :--------------

 //question No.---------1
let count = 5;
console.log(typeof count++);
console.log(count);
console.log(typeof ++count);
console.log(count); // number , 6 , number , 7

 //question No.---------2
let x = "10";
let y = ++x;
console.log(x, y, typeof x, typeof y);// 11 , 11 , number , number. 

 //question No.---------3
 let a = "5";
let b = a++;
console.log(a, b, typeof a, typeof b); // 6, 5, number , number.

 //question No.---------4
 console.log(typeof (1 + "2"));
console.log(typeof (1 - "2"));
console.log(typeof (1 * "2"));
console.log(typeof (1 / "2")); // string , number , number , number

 //question No.---------5
 let val = null;
console.log(typeof val);
console.log(val + 1);
console.log(val - 1);
console.log(val * 1);
console.log(Boolean(val)); // object , 1 , -1 , 0 , false.
