// Module ID: 4487
// Function ID: 4488
// Name: endOfToday
// Dependencies: [4458]
// Exports: default

// Module 4487 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4458 */;

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
