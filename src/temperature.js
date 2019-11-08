const readlineSync = require("readline-sync");

const t = Number(readlineSync.question("\nEnter a temperature: "));
const ts = readlineSync.question("Enter a scale: ");
const tt = ts.toUpperCase();

if (t>Number.MAX_SAFE_INTEGER || t<Number.MIN_SAFE_INTEGER) {
  console.log("\nInvalid.\n");
}

else if (Number.isNaN(t)) {
  console.log("\nInvalid.\n");
}

else if (tt == "F") {
  if (t <= 32) {
    console.log("\nSolid.\n");
  }

  else if (t >= 212) {
    console.log("\nGas.\n");
  }

  else {
    console.log("\nLiquid.\n");
  }

}
else if (tt == "K") {
  if (t <= 273.15) {
    console.log("\nSolid.\n");
  }

  else if (t >= 373.15) {
    console.log("\nGas.\n");
  }

  else {
    console.log("\nLiquid.\n");
  }

}
else if (tt == "C") {
  if (t <= 0) {
    console.log("\nSolid.\n");
  }

  else if (t >= 100) {
    console.log("\nGas.\n");
  }

  else {
    console.log("\nLiquid.\n");
  }

}
else {
  console.log("\nInvalid.\n");
}
