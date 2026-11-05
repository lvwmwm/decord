// Module ID: 4711
// Function ID: 4712
// Name: hoursToMilliseconds
// Dependencies: [4424, 4602]
// Exports: default

// Module 4711 (hoursToMilliseconds)
import daysInWeek from "daysInWeek" /* 4602 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

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
