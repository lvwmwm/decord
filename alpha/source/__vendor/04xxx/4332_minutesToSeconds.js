// Module ID: 4332
// Function ID: 4333
// Name: minutesToSeconds
// Dependencies: [3948, 4126]
// Exports: default

// Module 4332 (minutesToSeconds)
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

export default function minutesToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.secondsInMinute);
};
export default exports.default;
