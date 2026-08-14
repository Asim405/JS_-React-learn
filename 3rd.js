// ===== NaN PROBLEM =====
// This is one of the most confusing bugs in JavaScript!

// THE PROBLEM:
let x = NaN;
let y = NaN;

let z = (x == y);
console.log(z); // Output: false ❌

// But wait... both x and y are NaN, so shouldn't they be equal?
// NO! This is the bug. NaN is NEVER equal to anything, not even itself!


// ===== WHY THIS HAPPENS =====
// According to IEEE 754 standard for floating-point numbers,
// NaN (Not-a-Number) is defined as NOT equal to itself.
// This is by design, not a bug!

console.log("\n--- Why is NaN special? ---");
console.log(NaN === NaN); // false
console.log(NaN == NaN);  // false
console.log(NaN > 5);     // false
console.log(NaN < 5);     // false


// ===== THE FIX =====
// Use Number.isNaN() method instead!

console.log("\n--- Solution 1: Use Number.isNaN() ---");
let a = NaN;
let b = NaN;

if (Number.isNaN(a) && Number.isNaN(b)) {
    console.log("Both are NaN"); // This will execute ✅
}


// ===== ALTERNATIVE FIX =====
// Use Object.is() method (also checks for NaN equality)

console.log("\n--- Solution 2: Use Object.is() ---");
let c = NaN;
let d = NaN;

console.log(Object.is(c, d)); // true ✅


// ===== COMPARISON =====
console.log("\n--- Comparison of all methods ---");
let num1 = NaN;
let num2 = NaN;

console.log(num1 == num2);           // false ❌ (wrong)
console.log(num1 === num2);          // false ❌ (wrong)
console.log(Number.isNaN(num1) && Number.isNaN(num2)); // true ✅ (correct)
console.log(Object.is(num1, num2));  // true ✅ (correct)


// ===== REAL-WORLD EXAMPLE =====
console.log("\n--- Real-world scenario ---");

function divideNumbers(a, b) {
    return a / b;
}

let result1 = divideNumbers(0, 0);  // NaN
let result2 = divideNumbers(5, 5);  // 1

console.log(result1); // NaN

// Wrong way to check:
if (result1 == NaN) {
    console.log("Division failed"); // This NEVER executes! ❌
}

// Correct way to check:
if (Number.isNaN(result1)) {
    console.log("Division failed"); // This executes! ✅
}
