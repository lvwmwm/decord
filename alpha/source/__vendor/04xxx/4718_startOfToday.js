// Module ID: 4718
// Function ID: 4719
// Name: startOfToday
// Dependencies: [4453]
// Exports: default

// Module 4718 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4453 */;

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
