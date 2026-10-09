// Module ID: 4545
// Function ID: 4546
// Name: monthsToYears
// Dependencies: [4159, 4337]
// Exports: default

// Module 4545 (monthsToYears)
import daysInWeek from "daysInWeek" /* 4337 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

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
