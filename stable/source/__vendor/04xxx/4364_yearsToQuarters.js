// Module ID: 4364
// Function ID: 4365
// Name: yearsToQuarters
// Dependencies: [3922, 4100]
// Exports: default

// Module 4364 (yearsToQuarters)
import daysInWeek from "daysInWeek" /* 4100 */;
import requiredArgs_mod from "requiredArgs" /* 3922 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function yearsToQuarters(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.quartersInYear);
};
