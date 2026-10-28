// Module ID: 4715
// Function ID: 4716
// Name: startOfToday
// Dependencies: [4450]
// Exports: default

// Module 4715 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4450 */;

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
