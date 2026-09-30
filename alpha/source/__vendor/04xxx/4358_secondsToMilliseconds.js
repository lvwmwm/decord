// Module ID: 4358
// Function ID: 4359
// Name: secondsToMilliseconds
// Dependencies: [3949, 4127]
// Exports: default

// Module 4358 (secondsToMilliseconds)
import daysInWeek from "daysInWeek" /* 4127 */;
import requiredArgs_mod from "requiredArgs" /* 3949 */;

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
