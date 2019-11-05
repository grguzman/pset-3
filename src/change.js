const readlineSync = require("readline-sync");

const q = 0.25;
const d = 0.10;
const n = 0.05;
const p = 0.01;

const MIN = 0.01;
const MAX = 0.99;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

const Tqcr = //total quarter change recieved
const Tdcr = //total dime change recieved
const Tncr = //total nickel change recieved
const Tpcr = //total penny change recieved

if (Number.isNaN(amount)) {
    // print your error message here
} else if (amount < MIN || amount > MAX) {
    // print your error message here
} else {
    // write your code for making change here
}
