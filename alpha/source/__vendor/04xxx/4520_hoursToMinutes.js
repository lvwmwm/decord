// Module ID: 4520
// Function ID: 4521
// Name: hoursToMinutes
// Dependencies: [4232, 4410]
// Exports: default

// Module 4520 (hoursToMinutes)
import daysInWeek from "daysInWeek" /* 4410 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

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
