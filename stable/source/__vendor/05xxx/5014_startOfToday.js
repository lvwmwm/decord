// Module ID: 5014
// Function ID: 5015
// Name: startOfToday
// Dependencies: [4749]
// Exports: default

// Module 5014 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4749 */;

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
