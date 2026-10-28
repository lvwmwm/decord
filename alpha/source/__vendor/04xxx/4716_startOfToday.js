// Module ID: 4716
// Function ID: 4717
// Name: startOfToday
// Dependencies: [4451]
// Exports: default

// Module 4716 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4451 */;

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
