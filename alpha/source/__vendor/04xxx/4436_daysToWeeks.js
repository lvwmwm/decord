// Module ID: 4436
// Function ID: 4437
// Name: daysToWeeks
// Dependencies: [4259, 4437]
// Exports: default

// Module 4436 (daysToWeeks)
import daysInWeek from "daysInWeek" /* 4437 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

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
