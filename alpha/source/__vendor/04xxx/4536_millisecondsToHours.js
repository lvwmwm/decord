// Module ID: 4536
// Function ID: 4537
// Name: millisecondsToHours
// Dependencies: [4157, 4335]
// Exports: default

// Module 4536 (millisecondsToHours)
import daysInWeek from "daysInWeek" /* 4335 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function millisecondsToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.millisecondsInHour);
};
