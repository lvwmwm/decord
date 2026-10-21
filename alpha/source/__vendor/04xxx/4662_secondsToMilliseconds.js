// Module ID: 4662
// Function ID: 4663
// Name: secondsToMilliseconds
// Dependencies: [4253, 4431]
// Exports: default

// Module 4662 (secondsToMilliseconds)
import daysInWeek from "daysInWeek" /* 4431 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function secondsToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return arg0 * daysInWeek.millisecondsInSecond;
};
