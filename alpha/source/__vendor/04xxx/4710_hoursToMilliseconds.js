// Module ID: 4710
// Function ID: 4711
// Name: hoursToMilliseconds
// Dependencies: [4423, 4601]
// Exports: default

// Module 4710 (hoursToMilliseconds)
import daysInWeek from "daysInWeek" /* 4601 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function hoursToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.millisecondsInHour);
};
