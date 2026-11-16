// Module ID: 4879
// Function ID: 4880
// Name: startOfToday
// Dependencies: [4614]
// Exports: default

// Module 4879 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4614 */;

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
