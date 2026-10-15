// Module ID: 4698
// Function ID: 4699
// Name: yearsToQuarters
// Dependencies: [4256, 4434]
// Exports: default

// Module 4698 (yearsToQuarters)
import daysInWeek from "daysInWeek" /* 4434 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

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
