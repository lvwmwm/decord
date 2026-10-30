// Module ID: 4518
// Function ID: 4519
// Name: endOfToday
// Dependencies: [4489]
// Exports: default

// Module 4518 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4489 */;

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
