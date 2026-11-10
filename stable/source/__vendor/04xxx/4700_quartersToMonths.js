// Module ID: 4700
// Function ID: 4701
// Name: quartersToMonths
// Dependencies: [4295, 4473]
// Exports: default

// Module 4700 (quartersToMonths)
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

export default function quartersToMonths(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.monthsInQuarter);
};
