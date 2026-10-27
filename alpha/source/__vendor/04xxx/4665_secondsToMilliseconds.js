// Module ID: 4665
// Function ID: 4666
// Name: secondsToMilliseconds
// Dependencies: [4256, 4434]
// Exports: default

// Module 4665 (secondsToMilliseconds)
import daysInWeek from "daysInWeek" /* 4434 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

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
