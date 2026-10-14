// Module ID: 4582
// Function ID: 4583
// Name: millisecondsToMinutes
// Dependencies: [4202, 4380]
// Exports: default

// Module 4582 (millisecondsToMinutes)
import daysInWeek from "daysInWeek" /* 4380 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function millisecondsToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.millisecondsInMinute);
};
