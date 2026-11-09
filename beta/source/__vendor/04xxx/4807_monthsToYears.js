// Module ID: 4807
// Function ID: 4808
// Name: monthsToYears
// Dependencies: [4421, 4599]
// Exports: default

// Module 4807 (monthsToYears)
import daysInWeek from "daysInWeek" /* 4599 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function monthsToYears(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.monthsInYear);
};
