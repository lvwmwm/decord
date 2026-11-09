// Module ID: 4805
// Function ID: 4806
// Name: minutesToSeconds
// Dependencies: [4421, 4599]
// Exports: default

// Module 4805 (minutesToSeconds)
import daysInWeek from "daysInWeek" /* 4599 */;
import requiredArgs_mod from "requiredArgs" /* 4421 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.secondsInMinute);
};
