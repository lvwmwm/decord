// Module ID: 4827
// Function ID: 4828
// Name: quartersToMonths
// Dependencies: [4422, 4600]
// Exports: default

// Module 4827 (quartersToMonths)
import daysInWeek from "daysInWeek" /* 4600 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

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
