// Module ID: 4687
// Function ID: 4688
// Name: startOfToday
// Dependencies: [4422]
// Exports: default

// Module 4687 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4422 */;

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
