// Module ID: 4864
// Function ID: 4865
// Name: yearsToMonths
// Dependencies: [4423, 4601]
// Exports: default

// Module 4864 (yearsToMonths)
import daysInWeek from "daysInWeek" /* 4601 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

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
