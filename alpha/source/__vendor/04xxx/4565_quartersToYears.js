// Module ID: 4565
// Function ID: 4566
// Name: quartersToYears
// Dependencies: [4159, 4337]
// Exports: default

// Module 4565 (quartersToYears)
import daysInWeek from "daysInWeek" /* 4337 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

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
