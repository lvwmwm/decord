// Module ID: 4599
// Function ID: 4600
// Name: daysToWeeks
// Dependencies: [4422, 4600]
// Exports: default

// Module 4599 (daysToWeeks)
import daysInWeek from "daysInWeek" /* 4600 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function daysToWeeks(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.daysInWeek);
};
