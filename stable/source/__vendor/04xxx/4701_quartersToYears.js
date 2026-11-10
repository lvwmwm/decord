// Module ID: 4701
// Function ID: 4702
// Name: quartersToYears
// Dependencies: [4295, 4473]
// Exports: default

// Module 4701 (quartersToYears)
import daysInWeek from "daysInWeek" /* 4473 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function quartersToYears(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.quartersInYear);
};
