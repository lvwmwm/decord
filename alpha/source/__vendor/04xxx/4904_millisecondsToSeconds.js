// Module ID: 4904
// Function ID: 4905
// Name: millisecondsToSeconds
// Dependencies: [4523, 4701]
// Exports: default

// Module 4904 (millisecondsToSeconds)
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

export default function millisecondsToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.millisecondsInSecond);
};
