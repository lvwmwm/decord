// Module ID: 4681
// Function ID: 4682
// Name: startOfToday
// Dependencies: [4416]
// Exports: default

// Module 4681 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4416 */;

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
