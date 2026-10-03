// Module ID: 4387
// Function ID: 4388
// Name: startOfToday
// Dependencies: [4122]
// Exports: default

// Module 4387 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4122 */;

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
