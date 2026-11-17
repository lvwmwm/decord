// Module ID: 5018
// Function ID: 5019
// Name: startOfToday
// Dependencies: [4753]
// Exports: default

// Module 5018 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4753 */;

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
