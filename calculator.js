// Calculator by Caroline

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

// --- TESTING THE FUNCTIONS ---
// These console.log commands will print the results to your terminal
console.log("Addition (10 + 5):", add(10, 5));
console.log("Subtraction (10 - 5):", subtract(10, 5));
console.log("Multiplication (10 * 5):", multiply(10, 5));
console.log("Division (10 / 2):", divide(10, 2));
console.log("Division by Zero:", divide(10, 0));
