// Module ID: 4334
// Function ID: 4335
// Name: monthsToYears
// Dependencies: [3948, 4126]
// Exports: default

// Module 4334 (monthsToYears)
import daysInWeek from "daysInWeek" /* 4126 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function monthsToYears(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.monthsInYear);
};
export default exports.default;
