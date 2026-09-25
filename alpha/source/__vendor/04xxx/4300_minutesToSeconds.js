// Module ID: 4300
// Function ID: 4301
// Name: minutesToSeconds
// Dependencies: [3916, 4094]
// Exports: default

// Module 4300 (minutesToSeconds)
import daysInWeek from "daysInWeek" /* 4094 */;
import requiredArgs_mod from "requiredArgs" /* 3916 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.secondsInMinute);
};
export default exports.default;
