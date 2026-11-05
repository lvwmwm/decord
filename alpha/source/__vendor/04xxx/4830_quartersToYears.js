// Module ID: 4830
// Function ID: 4831
// Name: quartersToYears
// Dependencies: [4424, 4602]
// Exports: default

// Module 4830 (quartersToYears)
import daysInWeek from "daysInWeek" /* 4602 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

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
