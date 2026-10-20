// Module ID: 4660
// Function ID: 4661
// Name: startOfToday
// Dependencies: [4395]
// Exports: default

// Module 4660 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4395 */;

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
