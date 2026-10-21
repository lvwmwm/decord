// Module ID: 4694
// Function ID: 4695
// Name: yearsToMonths
// Dependencies: [4253, 4431]
// Exports: default

// Module 4694 (yearsToMonths)
import daysInWeek from "daysInWeek" /* 4431 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function yearsToMonths(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.monthsInYear);
};
