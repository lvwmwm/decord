// Module ID: 4167
// Function ID: 4168
// Name: yearsToMonths
// Dependencies: [3726, 3904]
// Exports: default

// Module 4167 (yearsToMonths)
import daysInWeek from "daysInWeek" /* 3904 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function yearsToMonths(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.monthsInYear);
};
export default exports.default;
