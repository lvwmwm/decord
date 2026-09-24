// Module ID: 4295
// Function ID: 4296
// Name: millisecondsToSeconds
// Dependencies: [3914, 4092]
// Exports: default

// Module 4295 (millisecondsToSeconds)
import daysInWeek from "daysInWeek" /* 4092 */;
import requiredArgs_mod from "requiredArgs" /* 3914 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function millisecondsToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.millisecondsInSecond);
};
export default exports.default;
