// Module ID: 4523
// Function ID: 4524
// Name: endOfToday
// Dependencies: [4494]
// Exports: default

// Module 4523 (endOfToday)
import endOfDay_mod from "endOfDay" /* 4494 */;

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
