const readlineSync = require("readline-sync");

let y = Number(readlineSync.question("\nEnter a year: "));
if (!Number.isNaN(y))

{
if (y>0 && y<= Number.MAX_SAFE_INTEGER) {

if (y%4==0)

{
  if (y%100!=0) {
    console.log("\n" + y + " is a leap year.\n");
  }

  else {
    if (y%400==0) {
      console.log("\n" + y + " is a leap year.\n");
    }

    else {
      console.log("\n" + y + " is not a leap year.\n");
    }

  }
}
else {
  console.log("\n" + y + " is not a leap year.\n");
}

}
else {
console.log("\nInvalid.\n");
}

}
else {
console.log("\nInvalid.\n");
}
