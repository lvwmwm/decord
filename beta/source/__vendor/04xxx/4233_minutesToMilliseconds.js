// Module ID: 4233
// Function ID: 4234
// Name: minutesToMilliseconds
// Dependencies: [3850, 4028]
// Exports: default

// Module 4233 (minutesToMilliseconds)
import daysInWeek from "daysInWeek" /* 4028 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.millisecondsInMinute);
};
export default exports.default;
