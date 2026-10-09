// Module ID: 4587
// Function ID: 4588
// Name: startOfToday
// Dependencies: [4322]
// Exports: default

// Module 4587 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4322 */;

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
