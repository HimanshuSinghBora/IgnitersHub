//FOR LOOP
for (let i = 1; i <= 3; i++) {
    console.log("Count:", i);
}
//WHILE LOOP
let i = 0;
while (i < 3) {
    console.log("Number:", i);
    i++;
}
//DO-WHILE LOOP
let d = 0;
do {
    console.log("Iteration:", d);
    d++;
} while (d < 3);
//FOR-IN LOOP
const obj = { name: "Ashish", age: 25 };
for (let key in obj) {
    console.log(key, ":", obj[key]);
}
//FOR-OF LOOP
let a = [1, 2, 3, 4, 5];
for (let val of a) {
    console.log(val);
}