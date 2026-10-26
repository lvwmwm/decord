// Module ID: 4483
// Function ID: 4484
// Name: endOfToday
// Dependencies: [4454]
// Exports: default

// Module 4483 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4454 */;

let tmp3;
let endOfDay = endOfDay_mod;
if (!endOfDay) {
  tmp3 = { default: endOfDay };
  const obj = { default: endOfDay };
} else {
  tmp3 = endOfDay;
}
endOfDay = tmp3;

export default function endOfToday() {
  return endOfDay.default(Date.now());
};
