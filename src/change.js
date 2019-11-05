const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const amountofmoneyinputed = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amountofmoneyinputed)) {
    console.log("\nInvalid.");

} else if (amountofmoneyinputed < MIN || amountofmoneyinputed > MAX) {
    console.log("\nInvalid.");

} else {
    const q = Math.floor(amountofmoneyinputed/0.25);
    const d = Math.floor((amountofmoneyinputed - 0.25*q)/0.1);
    const n = Math.floor((amountofmoneyinputed - 0.25*q-0.1*d)/0.05);
    const p = Math.ceil((amountofmoneyinputed - 0.25*q-0.1*d-0.05*n)/0.01);

    console.log("\n" + q + " quarters, " + d + " dimes, " + n + " nickels, and " + p + " pennies.");
}
