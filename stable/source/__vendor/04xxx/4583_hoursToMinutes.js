// Module ID: 4583
// Function ID: 4584
// Name: hoursToMinutes
// Dependencies: [4295, 4473]
// Exports: default

// Module 4583 (hoursToMinutes)
import daysInWeek from "daysInWeek" /* 4473 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function hoursToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.minutesInHour);
};
