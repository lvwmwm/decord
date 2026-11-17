// Module ID: 4975
// Function ID: 4976
// Name: monthsToQuarters
// Dependencies: [4590, 4768]
// Exports: default

// Module 4975 (monthsToQuarters)
import daysInWeek from "daysInWeek" /* 4768 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

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
