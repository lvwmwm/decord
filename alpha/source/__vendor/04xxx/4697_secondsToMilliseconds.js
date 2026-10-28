// Module ID: 4697
// Function ID: 4698
// Name: secondsToMilliseconds
// Dependencies: [4288, 4466]
// Exports: default

// Module 4697 (secondsToMilliseconds)
import daysInWeek from "daysInWeek" /* 4466 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

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
