// Module ID: 4445
// Function ID: 4446
// Name: hoursToMinutes
// Dependencies: [4157, 4335]
// Exports: default

// Module 4445 (hoursToMinutes)
import daysInWeek from "daysInWeek" /* 4335 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

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
