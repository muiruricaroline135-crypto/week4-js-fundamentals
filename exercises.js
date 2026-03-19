// Exercise 1: Print numbers 1–10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Exercise 2: Even numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    }
}

// Exercise 3: Array example
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
