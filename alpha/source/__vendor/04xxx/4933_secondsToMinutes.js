// Module ID: 4933
// Function ID: 4934
// Name: secondsToMinutes
// Dependencies: [4523, 4701]
// Exports: default

// Module 4933 (secondsToMinutes)
import daysInWeek from "daysInWeek" /* 4701 */;
import requiredArgs_mod from "requiredArgs" /* 4523 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function secondsToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.secondsInMinute);
};
