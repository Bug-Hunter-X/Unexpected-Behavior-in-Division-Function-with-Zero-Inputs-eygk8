function foo(a, b) {
  if (b === 0) {
    if (a === 0) {
      return NaN; // Handle both a and b being zero
    } else {
      return Infinity; // or throw new Error("Division by zero");
    }
  }
  return a / b;
}

console.log(foo(10, 0)); // Outputs Infinity
console.log(foo(0, 10)); // Outputs 0
console.log(foo(0, 0)); // Outputs NaN 