// Module ID: 4354
// Function ID: 4355
// Name: quartersToMonths
// Dependencies: [3949, 4127]
// Exports: default

// Module 4354 (quartersToMonths)
import daysInWeek from "daysInWeek" /* 4127 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function quartersToMonths(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.monthsInQuarter);
};
export default exports.default;
