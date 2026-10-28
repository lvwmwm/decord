// Module ID: 4669
// Function ID: 4670
// Name: millisecondsToSeconds
// Dependencies: [4288, 4466]
// Exports: default

// Module 4669 (millisecondsToSeconds)
import daysInWeek from "daysInWeek" /* 4466 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

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
