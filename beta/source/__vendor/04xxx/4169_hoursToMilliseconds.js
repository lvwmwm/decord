// Module ID: 4169
// Function ID: 4170
// Name: hoursToMilliseconds
// Dependencies: [3882, 4060]
// Exports: default

// Module 4169 (hoursToMilliseconds)
import daysInWeek from "daysInWeek" /* 4060 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

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
