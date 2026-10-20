// Module ID: 4618
// Function ID: 4619
// Name: monthsToYears
// Dependencies: [4232, 4410]
// Exports: default

// Module 4618 (monthsToYears)
import daysInWeek from "daysInWeek" /* 4410 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

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
