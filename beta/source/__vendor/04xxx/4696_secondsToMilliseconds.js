// Module ID: 4696
// Function ID: 4697
// Name: secondsToMilliseconds
// Dependencies: [4287, 4465]
// Exports: default

// Module 4696 (secondsToMilliseconds)
import daysInWeek from "daysInWeek" /* 4465 */;
import requiredArgs_mod from "requiredArgs" /* 4287 */;

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
