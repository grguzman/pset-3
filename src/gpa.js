const readlineSync = require("readline-sync");

let oldg = String(readlineSync.question("\nEnter a letter grade: "));
let g = String(oldg.toUpperCase());

if (!Number.isNaN(g)) {
  if (g == "F") {
    console.log("\nYour GPA is 0.00.");
  }

  else if (g == "D-") {
    console.log("\nYour GPA is 0.67.");
  }

  else if (g == "D") {
    console.log("\nYour GPA is 1.00.");
  }

  else if (g == "D+") {
    console.log("\nYour GPA is 1.33.");
  }

  else if (g == "C-") {
    console.log("\nYour GPA is 1.67.");
  }

  else if (g == "C") {
    console.log("\nYour GPA is 2.00.");
  }

  else if (g == "C+") {
    console.log("\nYour GPA is 2.33.");
  }

  else if (g == "B-") {
    console.log("\nYour GPA is 2.67.");
  }

  else if (g == "B") {
    console.log("\nYour GPA is 3.00.");
  }

  else if (g == "B+") {
    console.log("\nYour GPA is 3.33.");
  }

  else if (g == "A-") {
    console.log("\nYour GPA is 3.67.");
  }

  else if (g == "A") {
    console.log("\nYour GPA is 4.00");
  }

  else if (g == "A+") {
    console.log("\nYour GPA is 4.00");
  }

  else {
    console.log("\nInvalid.")
  }
}

else {
    console.log("\nInvalid.")
}
