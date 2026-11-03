// Module ID: 4807
// Function ID: 4808
// Name: monthsToQuarters
// Dependencies: [4422, 4600]
// Exports: default

// Module 4807 (monthsToQuarters)
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

export default function monthsToQuarters(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.monthsInQuarter);
};
