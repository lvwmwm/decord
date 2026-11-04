// Module ID: 4693
// Function ID: 4694
// Name: quartersToYears
// Dependencies: [4287, 4465]
// Exports: default

// Module 4693 (quartersToYears)
import daysInWeek from "daysInWeek" /* 4465 */;
import requiredArgs_mod from "requiredArgs" /* 4287 */;

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
