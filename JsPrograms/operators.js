//arithematic
const sum = 5 + 3; // Addition
const diff = 10 - 2; // Subtraction
const p = 4 * 2; // Multiplication
const q = 8 / 2; // Division
console.log(sum, diff, p, q);

//assignmnt
let n = 10;
n += 5;
n *= 2;
console.log(n);
//comparision
console.log(10 > 5);
console.log(10 === "10");
//logical
const a = true,
    b = false;
console.log(a && b); // Logical AND
console.log(a || b); // Logical OR
//bitwise
const res1 = 5 & 1; // Bitwise AND
console.log(res1);
//ternary
const age = 18;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);
//comma
let n1, n2
const res2 = (n1 = 1, n2 = 2, n1 + n2);
console.log(res2);
//unary
let x = 5;
console.log(++x); // Pre-increment
console.log(x--); // Post-decrement (Output: 6, then x becomes 5)
//relational
const obj1 = { length: 10 };
console.log("length" in obj1);
console.log([] instanceof Array);
//bigInt
const big1 = 123456789012345678901234567890 n;
const big2 = 987654321098765432109876543210 n;
console.log(big1 + big2);
//string
const s = "Hello" + " " + "World";
console.log(s);
//chained
const obj2 = { name: "Aman", address: { city: "Delhi" } };
console.log(obj2.address ? .city);
console.log(obj2.contact ? .phone);