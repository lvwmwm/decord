// Module ID: 4628
// Function ID: 4629
// Name: startOfToday
// Dependencies: [4363]
// Exports: default

// Module 4628 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4363 */;

let tmp3;
let startOfDay = startOfDay_mod;
if (!startOfDay) {
  tmp3 = { default: startOfDay };
  const obj = { default: startOfDay };
} else {
  tmp3 = startOfDay;
}
startOfDay = tmp3;

export default function startOfToday() {
  return startOfDay.default(Date.now());
};
