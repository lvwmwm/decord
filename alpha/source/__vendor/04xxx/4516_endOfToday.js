// Module ID: 4516
// Function ID: 4517
// Name: endOfToday
// Dependencies: [4487]
// Exports: default

// Module 4516 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4487 */;

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
