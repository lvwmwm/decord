// Module ID: 4544
// Function ID: 4545
// Name: hoursToSeconds
// Dependencies: [4255, 4433]
// Exports: default

// Module 4544 (hoursToSeconds)
import daysInWeek from "daysInWeek" /* 4433 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

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
