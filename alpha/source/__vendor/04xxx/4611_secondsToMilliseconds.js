// Module ID: 4611
// Function ID: 4612
// Name: secondsToMilliseconds
// Dependencies: [4202, 4380]
// Exports: default

// Module 4611 (secondsToMilliseconds)
import daysInWeek from "daysInWeek" /* 4380 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

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
