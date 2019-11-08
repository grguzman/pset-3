const readlineSync = require("readline-sync");

const n = Number(readlineSync.question("\nEnter an integer: "));

if (!Number.isInteger(n)) {
    console.log("\nInvalid.\n");

} else if (n < Number.MIN_SAFE_INTEGER || n > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.\n");

} else {
    if (n%2==1) {
      console.log("\nOdd.\n")
    }
    else if (n%2==0 && !n==0) {
      console.log("\nEven.\n")
    }
    else {
      console.log("\nZero.\n")
    }
}
