// Module ID: 4671
// Function ID: 4672
// Name: millisecondsToSeconds
// Dependencies: [4290, 4468]
// Exports: default

// Module 4671 (millisecondsToSeconds)
import daysInWeek from "daysInWeek" /* 4468 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

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
