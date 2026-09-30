// Module ID: 4236
// Function ID: 4237
// Name: hoursToMilliseconds
// Dependencies: [3949, 4127]
// Exports: default

// Module 4236 (hoursToMilliseconds)
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

export default function hoursToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.millisecondsInHour);
};
export default exports.default;
