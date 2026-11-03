// Module ID: 4805
// Function ID: 4806
// Name: minutesToMilliseconds
// Dependencies: [4422, 4600]
// Exports: default

// Module 4805 (minutesToMilliseconds)
import daysInWeek from "daysInWeek" /* 4600 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function minutesToMilliseconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.millisecondsInMinute);
};
