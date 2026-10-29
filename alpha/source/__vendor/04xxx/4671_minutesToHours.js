// Module ID: 4671
// Function ID: 4672
// Name: minutesToHours
// Dependencies: [4289, 4467]
// Exports: default

// Module 4671 (minutesToHours)
import daysInWeek from "daysInWeek" /* 4467 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

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
