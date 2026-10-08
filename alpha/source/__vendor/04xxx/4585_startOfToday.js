// Module ID: 4585
// Function ID: 4586
// Name: startOfToday
// Dependencies: [4320]
// Exports: default

// Module 4585 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4320 */;

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
