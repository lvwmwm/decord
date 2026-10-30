// Module ID: 4695
// Function ID: 4696
// Name: quartersToMonths
// Dependencies: [4290, 4468]
// Exports: default

// Module 4695 (quartersToMonths)
import daysInWeek from "daysInWeek" /* 4468 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

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
