// Module ID: 4637
// Function ID: 4638
// Name: quartersToMonths
// Dependencies: [4232, 4410]
// Exports: default

// Module 4637 (quartersToMonths)
import daysInWeek from "daysInWeek" /* 4410 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function quartersToMonths(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.monthsInQuarter);
};
