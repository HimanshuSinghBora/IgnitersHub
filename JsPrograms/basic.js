var a = "Hello Geeks"
var b = 10;

console.log(a);
console.log(b);

// Using let
{
    let num = 20;

    // Calling the function inside block
    console.log(num)
}


// Using const
const x = 22; {
    const x = 90;
    console.log(x); {
        const x = 45;
        console.log(x);
    }
}
console.log(x);