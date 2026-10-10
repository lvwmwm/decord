// Module ID: 4582
// Function ID: 4583
// Name: minutesToHours
// Dependencies: [4200, 4378]
// Exports: default

// Module 4582 (minutesToHours)
import daysInWeek from "daysInWeek" /* 4378 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.minutesInHour);
};
