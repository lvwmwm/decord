// Module ID: 4393
// Function ID: 4394
// Name: startOfToday
// Dependencies: [4128]
// Exports: default

// Module 4393 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4128 */;

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
