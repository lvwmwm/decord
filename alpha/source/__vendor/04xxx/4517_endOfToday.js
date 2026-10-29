// Module ID: 4517
// Function ID: 4518
// Name: endOfToday
// Dependencies: [4488]
// Exports: default

// Module 4517 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4488 */;

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
