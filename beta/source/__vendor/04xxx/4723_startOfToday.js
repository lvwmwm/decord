// Module ID: 4723
// Function ID: 4724
// Name: startOfToday
// Dependencies: [4458]
// Exports: default

// Module 4723 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4458 */;

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
