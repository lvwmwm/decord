// Module ID: 4837
// Function ID: 4838
// Name: monthsToYears
// Dependencies: [4451, 4629]
// Exports: default

// Module 4837 (monthsToYears)
import daysInWeek from "daysInWeek" /* 4629 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function monthsToYears(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.monthsInYear);
};
