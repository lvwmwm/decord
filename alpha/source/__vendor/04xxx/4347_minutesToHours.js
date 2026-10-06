// Module ID: 4347
// Function ID: 4348
// Name: minutesToHours
// Dependencies: [3965, 4143]
// Exports: default

// Module 4347 (minutesToHours)
import daysInWeek from "daysInWeek" /* 4143 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

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
