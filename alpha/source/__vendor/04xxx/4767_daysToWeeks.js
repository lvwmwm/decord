// Module ID: 4767
// Function ID: 4768
// Name: daysToWeeks
// Dependencies: [4590, 4768]
// Exports: default

// Module 4767 (daysToWeeks)
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

export default function daysToWeeks(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.daysInWeek);
};
