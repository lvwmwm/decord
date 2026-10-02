// Module ID: 4350
// Function ID: 4351
// Name: startOfToday
// Dependencies: [4085]
// Exports: default

// Module 4350 (startOfToday)
import startOfDay_mod from "startOfDay" /* 4085 */;

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
