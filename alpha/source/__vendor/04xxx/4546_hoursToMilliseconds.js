// Module ID: 4546
// Function ID: 4547
// Name: hoursToMilliseconds
// Dependencies: [4259, 4437]
// Exports: default

// Module 4546 (hoursToMilliseconds)
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

export default function hoursToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.millisecondsInHour);
};
