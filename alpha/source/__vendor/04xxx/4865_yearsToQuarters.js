// Module ID: 4865
// Function ID: 4866
// Name: yearsToQuarters
// Dependencies: [4423, 4601]
// Exports: default

// Module 4865 (yearsToQuarters)
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

export default function yearsToQuarters(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.quartersInYear);
};
