// Module ID: 4357
// Function ID: 4358
// Name: secondsToMilliseconds
// Dependencies: [3948, 4126]
// Exports: default

// Module 4357 (secondsToMilliseconds)
import daysInWeek from "daysInWeek" /* 4126 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function secondsToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return arg0 * daysInWeek.millisecondsInSecond;
};
export default exports.default;
