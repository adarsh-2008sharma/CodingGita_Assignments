// C.] Comparison operators

// 1. loose equality
 
// Q1
 
console.log("25"==25) // true

// Q2

console.log(0==false) // True

// Q3

// console.log(10 == "10");
// console.log(null == undefined); 
// Ans=> The output is true
// The output is true

// Q4

// console.log("" == 0);
// console.log([] == false);

// Ans=> The output is true
// the output is true

// Q5

// Ans=>  NaN does not have a specific value and so NaN cannot be equal to another NaN

// 2. Loose inequality

// Q1

 console.log("18"!=18) // False

//  Q2

let passwordStored="1234"
let userEntered=1234
console.log(passwordStored!=userEntered) // False

// Q3

// console.log(5 != "5");
// console.log(0 != false);

// Ans=> The output is false
// The output is False

// Q4

// console.log(null != undefined);
// console.log("" != 0);

// Ans=> The output is false
// The output is false

// Q5

// Ans => The output is True. Because NaN is not equal to NaN they can be different values


// 3. Strict Equality

// Q1

console.log("25"===25)  // False

// Q2

console.log(0===false)  // False
console.log(null===undefined)  // False

// Q3

// console.log(10 === "10");
// console.log(true === 1);
// Ans=> The output is false
// The output is false 

// Q4

// console.log("" === 0);
// console.log([] === false);
// Ans=> The output is false
// The output is false

// Q5

// Ans=> "===" it checks the data types and values and on the otherhand "==" it only checks the values


// 4. Strict inequality

// Q1

console.log("18" !== 18)  // true

// Q2

console.log(0!==false)  // true
console.log(null!==undefined)  // true

// Q3

// console.log(5 !== "5");
// console.log(true !== 1);
// Ans=> The output is true
// the output is true

// Q4

// console.log("" !== 0);
// console.log(NaN !== NaN);
// Ans=> The output is true
// The output is true

// Q5

let input = ""
console.log(input!=="0") // true 
