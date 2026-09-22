// Module ID: 4135
// Function ID: 4136
// Name: secondsToMilliseconds
// Dependencies: [3726, 3904]
// Exports: default

// Module 4135 (secondsToMilliseconds)
import daysInWeek from "daysInWeek" /* 3904 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

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
