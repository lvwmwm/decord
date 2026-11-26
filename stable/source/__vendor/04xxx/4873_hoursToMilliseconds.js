// Module ID: 4873
// Function ID: 4874
// Name: hoursToMilliseconds
// Dependencies: [4586, 4764]
// Exports: default

// Module 4873 (hoursToMilliseconds)
import daysInWeek from "daysInWeek" /* 4764 */;
import requiredArgs_mod from "requiredArgs" /* 4586 */;

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
