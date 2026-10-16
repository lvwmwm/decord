// Module ID: 4548
// Function ID: 4549
// Name: hoursToSeconds
// Dependencies: [4259, 4437]
// Exports: default

// Module 4548 (hoursToSeconds)
import daysInWeek from "daysInWeek" /* 4437 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function hoursToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.secondsInHour);
};
