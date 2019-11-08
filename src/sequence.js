const readlineSync = require("readline-sync");

console.log("\nEnter three numbers.");

const one = Number(readlineSync.question("\n"));
const two = Number(readlineSync.question(""));
const three = Number(readlineSync.question(""));

if (Number.isNaN(one) || Number.isNaN(two) || Number.isNaN(three)) {
    console.log("\nInvalid.");

} else if (one < Number.MIN_SAFE_INTEGER || one > Number.MAX_SAFE_INTEGER || two < Number.MIN_SAFE_INTEGER || two > Number.MAX_SAFE_INTEGER || three < Number.MIN_SAFE_INTEGER || three > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");

} else {
    if (one<two && two<three) {
      console.log("\nStrictly increasing.")
    }
    else if (one==two && two==three) {
      console.log("\nEqual.")
    }
    else if (one>two && two>three) {
      console.log("\nStrictly decreasing.")
    }
    else if (one<=two && two<=three) {
      console.log("\nIncreasing.")
    }
    else if (one>=two && two>=three) {
      console.log("\nDecreasing.")
    }
    else {
      console.log("\nUnordered.")
    }
}
