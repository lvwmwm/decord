// Module ID: 4863
// Function ID: 4864
// Name: yearsToQuarters
// Dependencies: [4421, 4599]
// Exports: default

// Module 4863 (yearsToQuarters)
import daysInWeek from "daysInWeek" /* 4599 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

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
