const readlineSync = require("readline-sync");

const AANDABOVE = 100;
const AANDUNDER = 90;
const BANDUNDER = 80;
const CANDUNDER = 70;
const DANDUNDER = 60;
const FANDUNDER = 0;

let g = Number(readlineSync.question("\nEnter a grade: "));

if (!Number.isNaN(g))
 {
  if (g >= AANDUNDER && g <= AANDABOVE) {
    console.log("\nYou received an A.\n");
  }

  else if (g >= BANDUNDER && g < AANDUNDER) {
    console.log("\nYou received a B.\n");
  }

  else if (g >= CANDUNDER && g < BANDUNDER) {
    console.log("\nYou received a C.\n");
  }

  else if (g >= DANDUNDER && g < CANDUNDER) {
    console.log("\nYou received a D.\n");
  }

  else if (g >= FANDUNDER && g < DANDUNDER) {
    console.log("\nYou received a F.\n");
  }

  else {
    console.log("\nInvalid.\n")
  }

}
else {
    console.log("\nInvalid.\n")
}
