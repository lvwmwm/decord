// Module ID: 4325
// Function ID: 4326
// Name: quartersToYears
// Dependencies: [3919, 4097]
// Exports: default

// Module 4325 (quartersToYears)
import daysInWeek from "daysInWeek" /* 4097 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

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
