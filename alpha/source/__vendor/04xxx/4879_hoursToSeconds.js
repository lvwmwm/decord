// Module ID: 4879
// Function ID: 4880
// Name: hoursToSeconds
// Dependencies: [4590, 4768]
// Exports: default

// Module 4879 (hoursToSeconds)
import daysInWeek from "daysInWeek" /* 4768 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

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
