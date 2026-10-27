// Module ID: 4736
// Function ID: 4737
// Name: yearsToMonths
// Dependencies: [4295, 4473]
// Exports: default

// Module 4736 (yearsToMonths)
import daysInWeek from "daysInWeek" /* 4473 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

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
